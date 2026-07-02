// UTM tracking + envio de leads para Google Sheets via Apps Script Webhook
export const GOOGLE_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbyvx8Yr40lAXtfs7WYQEE73ESPQEmk0HbJAtUEkAN_uBZ-U4wTmZA8ZX7v5I-hnFYw2/exec';

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
}

export function sendLeadToSheets(lead: LeadPayload): void {
  if (typeof window === 'undefined') return;
  const payload = {
    ...lead,
    contexto: lead.contexto ?? '',
    page_url: window.location.href,
    ...getSavedUtms(),
  };
  try {
    fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((e) => console.log('Tracking log:', e));
  } catch (e) {
    console.log('Tracking log:', e);
  }
}
