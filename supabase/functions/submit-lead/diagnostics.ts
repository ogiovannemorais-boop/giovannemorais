import { z } from 'npm:zod@3';

const phoneKey = (key: string) => /phone|telefone|whatsapp/i.test(key.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
const secretKey = (key: string) => /token|secret|authorization|password|api.?key/i.test(key);
const maskPhoneText = (text: string) => text.replace(/\+?\d[\d\s().-]{8,}\d/g, '[telefone oculto]');

/** Sanitize before logging, including array answers and malformed JSON text. */
export function redactReceivedBody(value: unknown, key = '', depth = 0): unknown {
  if (phoneKey(key) || secretKey(key)) return '[oculto]';
  if (depth > 12) return '[profundidade limitada]';
  if (typeof value === 'string') return maskPhoneText(value);
  if (typeof value === 'number') return maskPhoneText(String(value));
  if (Array.isArray(value)) return value.slice(0, 100).map((item) => redactReceivedBody(item, key, depth + 1));
  if (value && typeof value === 'object') {
    const object = value as Record<string, unknown>;
    const answerIsPhone = typeof object.name === 'string' && phoneKey(object.name);
    return Object.fromEntries(Object.entries(object).slice(0, 100).map(([name, item]) => [
      maskPhoneText(name), answerIsPhone && name === 'values' ? '[oculto]' : redactReceivedBody(item, name, depth + 1),
    ]));
  }
  return value;
}

export function invalidBodyDetails(error: unknown) {
  if (error instanceof z.ZodError) {
    const expand = (issues: z.ZodIssue[]): { path: string; code: string; message: string }[] => issues.flatMap((issue) =>
      issue.code === 'invalid_union'
        ? expand(issue.unionErrors.flatMap((branch) => branch.issues))
        : [{ path: issue.path.join('.') || 'body', code: issue.code, message: issue.message }]);
    return { error: error.flatten().fieldErrors, details: expand(error.issues) };
  }
  return { error: 'invalid json', details: [{ path: 'body', code: 'invalid_json', message: 'Request body must be valid JSON.' }] };
}