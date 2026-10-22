import { assertEquals, assertThrows } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { normalizeSubmission, submissionLabels } from './normalize.ts';

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
Deno.test('Meta requires a stable non-empty ID for deduplication', () => {
  assertThrows(() => normalizeSubmission({ ...envelope([]), lead: { ...envelope([]).lead, id: '' } }));
});
Deno.test('Meta labels are distinct while site labels remain unchanged', () => {
  assertEquals(submissionLabels('meta'), { tag: 'meta-lead-ads', title: 'Novo lead do Meta', subject: 'Novo lead do Meta' });
  assertEquals(submissionLabels('site'), { tag: 'site', title: 'Novo lead no site', subject: 'Novo lead' });
});