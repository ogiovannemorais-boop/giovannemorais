import { z } from 'npm:zod@3';

const MetaEnvelope = z.object({
  source: z.literal('meta'),
  lead: z.object({
    id: z.string().trim().min(1).max(200),
    created_time: z.string().max(100).nullish(),
    form_id: z.string().max(200).nullish(),
    campaign_name: z.string().max(200).nullish(),
    adset_name: z.string().max(200).nullish(),
    ad_name: z.string().max(200).nullish(),
    platform: z.string().max(100).nullish(),
    field_data: z.array(z.object({
      name: z.string().max(500),
      values: z.array(z.string().max(2000)).max(20),
    })).max(100),
  }),
});

const normalizedName = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const missing = 'Não informado';

/** Leave website bodies untouched; only adapt the explicit Meta envelope. */
export function normalizeSubmission(raw: unknown) {
  if (typeof raw !== 'object' || raw === null || !('source' in raw) || raw.source !== 'meta') {
    return { source: 'site' as const, record: raw };
  }
  const { lead } = MetaEnvelope.parse(raw);
  const fields = lead.field_data.map((field) => ({
    name: normalizedName(field.name), value: field.values.find((value) => value.trim())?.trim() || '',
  }));
  const find = (predicate: (name: string) => boolean) => fields.find((field) => field.value && predicate(field.name))?.value || '';
  const exact = (name: string) => find((key) => key === name);
  const company = find((key) => key.includes('empresa'));
  const phone = exact('phone_number') || find((key) => ['phone', 'telefone', 'whatsapp'].some((word) => key.includes(word)));
  const fullName = exact('full_name') || [exact('first_name'), exact('last_name')].filter(Boolean).join(' ') || find((key) => key.includes('nome') && !key.includes('empresa'));
  return {
    source: 'meta' as const,
    record: {
      nome: fullName || missing,
      whatsapp: phone.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '') || missing,
      empresa: company || missing,
      cidade: company || missing,
      produto: 'Não informado (formulário Meta)',
      faturamento: find((key) => key.includes('faturamento')) || missing,
      verba: find((key) => key.includes('investir') || key.includes('anuncio')) || missing,
      desafio: find((key) => key.includes('desafio')) || missing,
      utm_source: 'facebook',
      utm_medium: 'lead_ads',
      utm_campaign: lead.campaign_name || null,
      utm_content: lead.ad_name || null,
      utm_term: lead.adset_name || null,
      page_url: `Formulário Meta: form ${lead.form_id || missing}`,
      meta_lead_id: lead.id,
    },
  };
}

export function submissionLabels(source: 'meta' | 'site') {
  return source === 'meta'
    ? { tag: 'meta-lead-ads', title: 'Novo lead do Meta', subject: 'Novo lead do Meta' }
    : { tag: 'site', title: 'Novo lead no site', subject: 'Novo lead' };
}