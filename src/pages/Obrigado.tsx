import { Helmet } from 'react-helmet-async';
import { specialistInfo, WHATSAPP_LINK } from '@/data/links';

export default function Obrigado() {
  const waUrl = WHATSAPP_LINK;

  return (
    <main className="min-h-screen bg-[#00010D] text-[#F2F2F2] font-sans antialiased flex flex-col">
      <Helmet>
        <title>Obrigado | {specialistInfo.fullName}</title>
        <meta name="description" content="Sua solicitação foi recebida. Em breve entramos em contato pelo WhatsApp." />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="w-full bg-[#04BFBF] text-[#00010D] text-center text-xs sm:text-sm font-medium py-2 px-4">
        Solicitação recebida com sucesso
      </div>

      <section className="flex-1 flex items-center justify-center px-6 md:px-12 py-16">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#04BFBF]/10 border border-[#04BFBF]/40 mb-8 shadow-[0_0_40px_-8px_rgba(4,191,191,0.6)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#04BFBF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p className="text-[11px] tracking-[0.18em] uppercase text-[#04BFBF] mb-5">
            01 — Próximo passo
          </p>

          <h1 className="uppercase text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-black tracking-tight mb-6 text-balance">
            Obrigado. Você deu o <span className="text-[#04BFBF]">passo certo</span> pelo seu negócio.
          </h1>

          <p className="text-[1.0625rem] md:text-[1.125rem] leading-[1.65] text-[#F2F2F2]/80 mb-6 max-w-[560px] mx-auto">
            A maioria dos donos de negócio continua tentando escalar sozinho e perde meses testando o que não funciona. Você acabou de encurtar esse caminho.
          </p>

          <p className="text-[1rem] leading-[1.65] text-[#F2F2F2]/60 mb-10 max-w-[560px] mx-auto">
            Vou analisar seu cenário pessoalmente antes da nossa conversa. Em até 24h você recebe um retorno direto no seu WhatsApp para agendarmos o horário.
          </p>

          <div className="bg-[#212226] border border-[#04BFBF]/20 border-l-2 border-l-[#04BFBF] rounded-md p-6 text-left mb-10 max-w-[520px] mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#04BFBF] mb-4">
              O que acontece agora
            </h2>
            <ol className="space-y-3 text-sm text-[#F2F2F2]/80">
              <li className="flex gap-3">
                <span className="text-[#04BFBF] font-mono">01</span>
                <span>Recebo sua solicitação e analiso seu contexto.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#04BFBF] font-mono">02</span>
                <span>Entro em contato pelo WhatsApp em até 24h.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#04BFBF] font-mono">03</span>
                <span>Marcamos uma conversa para entender suas dores e desenhar o plano.</span>
              </li>
            </ol>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#04BFBF] text-[#00010D] font-semibold px-6 py-4 rounded-md hover:bg-[#04BFBF]/90 transition-all shadow-[0_0_30px_-5px_rgba(4,191,191,0.6)] hover:shadow-[0_0_45px_-2px_rgba(4,191,191,0.8)]"
          >
            Adiantar contato no WhatsApp
            <span aria-hidden>→</span>
          </a>
          <p className="text-xs text-[#F2F2F2]/40 mt-4">
            {specialistInfo.fullName} · Especialista em tráfego pago desde 2022
          </p>
        </div>
      </section>

      <footer className="border-t border-[#F2F2F2]/10 px-6 md:px-12 py-6 text-center text-xs text-[#F2F2F2]/30">
        © {new Date().getFullYear()} {specialistInfo.fullName} · CNPJ {specialistInfo.cnpj}
      </footer>
    </main>
  );
}
