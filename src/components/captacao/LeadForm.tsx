import { useState } from 'react';
import { z } from 'zod';

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

    // dataLayer event (GTM)
    if (typeof window !== 'undefined') {
      const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dl)) {
        dl.push({ event: 'lead_submit', page_variant: variant });
      }
    }

    const intro =
      variant === 'b2b'
        ? 'Olá Giovanne, vim da página de empresas e quero agendar uma consultoria estratégica.'
        : 'Olá Giovanne, vim da página de e-commerce e quero agendar uma análise gratuita.';

    const body = [
      intro,
      '',
      `Nome: ${parsed.data.nome}`,
      `Empresa: ${parsed.data.empresa}`,
      `E-mail: ${parsed.data.email}`,
      `WhatsApp: ${parsed.data.whatsapp}`,
      parsed.data.mensagem ? `Mensagem: ${parsed.data.mensagem}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  const inputCls =
    'w-full bg-transparent border border-foreground/15 rounded-md px-4 py-3 text-base text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#04BFBF] transition-colors';

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          className={inputCls}
          type="text"
          placeholder="Seu nome"
          value={form.nome}
          onChange={onChange('nome')}
          maxLength={80}
          autoComplete="name"
          required
        />
        <input
          className={inputCls}
          type="text"
          placeholder={variant === 'b2b' ? 'Sua empresa' : 'Sua loja'}
          value={form.empresa}
          onChange={onChange('empresa')}
          maxLength={120}
          autoComplete="organization"
          required
        />
      </div>
      <input
        className={inputCls}
        type="email"
        placeholder="Seu melhor e-mail"
        value={form.email}
        onChange={onChange('email')}
        maxLength={160}
        autoComplete="email"
        required
      />
      <input
        className={inputCls}
        type="tel"
        placeholder="WhatsApp com DDD"
        value={form.whatsapp}
        onChange={onChange('whatsapp')}
        maxLength={20}
        autoComplete="tel"
        required
      />
      <textarea
        className={inputCls}
        placeholder="Conte rapidamente o seu contexto (opcional)"
        value={form.mensagem}
        onChange={onChange('mensagem')}
        maxLength={600}
        rows={3}
      />
      {error && <p className="text-sm text-[#04BFBF]">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex items-center justify-center gap-2 bg-[#04BFBF] text-[#00010D] font-semibold px-6 py-4 rounded-md hover:bg-[#04BFBF]/90 transition-colors disabled:opacity-60"
      >
        {sending ? 'Enviando…' : ctaLabel}
      </button>
      <p className="text-xs text-foreground/40 text-center">
        Conversa direta no WhatsApp. Sem compromisso.
      </p>
    </form>
  );
}

export default LeadForm;
