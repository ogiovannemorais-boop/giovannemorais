import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3';

const s = (max: number) => z.string().trim().min(1).max(max);
const o = (max: number) => z.string().trim().max(max).nullish().transform((v) => v || null);

const Body = z.object({
  nome: s(100), whatsapp: s(20), empresa: s(120), cidade: s(120), produto: s(300),
  faturamento: s(60), verba: s(60), desafio: s(80),
  utm_source: o(200), utm_medium: o(200), utm_campaign: o(200), utm_content: o(200), utm_term: o(200),
  page_url: o(1000),
});

const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method' }, 405);

  let raw: unknown;
  try { raw = await req.json(); } catch { return json({ error: 'invalid json' }, 400); }
  const parsed = Body.safeParse(raw);
  if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400);
  const lead = parsed.data;

  const db = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const { data: row, error } = await db.from('leads').insert(lead).select('id, created_at').single();
  if (error) { console.error('insert', error); return json({ error: 'insert failed' }, 500); }

  const digits = lead.whatsapp.replace(/\D/g, '');
  const date = new Date(row.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const desc = [
    `WhatsApp: ${lead.whatsapp} (https://wa.me/55${digits})`,
    `Empresa: ${lead.empresa}`,
    `Cidade: ${lead.cidade}`,
    `O que vende: ${lead.produto}`,
    `Faturamento mensal: ${lead.faturamento}`,
    `Verba de anúncios/mês: ${lead.verba}`,
    `Maior desafio: ${lead.desafio}`,
    `Origem: utm_source=${lead.utm_source ?? ''} | utm_medium=${lead.utm_medium ?? ''} | utm_campaign=${lead.utm_campaign ?? ''} | utm_content=${lead.utm_content ?? ''} | utm_term=${lead.utm_term ?? ''}`,
    `Página: ${lead.page_url ?? ''}`,
    `Data: ${date}`,
  ].join('\n\n');

  let update: Record<string, string | null>;
  try {
    const token = Deno.env.get('CLICKUP_API_TOKEN');
    if (!token) throw new Error('CLICKUP_API_TOKEN ausente');
    const r = await fetch('https://api.clickup.com/api/v2/list/901325705004/task', {
      method: 'POST',
      headers: { Authorization: token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: `${lead.nome} · ${lead.empresa}`, status: 'leads', tags: ['site'], markdown_description: desc }),
    });
    const text = await r.text();
    if (!r.ok) throw new Error(`HTTP ${r.status}: ${text.slice(0, 500)}`);
    update = { clickup_status: 'ok', clickup_task_id: JSON.parse(text).id ?? null, clickup_error: null };
  } catch (e) {
    console.error('clickup', e);
    update = { clickup_status: 'error', clickup_error: String(e instanceof Error ? e.message : e).slice(0, 1000) };
  }
  await db.from('leads').update(update).eq('id', row.id);

  return json({ ok: true, clickup: update.clickup_status });
});
