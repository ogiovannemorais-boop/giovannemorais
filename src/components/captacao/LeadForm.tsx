import { useState } from 'react';
import { z } from 'zod';
import { sendLeadToSheets } from '@/lib/tracking';

const schema = z.object({
  nome: z.string().trim().min(2, 'Informe seu nome').max(80),
  empresa: z.string().trim().min(2, 'Informe sua empresa ou loja').max(120),
  email: z.string().trim().email('E-mail inválido').max(160),
  whatsapp: z
    .string()
    .trim()
    .min(10, 'WhatsApp com DDD')
    .max(20)
    .regex(/^[0-9()\-+\s]+$/, 'Apenas números e ( ) - +'),
  mensagem: z.string().trim().max(600).optional(),
});

type Variant = 'b2b' | 'ecommerce';

const WA_PHONE = '5516988037193';

interface LeadFormProps {
  variant: Variant;
  ctaLabel: string;
}

export function LeadForm({ variant, ctaLabel }: LeadFormProps) {
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    mensagem: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Verifique os campos');
      return;
    }
    setSending(true);

    if (typeof window !== 'undefined') {
      const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dl)) {
        dl.push({ event: 'lead_submit', page_variant: variant });
      }
    }

    sendLeadToSheets({
      nome: parsed.data.nome,
      empresa: parsed.data.empresa,
      email: parsed.data.email,
      whatsapp: parsed.data.whatsapp,
      contexto: parsed.data.mensagem,
      page_variant: variant,
    });

    window.location.href = '/obrigado';
  };

  const inputCls =
    'w-full bg-white border border-white/80 rounded-md px-4 py-3 text-base text-[#00010D] placeholder:text-[#00010D]/50 focus:outline-none focus:border-[#04BFBF] focus:ring-2 focus:ring-[#04BFBF]/40 transition-all';

  return (
    <div className="relative">
      {/* Neon glow */}
      <div
        aria-hidden
        className="absolute -inset-1 rounded-2xl bg-[#04BFBF]/30 blur-2xl opacity-70 pointer-events-none"
      />
      <form
        onSubmit={onSubmit}
        noValidate
        className="relative bg-[#00010D] border border-[#04BFBF]/40 rounded-xl p-6 md:p-8 flex flex-col gap-4 shadow-[0_0_40px_-5px_rgba(4,191,191,0.55),0_0_80px_-10px_rgba(4,191,191,0.35)]"
      >
        <div className="mb-1">
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#04BFBF] mb-1">
            Preencha para agendar
          </p>
          <p className="text-sm text-[#F2F2F2]/60">
            Retorno em até 24h no WhatsApp. Sem compromisso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#F2F2F2]/70">Nome completo</label>
            <input
              className={inputCls}
              type="text"
              placeholder="Ex: Ana Souza"
              value={form.nome}
              onChange={onChange('nome')}
              maxLength={80}
              autoComplete="name"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#F2F2F2]/70">
              {variant === 'b2b' ? 'Empresa' : 'Loja / marca'}
            </label>
            <input
              className={inputCls}
              type="text"
              placeholder={variant === 'b2b' ? 'Ex: Souza & Cia' : 'Ex: Minha Loja'}
              value={form.empresa}
              onChange={onChange('empresa')}
              maxLength={120}
              autoComplete="organization"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#F2F2F2]/70">Melhor e-mail</label>
          <input
            className={inputCls}
            type="email"
            placeholder="voce@empresa.com.br"
            value={form.email}
            onChange={onChange('email')}
            maxLength={160}
            autoComplete="email"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#F2F2F2]/70">WhatsApp com DDD</label>
          <input
            className={inputCls}
            type="tel"
            placeholder="(16) 98803-7193"
            value={form.whatsapp}
            onChange={onChange('whatsapp')}
            maxLength={20}
            autoComplete="tel"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#F2F2F2]/70">Contexto (opcional)</label>
          <textarea
            className={inputCls}
            placeholder="Conte brevemente sua situação atual e o que quer resolver"
            value={form.mensagem}
            onChange={onChange('mensagem')}
            maxLength={600}
            rows={3}
          />
        </div>

        {error && <p className="text-sm text-[#04BFBF]">{error}</p>}

        <button
          type="submit"
          disabled={sending}
          className="mt-2 inline-flex items-center justify-center gap-2 bg-[#04BFBF] text-[#00010D] font-semibold px-6 py-4 rounded-md hover:bg-[#04BFBF]/90 transition-all disabled:opacity-60 shadow-[0_0_30px_-5px_rgba(4,191,191,0.7)] hover:shadow-[0_0_45px_-2px_rgba(4,191,191,0.9)]"
        >
          {sending ? 'Enviando…' : ctaLabel}
          <span aria-hidden>→</span>
        </button>
        <p className="text-xs text-[#F2F2F2]/40 text-center">
          Seus dados são usados apenas para o contato. Sem spam.
        </p>
      </form>
    </div>
  );
}

export default LeadForm;
