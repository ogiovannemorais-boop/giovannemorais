import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { WHATSAPP_NUMBER, WHATSAPP_LINK_FALLBACK } from '@/lib/leads';

type State = { nome?: string; empresa?: string; desafio?: string } | null;

export default function Agendar() {
  const s = (useLocation().state as State) ?? null;
  const primeiro = s?.nome?.trim().split(/\s+/)[0];
  const url = s?.nome
    ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
        `Oi Giovanne! Sou ${s.nome}, da ${s.empresa}. Acabei de preencher o formulário do site e quero agendar a conversa estratégica. Meu maior desafio hoje é: ${s.desafio}.`,
      )}`
    : WHATSAPP_LINK_FALLBACK;

  const passos = ['Você escolhe o horário', 'Conversamos 30 minutos sobre seu negócio', 'Você recebe o plano dos próximos passos'];

  return (
    <main style={{ background: '#0B1220', color: '#fff', minHeight: '100vh', fontFamily: "'Inter',sans-serif" }} className="flex flex-col">
      <Helmet>
        <title>Agende sua conversa | Giovanne Morais</title>
        <meta name="robots" content="noindex, nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <style>{`.ag-cta{display:inline-flex;align-items:center;justify-content:center;gap:14px;min-height:64px;padding:16px 40px;border-radius:999px;background:linear-gradient(90deg,#1D4ED8,#0EA5E9);color:#fff;font-weight:800;font-size:18px;letter-spacing:.02em;text-transform:uppercase;box-shadow:0 14px 40px rgba(29,78,216,.35);transition:transform .2s}.ag-cta:hover{transform:translateY(-2px)}.ag-h{font-family:'Anton',sans-serif;text-transform:uppercase;line-height:1.02;letter-spacing:.01em;font-size:56px}@media(max-width:900px){.ag-h{font-size:36px}.ag-cta{width:100%;padding:16px 24px;font-size:16px}.ag-g{grid-template-columns:1fr!important}}`}</style>
      <section className="flex-1 flex items-center" style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }} className="text-center">
          <h1 className="ag-h">
            Recebi suas respostas{primeiro ? ', ' : ''}
            {primeiro && <span style={{ background: 'linear-gradient(90deg,#1D4ED8,#0EA5E9)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{primeiro}</span>}!
          </h1>
          <p style={{ fontSize: 18, color: '#CBD5E1', lineHeight: 1.65, margin: '24px auto 40px', maxWidth: 640 }}>
            Agora escolha o melhor horário para nossa conversa de 30 minutos. É só me chamar no WhatsApp que eu já respondo com os horários disponíveis.
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="ag-cta">
            Escolher meu horário no WhatsApp <span aria-hidden>→</span>
          </a>
          <div className="ag-g grid gap-5 mt-16 text-left" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {passos.map((p, i) => (
              <div key={p} style={{ background: '#111A2E', border: '1px solid #1E3A8A', borderRadius: 20, padding: 24 }}>
                <span style={{ fontFamily: 'Anton', fontSize: 28, color: '#60A5FA' }}>{i + 1}</span>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#E2E8F0', marginTop: 8 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer style={{ background: '#070B14', color: '#94A3B8', fontSize: 14, padding: '28px 24px' }} className="text-center">
        Giovanne Morais · Tráfego pago e estratégia para empresas
      </footer>
    </main>
  );
}
