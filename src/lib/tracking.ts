// UTM tracking + envio de leads para Google Sheets via Apps Script Webhook
export const GOOGLE_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxAz-zzk0K_fLg06SXy68BsgsuKklZpOtL2d1kManO9simhf9rLibMl5ZYR8-qz3TZB/exec';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
type UtmKey = (typeof UTM_KEYS)[number];
type Utms = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = 'site_utms';

export function captureUtmsFromUrl(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const utms: Utms = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) utms[k] = v;
    });
    if (utms.utm_source) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    }
  } catch {
    // ignore
  }
}

export function getSavedUtms(): Utms {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Utms) : {};
  } catch {
    return {};
  }
}

export interface LeadPayload {
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  contexto?: string;
  page_variant?: string;
  test?: boolean;
}

export interface LeadSendResult {
  ok: boolean;
  status: number;
  data?: unknown;
  error?: string;
  payload: Record<string, unknown>;
}

export async function sendLeadToSheets(lead: LeadPayload): Promise<LeadSendResult> {
  const payload: Record<string, unknown> = {
    ...lead,
    contexto: lead.contexto ?? '',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    ...getSavedUtms(),
  };

  try {
    // text/plain evita preflight CORS — Apps Script devolve JSON legível.
    const res = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const text = await res.text();
    let data: unknown = text;
    try {
      data = JSON.parse(text);
    } catch {
      // resposta não-JSON (mantém texto)
    }

    const okFlag =
      res.ok &&
      (typeof data !== 'object' ||
        data === null ||
        (data as { result?: string; ok?: boolean }).result !== 'error');

    return {
      ok: okFlag,
      status: res.status,
      data,
      payload,
    };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      error: e instanceof Error ? e.message : String(e),
      payload,
    };
  }
}
