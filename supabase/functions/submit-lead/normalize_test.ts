import { assertEquals, assertThrows } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { normalizeSubmission, submissionLabels } from './normalize.ts';
import { invalidBodyDetails, redactReceivedBody } from './diagnostics.ts';

const envelope = (fields: [string, string][]) => ({ source: 'meta', lead: {
  id: 'meta-test-123', form_id: 'form-123', campaign_name: 'TESTE', ad_name: 'Anúncio teste', adset_name: 'Conjunto teste',
  field_data: fields.map(([name, value]) => ({ name, values: [value] })),
} });
const record = (fields: [string, string][]) => normalizeSubmission(envelope(fields)).record;

Deno.test('Meta maps accented questions and shared company/city answer', () => {
  assertEquals(record([
    ['full_name', 'Teste Meta'], ['phone_number', '+5516982193870'], ['Nome da empresa e cidade', 'Empresa Teste Meta - Franca'],
    ['Qual seu FATURAMENTO mensal?', 'R$ 30 mil a R$ 100 mil'], ['Quanto pretende investir em anúncios?', 'Até R$ 1.500'], ['Maior DESAFÍO', 'Dependo só de indicação'],
  ]), {
    nome: 'Teste Meta', whatsapp: '16982193870', empresa: 'Empresa Teste Meta - Franca', cidade: 'Empresa Teste Meta - Franca',
    produto: 'Não informado (formulário Meta)', faturamento: 'R$ 30 mil a R$ 100 mil', verba: 'Até R$ 1.500', desafio: 'Dependo só de indicação',
    utm_source: 'facebook', utm_medium: 'lead_ads', utm_campaign: 'TESTE', utm_content: 'Anúncio teste', utm_term: 'Conjunto teste',
    page_url: 'Formulário Meta: form form-123', meta_lead_id: 'meta-test-123',
  });
});
Deno.test('Meta uses first and last name before tolerant personal-name question', () => {
  const result = record([['first_name', 'Teste'], ['last_name', 'Meta'], ['Seu nome', 'Outro']]) as { nome: string };
  assertEquals(result.nome, 'Teste Meta');
});
Deno.test('Meta tolerant personal name excludes company and normalizes phone aliases', () => {
  const result = record([['Nome da empresa', 'Empresa'], ['Seu NÓME completo', 'Teste Meta'], ['Seu TELEFÓNE', '+55 (16) 98219-3870']]) as { nome: string; whatsapp: string };
  assertEquals(result.nome, 'Teste Meta');
  assertEquals(result.whatsapp, '16982193870');
});
Deno.test('Meta defaults missing answers without confusing company with personal name', () => {
  const result = record([]) as Record<string, unknown>;
  for (const key of ['nome', 'whatsapp', 'empresa', 'cidade', 'faturamento', 'verba', 'desafio']) assertEquals(result[key], 'Não informado');
  assertEquals(result.produto, 'Não informado (formulário Meta)');
});
Deno.test('Meta accepts anuncio keyword and preserves a phone already containing only DDD', () => {
  const result = record([['Verba de ANÚNCIOS', 'Até R$ 1.500'], ['whatsapp', '16982193870']]) as { verba: string; whatsapp: string };
  assertEquals(result.verba, 'Até R$ 1.500');
  assertEquals(result.whatsapp, '16982193870');
});
Deno.test('Website submission is not normalized or changed', () => {
  const site = { nome: 'Cliente Site', whatsapp: '16982193870', empresa: 'Empresa Site' };
  assertEquals(normalizeSubmission(site), { source: 'site', record: site });
});
Deno.test('Meta accepts absent empty or null ID without rejecting the lead', () => {
  for (const id of [undefined, '', '  ', null]) {
    const result = normalizeSubmission({ ...envelope([]), lead: { ...envelope([]).lead, id } }).record as { meta_lead_id: null };
    assertEquals(result.meta_lead_id, null);
  }
});
Deno.test('Meta labels are distinct while site labels remain unchanged', () => {
  assertEquals(submissionLabels('meta'), { tag: 'meta-lead-ads', title: 'Novo lead do Meta', subject: 'Novo lead do Meta' });
  assertEquals(submissionLabels('site'), { tag: 'site', title: 'Novo lead no site', subject: 'Novo lead' });
});

const answers = { full_name: 'Teste Make', phone_number: '+5516982193870', 'Nome da empresa e cidade': 'Empresa - Franca', 'Faturamento': 'R$ 30 mil a R$ 100 mil', 'Investir em anúncio': 'Até R$ 1.500', 'Desafio': 'Dependo só de indicação' };
for (const [name, field_data] of [
  ['array values array', Object.entries(answers).map(([name, value]) => ({ name, values: [value] }))],
  ['array values string', Object.entries(answers).map(([name, values]) => ({ name, values }))],
  ['object values string or array', { ...answers, phone_number: [answers.phone_number] }],
] as const) {
  Deno.test(`Make supports ${name}`, () => {
    assertEquals(normalizeSubmission({ ...envelope([]), lead: { ...envelope([]).lead, field_data } }),
      normalizeSubmission(envelope(Object.entries(answers))));
  });
}
for (const key of ['id', 'form_id', 'created_time', 'campaign_name', 'adset_name', 'ad_name', 'platform']) {
  Deno.test(`Meta metadata ${key} accepts numbers empty and null`, () => {
    for (const value of [123, '123', '', '  ', null, undefined]) {
      const actual = normalizeSubmission({ ...envelope([]), lead: { ...envelope([]).lead, [key]: value } });
      const expected = normalizeSubmission({ ...envelope([]), lead: { ...envelope([]).lead, [key]: value == null || String(value).trim() === '' ? null : String(value) } });
      assertEquals(actual, expected);
      if (key === 'id') assertEquals((actual.record as { meta_lead_id: unknown }).meta_lead_id, value === 123 || value === '123' ? '123' : null);
    }
  });
}
Deno.test('Invalid Make answers return precise field paths', () => {
  try {
    normalizeSubmission({ ...envelope([]), lead: { ...envelope([]).lead, field_data: [{ name: 'phone_number', values: true }] } });
    throw new Error('Expected validation failure');
  } catch (error) {
    const result = invalidBodyDetails(error);
    assertEquals(result.details.some((issue) => issue.path === 'lead.field_data.0.values'), true);
  }
});
Deno.test('Malformed Meta lead is still rejected', () => {
  assertThrows(() => normalizeSubmission({ source: 'meta', lead: null }));
});
Deno.test('Diagnostics mask phones in all Make representations and malformed JSON', () => {
  const raw = { phone_number: answers.phone_number, field_data: [{ name: 'Seu telefone', values: ['16982193870'] }], unknown: 'contato +55 (16) 98219-3870', token: 'private', numeric: 5516982193870 };
  assertEquals(redactReceivedBody(raw), { phone_number: '[oculto]', field_data: [{ name: 'Seu telefone', values: '[oculto]' }], unknown: 'contato [telefone oculto]', token: '[oculto]', numeric: '[telefone oculto]' });
  assertEquals(redactReceivedBody('{"phone_number":"+5516982193870"'), '{"phone_number":"[telefone oculto]"');
});