import { Helmet } from 'react-helmet-async';
import { LeadForm } from './LeadForm';
import { OrbitingHero } from './OrbitingHero';
import { TrustBadges } from './TrustBadges';
import { Testimonials } from './Testimonials';
import { ObjectionsFAQ } from './ObjectionsFAQ';
import { specialistInfo } from '@/data/links';


export type CaptacaoVariant = 'b2b' | 'ecommerce';

interface BlocoCopy {
  topbar: string;
  badge: React.ReactNode;
  h1: React.ReactNode;
  subheadline: string;
  ctaPrimario: string;
  ctaFinal: string;
  agitacaoH2: string;
  agitacaoProblema: string;
  agitacaoAgitacao: React.ReactNode;
  solucaoH2: string;
  solucaoIntro: React.ReactNode;
  solucaoH3: string;
  ecosystem: { titulo: string; descricao: string }[];
  beneficiosH2: string;
  beneficios: { titulo: string; descricao: string }[];
  finalH2: string;
  finalTexto: string;
  pageTitle: string;
  pageDescription: string;
  path: string;
  rodapeTexto: string;
}

interface CaptacaoLPProps {
  variant: CaptacaoVariant;
  copy: BlocoCopy;
}

const BASE = 'https://giovannemorais.lovable.app';

export function CaptacaoLP({ variant, copy }: CaptacaoLPProps) {
  const url = `${BASE}${copy.path}`;

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: copy.pageTitle,
    url,
    provider: {
      '@type': 'Person',
      name: specialistInfo.fullName,
      url: BASE,
    },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    description: copy.pageDescription,
  };

  return (
    <main className="min-h-screen bg-[#00010D] text-[#F2F2F2] font-sans antialiased">
      <Helmet>
        <title>{copy.pageTitle}</title>
        <meta name="description" content={copy.pageDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={copy.pageTitle} />
        <meta property="og:description" content={copy.pageDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
      </Helmet>

      {/* Top bar discreta */}
      <div className="w-full bg-[#04BFBF] text-[#00010D] text-center text-xs sm:text-sm font-medium py-2 px-4">
        {copy.topbar}
      </div>

      {/* HERO */}
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-28 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#04BFBF] mb-6">
              {copy.badge}
            </p>
            <h1 className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-bold mb-6 text-balance">
              {copy.h1}
            </h1>
            <p className="text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/75 mb-8 max-w-[560px]">
              {copy.subheadline}
            </p>

            <div className="mb-8">
              <TrustBadges />
            </div>

            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-[#04BFBF] text-[#00010D] font-semibold px-6 py-4 rounded-md hover:bg-[#04BFBF]/90 transition-colors"
            >
              {copy.ctaPrimario}
              <span aria-hidden>↓</span>
            </a>
            <p className="text-xs text-[#F2F2F2]/40 mt-3">
              Conversa direta no WhatsApp. Sem compromisso.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <OrbitingHero />
          </div>
        </div>
      </section>


      {/* AGITAÇÃO */}
      <section className="bg-[#212226]">
        <div className="px-6 md:px-12 py-20 md:py-28 max-w-[720px] mx-auto">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold mb-8">
            {copy.agitacaoH2}
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-[#F2F2F2]/80 mb-6">
            {copy.agitacaoProblema}
          </p>
          <p className="text-[1.0625rem] leading-[1.7] text-[#F2F2F2]/80">
            {copy.agitacaoAgitacao}
          </p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-[#00010D]">
        <div className="px-6 md:px-12 py-20 md:py-28 max-w-[720px] mx-auto">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold mb-8">
            {copy.solucaoH2}
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-[#F2F2F2]/80 mb-12">
            {copy.solucaoIntro}
          </p>
          <h3 className="text-lg font-semibold mb-8 text-[#F2F2F2]">
            {copy.solucaoH3}
          </h3>
          <ol className="space-y-8">
            {copy.ecosystem.map((item, i) => (
              <li key={i} className="border-l-2 border-[#04BFBF] pl-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[#04BFBF] font-mono text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-base font-semibold">{item.titulo}</h4>
                </div>
                <p className="text-[1rem] leading-[1.65] text-[#F2F2F2]/70">
                  {item.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-[#010D00]">
        <div className="px-6 md:px-12 py-20 md:py-28 max-w-[1040px] mx-auto">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold mb-12 max-w-[680px]">
            {copy.beneficiosH2}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {copy.beneficios.map((b, i) => (
              <div
                key={i}
                className="border border-[#04BFBF]/20 border-l-2 border-l-[#04BFBF] bg-[#00010D]/30 rounded-md p-6"
              >
                <h3 className="text-base font-semibold mb-2">{b.titulo}</h3>
                <p className="text-sm leading-[1.6] text-[#F2F2F2]/70">{b.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS / CASES REAIS */}
      <Testimonials />

      {/* OBJEÇÕES / FAQ */}
      <ObjectionsFAQ />

      {/* CTA FINAL + FORM */}

      <section id="form" className="bg-[#212226] scroll-mt-8">
        <div className="px-6 md:px-12 py-20 md:py-28 max-w-[720px] mx-auto">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-bold mb-6">
            {copy.finalH2}
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-[#F2F2F2]/80 mb-10">
            {copy.finalTexto}
          </p>
          <LeadForm variant={variant} ctaLabel={copy.ctaFinal} />
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#00010D] border-t border-[#F2F2F2]/10">
        <div className="px-6 md:px-12 py-10 max-w-[1040px] mx-auto text-sm text-[#F2F2F2]/50">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <p>
              <span className="text-[#F2F2F2] font-bold">{specialistInfo.fullName}</span>
              {' · '}
              {copy.rodapeTexto}
            </p>
            <p className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="/politica-privacidade" className="hover:text-[#F2F2F2] transition-colors">
                Privacidade
              </a>
              <a href="/termos" className="hover:text-[#F2F2F2] transition-colors">
                Termos
              </a>
            </p>
          </div>
          <p className="mt-6 text-xs text-[#F2F2F2]/30">
            © {new Date().getFullYear()} {specialistInfo.fullName} · CNPJ {specialistInfo.cnpj}
          </p>
        </div>
      </footer>
    </main>
  );
}

export default CaptacaoLP;
