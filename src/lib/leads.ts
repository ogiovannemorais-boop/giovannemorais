import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

export const FATURAMENTO = ['Até R$ 30 mil', 'R$ 30 mil a R$ 100 mil', 'R$ 100 mil a R$ 500 mil', 'Acima de R$ 500 mil'];
export const VERBA = ['Ainda não invisto', 'Até R$ 1.500', 'R$ 1.500 a R$ 5.000', 'Acima de R$ 5.000'];
export const DESAFIO = ['Poucos clientes chegando', 'Muitos contatos que não compram', 'Anúncio caro e sem retorno', 'Dependo só de indicação', 'Outro'];

export const WHATSAPP_NUMBER = '5516993807936';

export const leadSchema = z.object({
  nome: z.string().trim().min(2, 'Informe seu nome').max(100),
  whatsapp: z
    .string()
    .transform((v) => v.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, ''))
    .refine((v) => /^[1-9]{2}(9\d{8}|[2-8]\d{7})$/.test(v), 'WhatsApp inválido. Use DDD + número'),
  empresa: z.string().trim().min(2, 'Informe a empresa').max(120),
  cidade: z.string().trim().min(2, 'Informe a cidade').max(120),
  produto: z.string().trim().min(2, 'Conte o que sua empresa vende').max(300),
  faturamento: z.enum(FATURAMENTO as [string, ...string[]], { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  verba: z.enum(VERBA as [string, ...string[]], { errorMap: () => ({ message: 'Selecione uma opção' }) }),
  desafio: z.enum(DESAFIO as [string, ...string[]], { errorMap: () => ({ message: 'Selecione uma opção' }) }),
});

export type Lead = z.infer<typeof leadSchema>;

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

export function getUtms() {
  const p = new URLSearchParams(window.location.search);
  return Object.fromEntries(UTM_KEYS.map((k) => [k, p.get(k)?.slice(0, 200) || null])) as Record<
    (typeof UTM_KEYS)[number],
    string | null
  >;
}

export type LeadRecord = Lead & ReturnType<typeof getUtms> & { page_url: string };

/** Destinos extras do lead (ex.: ClickUp). Falhas aqui não bloqueiam o envio. */
const integrations: Array<(lead: LeadRecord) => Promise<void>> = [
  // sendToClickUp será adicionado aqui
];

export async function submitLead(lead: Lead) {
  const record: LeadRecord = { ...lead, ...getUtms(), page_url: window.location.href.slice(0, 1000) };
  const { error } = await supabase.from('leads').insert(record as Required<Lead> & typeof record);
  if (error) throw error;
  await Promise.allSettled(integrations.map((fn) => fn(record)));
  return record;
}

export function buildWhatsAppUrl(lead: Pick<Lead, 'nome' | 'empresa' | 'desafio'>) {
  const msg = `Olá, Giovanne! Sou ${lead.nome}, da ${lead.empresa}. Acabei de pedir o diagnóstico gratuito pelo site. Meu maior desafio hoje: ${lead.desafio}.`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
}
