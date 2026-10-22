import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3';
import { normalizeSubmission, submissionLabels } from './normalize.ts';
import { invalidBodyDetails, redactReceivedBody } from './diagnostics.ts';

const s = (max: number) => z.string().trim().min(1).max(max);
const o = (max: number) => z.string().trim().max(max).nullish().transform((v) => v || null);

const Body = z.object({
  nome: s(100), whatsapp: s(20), empresa: s(120), cidade: s(120), produto: s(300),
  faturamento: s(60), verba: s(60), desafio: s(80),
  utm_source: o(200), utm_medium: o(200), utm_campaign: o(200), utm_content: o(200), utm_term: o(200),
  page_url: o(1000),
  meta_lead_id: z.string().trim().min(1).max(200).nullish(),
});

const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method' }, 405);

  const bodyText = await req.text();
  let raw: unknown;
  const invalid = (error: unknown, received: unknown) => {
    const details = invalidBodyDetails(error);
    console.log('submit-lead invalid body', JSON.stringify(redactReceivedBody(received)), details);
    return json(details, 400);
  };
  try { raw = JSON.parse(bodyText); } catch (e) { return invalid(e, bodyText); }
  let submission: ReturnType<typeof normalizeSubmission>;
  try { submission = normalizeSubmission(raw); }
  catch (e) {
    return invalid(e, raw);
  }
  // Website callers cannot set the external deduplication key.
  const parsed = Body.safeParse(submission.source === 'site' && typeof submission.record === 'object' && submission.record !== null
    ? { ...submission.record, meta_lead_id: undefined }
    : submission.record);
  if (!parsed.success) return invalid(parsed.error, raw);
  const lead = parsed.data;

  const dbUrl = Deno.env.get('SUPABASE_URL');
  const dbKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!dbUrl || !dbKey) return json({ error: 'backend configuration missing' }, 500);
  const db = createClient(dbUrl, dbKey);
  const { data: row, error } = await db.from('leads').insert(lead).select('id, created_at').single();
  // The unique index also protects simultaneous Make retries, not just sequential requests.
  if (error?.code === '23505' && submission.source === 'meta' && lead.meta_lead_id) {
    const { data: existing, error: lookupError } = await db.from('leads').select('id').eq('meta_lead_id', lead.meta_lead_id).maybeSingle();
    if (!lookupError && existing) return json({ ok: true, duplicate: true });
  }
  if (error) { console.error('insert', error); return json({ error: 'insert failed' }, 500); }
  if (!row) return json({ error: 'insert failed' }, 500);
  const labels = submissionLabels(submission.source);

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
      body: JSON.stringify({ name: `${lead.nome} · ${lead.empresa}`, status: 'leads', tags: [labels.tag], markdown_description: desc }),
    });
    const text = await r.text();
    if (!r.ok) throw new Error(`HTTP ${r.status}: ${text.slice(0, 500)}`);
    update = { clickup_status: 'ok', clickup_task_id: JSON.parse(text).id ?? null, clickup_error: null };
  } catch (e) {
    console.error('clickup', e);
    update = { clickup_status: 'error', clickup_error: String(e instanceof Error ? e.message : e).slice(0, 1000) };
  }
  const taskId = update.clickup_task_id ?? null;
  const taskUrl = taskId ? `https://app.clickup.com/t/${taskId}` : null;
  const waLead = digits ? `https://wa.me/55${digits}` : '';
  const origem = lead.utm_source || lead.utm_campaign ? `${lead.utm_source ?? ''} / ${lead.utm_campaign ?? ''}` : 'direto';
  const err = (e: unknown) => String(e instanceof Error ? e.message : e).slice(0, 1000);

  const sendWhatsApp = async () => {
    const key = Deno.env.get('CALLMEBOT_API_KEY');
    if (!key) throw new Error('CALLMEBOT_API_KEY ausente');
    const text = [
      `*${labels.title}*`, `Nome: ${lead.nome}`, `Empresa: ${lead.empresa}`, `Cidade: ${lead.cidade}`,
      `WhatsApp: ${lead.whatsapp} ${waLead}`, `Vende: ${lead.produto}`, `Faturamento: ${lead.faturamento}`,
      `Verba: ${lead.verba}`, `Desafio: ${lead.desafio}`, `Origem: ${origem}`,
      taskUrl ? `ClickUp: ${taskUrl}` : '',
    ].filter(Boolean).join('\n');
    const u = `https://api.callmebot.com/whatsapp.php?phone=5516982193870&apikey=${encodeURIComponent(key)}&text=${encodeURIComponent(text)}`;
    const r = await fetch(u);
    const body = await r.text();
    if (!r.ok || /error|invalid|not/i.test(body.slice(0, 300)) && !/queued|sent/i.test(body)) throw new Error(`HTTP ${r.status}: ${body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 500)}`);
  };

  const esc = (v: string) => v.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] ?? c));
  const sendEmail = async () => {
    const key = Deno.env.get('RESEND_API_KEY');
    if (!key) throw new Error('RESEND_API_KEY ausente');
    const rows: [string, string][] = [
      ['Nome', lead.nome], ['Empresa', lead.empresa], ['Cidade', lead.cidade], ['WhatsApp', lead.whatsapp],
      ['O que vende', lead.produto], ['Faturamento', lead.faturamento], ['Verba/mês', lead.verba],
      ['Desafio', lead.desafio], ['Origem', origem], ['Página', lead.page_url ?? ''], ['Data', date],
    ];
    const btn = (href: string, label: string, bg: string) =>
      `<a href="${esc(href)}" style="display:inline-block;padding:12px 20px;margin:4px 8px 4px 0;border-radius:8px;background:${bg};color:#fff;text-decoration:none;font-weight:600">${label}</a>`;
    const html = `<div style="font-family:Arial,sans-serif;max-width:560px;color:#0B1220"><h2 style="margin:0 0 16px">${esc(labels.subject)}: ${esc(lead.nome)} · ${esc(lead.empresa)}</h2><table style="border-collapse:collapse;width:100%">${rows.map(([k, v]) => `<tr><td style="padding:6px 8px;color:#64748B;width:130px;vertical-align:top">${k}</td><td style="padding:6px 8px">${esc(v)}</td></tr>`).join('')}</table><p style="margin-top:20px">${waLead ? btn(waLead, 'Chamar no WhatsApp', '#16A34A') : ''}${taskUrl ? btn(taskUrl, 'Abrir no ClickUp', '#1D4ED8') : ''}</p></div>`;
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: 'Site Giovanne <onboarding@resend.dev>', to: ['ogiovannemorais@gmail.com'], subject: `${labels.subject}: ${lead.nome} · ${lead.empresa}`, html }),
    });
    const body = await r.text();
    if (!r.ok) throw new Error(`HTTP ${r.status}: ${body.slice(0, 500)}`);
  };

  const [wa, em] = await Promise.allSettled([sendWhatsApp(), sendEmail()]);
  const notify = {
    notify_whatsapp_status: wa.status === 'fulfilled' ? 'ok' : 'error',
    notify_whatsapp_error: wa.status === 'rejected' ? err(wa.reason) : null,
    notify_email_status: em.status === 'fulfilled' ? 'ok' : 'error',
    notify_email_error: em.status === 'rejected' ? err(em.reason) : null,
  };
  if (wa.status === 'rejected') console.error('callmebot', wa.reason);
  if (em.status === 'rejected') console.error('resend', em.reason);
  await db.from('leads').update({ ...update, ...notify }).eq('id', row.id);

  return json({ ok: true, clickup: update.clickup_status, whatsapp: notify.notify_whatsapp_status, email: notify.notify_email_status });
});
