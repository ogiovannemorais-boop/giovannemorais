import { describe, expect, test } from 'bun:test';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, specialistInfo } from '../data/links';

describe('Giovanne contact destination', () => {
  test('uses the requested number', () => {
    expect(WHATSAPP_NUMBER).toBe('5516982193870');
    expect(new URL(WHATSAPP_LINK).searchParams.get('phone')).toBe('5516982193870');
    expect(specialistInfo.phone).toBe('(16) 98219-3870');
  });
});