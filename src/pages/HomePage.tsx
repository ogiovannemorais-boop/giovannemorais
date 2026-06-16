import { useEffect, useState } from 'react';
import giovannePhoto from '@/assets/giovanne-photo.png';
import { WHATSAPP_LINK } from '@/data/links';

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const sections = [
  { id: 'abertura', label: 'Abertura' },
  { id: 'problema', label: 'O que costuma falhar' },
  { id: 'solucoes', label: 'No que eu trabalho' },
  { id: 'metodo', label: 'Como conduzo' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'depoimentos', label: 'Quem já trabalhou comigo' },
  { id: 'objecoes', label: 'Serve pro meu caso?' },
  { id: 'vagas', label: 'Vagas' },
];

const solucoes = [
  {
    n: '01',
    titulo: 'Mídia paga',
    detalhe:
      'Meta, Google e TikTok. Quem distribui verba, quem decide pausar criativo e quem responde por CAC. Não é só "subir campanha".',
  },
  {
    n: '02',
    titulo: 'Oferta',
    detalhe:
      'A maior parte dos resultados ruins não é problema de tráfego. É a oferta que não está pronta pra encontrar o público frio.',
  },
  {
    n: '03',
    titulo: 'Funil',
    detalhe:
      'O que acontece entre o clique e o boleto pago. Onde o lead desaparece, onde ele esfria, e o que reconquista.',
  },
  {
    n: '04',
    titulo: 'Copy',
    detalhe:
      'Anúncios, páginas e mensagens. Texto escrito pra quem vai ler com pressa, no celular, no meio de outras vinte abas.',
  },
  {
    n: '05',
    titulo: 'Criativos',
    detalhe:
      'Roteiro, edição, variações. Direção criativa pensada pra performance, não pra portfólio de agência.',
  },
  {
    n: '06',
    titulo: 'Landing pages',
    detalhe:
      'Reescrita de página, hierarquia visual, prova social, fricção de checkout. A página é parte do anúncio.',
  },
  {
    n: '07',
    titulo: 'Métricas',
    detalhe:
      'Painel honesto. Saber o que olhar segunda de manhã sem precisar abrir cinco plataformas.',
  },
  {
    n: '08',
    titulo: 'Acompanhamento',
    detalhe:
      'Reunião curta, decisão escrita, próximo passo claro. Sem call de uma hora pra alinhar coisa que cabia em mensagem.',
  },
];

const objecoes = [
  {
    pergunta: 'Nunca anunciei.',
    resposta:
      'Tudo bem. Começamos pelo básico estruturado, e não por uma campanha avulsa que vira presságio do resto.',
  },
  {
    pergunta: 'Já anunciei e não rendeu.',
    resposta:
      'É o caso mais comum. A primeira coisa é entender se o problema é mídia, oferta, página ou processo. Quase nunca é só mídia.',
  },
  {
    pergunta: 'Hoje vivo de indicação.',
    resposta:
      'Indicação é ótimo enquanto rende. O risco é que ela não escala e some sem aviso. A ideia é construir um segundo canal sem matar o primeiro.',
  },
  {
    pergunta: 'Já tenho time comercial.',
    resposta:
      'Melhor. Mídia paga sem time comercial preparado costuma queimar lead. Com time, o trabalho é alimentar o funil com qualidade.',
  },
];

/* ------------------------------------------------------------------ */
/* Componentes locais                                                  */
/* ------------------------------------------------------------------ */

function SectionIndex({ active }: { active: string }) {
  return (
    <nav
      aria-label="Índice da página"
      className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 text-[11px] uppercase tracking-[0.18em]"
    >
      {sections.map((s, i) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 text-foreground/40 hover:text-foreground transition-colors"
            data-active={isActive}
          >
            <span
              aria-hidden
              className={`h-px transition-all ${
                isActive ? 'w-10 bg-primary' : 'w-4 bg-foreground/30 group-hover:bg-foreground/60'
              }`}
            />
            <span className={isActive ? 'text-foreground' : ''}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function Solucao({ n, titulo, detalhe }: { n: string; titulo: string; detalhe: string }) {
  return (
    <details className="group border-b border-foreground/10 py-6">
      <summary className="flex items-baseline gap-6 cursor-pointer list-none">
        <span className="text-foreground/40 text-sm tabular-nums">{n}</span>
        <span className="text-2xl md:text-4xl font-bold tracking-tight flex-1 group-hover:text-primary transition-colors">
          {titulo}
        </span>
        <span
          aria-hidden
          className="text-foreground/40 text-sm transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="pl-[3.25rem] md:pl-[3.5rem] pt-4 max-w-xl text-foreground/70 leading-relaxed">
        {detalhe}
      </p>
    </details>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const [active, setActive] = useState('abertura');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground antialiased selection:bg-primary/30">
      {/* Barra de topo — vagas limitadas */}
      <div className="bg-[hsl(var(--deep-green))] text-center py-2 px-4 text-xs tracking-[0.12em] uppercase text-foreground/70 border-b border-foreground/10 z-50 relative">
        Vagas limitadas <span className="mx-2 text-foreground/30">|</span> Restam 2 vagas para este mês
      </div>

      {/* Mini header — só nome + WhatsApp inline */}
      <header className="absolute top-8 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center">
        <a href="#abertura" className="text-sm font-bold tracking-tight">
          Giovanne Morais
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
        >
          WhatsApp
        </a>
      </header>

      <SectionIndex active={active} />

      <main className="lg:pl-32 xl:pl-40">
        {/* 01 — Abertura ---------------------------------------------------- */}
        <section
          id="abertura"
          className="min-h-svh flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 pt-32"
        >
          <p className="text-primary text-sm font-bold mb-8 tracking-[0.18em] uppercase">
            01 — Estratégia digital
          </p>
          <h1
            className="font-bold leading-[0.95] tracking-[-0.04em] max-w-[22ch]"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
          >
            Mais do que anúncios: uma estratégia digital completa para transformar tráfego em faturamento previsível.
          </h1>
          <p className="mt-10 max-w-xl text-foreground/70 text-lg leading-relaxed">
            Trabalho com donos de pequenas e médias empresas que já tentaram impulsionar post,
            contratar gestor barato e copiar concorrente. E nada deu certo. Tenha um método
            validado que aumentamos o faturamento desde 2022.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:items-center">
            <a
              href="#solucoes"
              className="group inline-flex items-center gap-4 text-lg font-bold"
            >
              <span className="border-b-2 border-foreground pb-1 group-hover:border-primary group-hover:text-primary transition-colors">
                Ver no que eu trabalho
              </span>
              <span aria-hidden className="group-hover:translate-x-1 transition-transform">↓</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              ou fale direto no WhatsApp →
            </a>
          </div>
        </section>

        {/* 02 — Problema ---------------------------------------------------- */}
        <section id="problema" className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10">
          <p className="text-foreground/40 text-sm tracking-[0.18em] uppercase mb-8">02</p>
          <h2
            className="font-bold leading-[1] tracking-[-0.03em] max-w-[20ch]"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
          >
            Anunciar sem estratégia é
            <br />a forma mais rápida e mais
            <br />
            educada de queimar dinheiro.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-3xl text-foreground/70 leading-relaxed">
            <p>
              A maioria das empresas que me procura já passou por algum desses momentos:
              impulsionou post sem objetivo, contratou gestor pelo menor preço, rodou campanha
              sem funil por trás, postou todo dia esperando vender, copiou o anúncio do
              concorrente sem entender o que ele faz fora do anúncio.
            </p>
            <p>
              Quase nunca o problema é a plataforma. É a oferta que não está pronta. É a
              página que não converte. É a copy que fala como folder de banco. É o criativo
              que parodia um trend. É a equipe comercial que demora dois dias pra responder.
              É a falta de alguém olhando os números toda semana.
            </p>
          </div>
        </section>

        {/* 03 — Soluções ---------------------------------------------------- */}
        <section id="solucoes" className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10">
          <p className="text-foreground/40 text-sm tracking-[0.18em] uppercase mb-8">03</p>
          <h2
            className="font-bold leading-[1] tracking-[-0.03em] max-w-[16ch] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
          >
            No que eu trabalho.
          </h2>
          <p className="text-foreground/60 max-w-xl mb-12">
            Oito frentes. Quase sempre não é necessário operar nas oito. O recorte sai do
            diagnóstico, e o resto fica documentado pra quando fizer sentido entrar.
          </p>
          <div className="max-w-3xl">
            {solucoes.map((s) => (
              <Solucao key={s.n} {...s} />
            ))}
          </div>
        </section>

        {/* 04 — Método ------------------------------------------------------ */}
        <section
          id="metodo"
          className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10 bg-[hsl(225_6%_10%)]"
        >
          <p className="text-foreground/40 text-sm tracking-[0.18em] uppercase mb-8">04</p>
          <h2
            className="font-bold leading-[1] tracking-[-0.03em] max-w-[18ch] mb-16"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
          >
            Três momentos. Não seis etapas.
          </h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-5xl">
            {[
              {
                t: 'Entender',
                d: 'Diagnóstico do negócio, da oferta, dos números e do momento. Aqui é onde decidimos se faz sentido seguir — e se não fizer, isso é dito.',
              },
              {
                t: 'Construir',
                d: 'Estruturação do que está faltando: campanha, funil, página, copy, criativo. O que já existe e funciona não é desmontado por capricho.',
              },
              {
                t: 'Operar',
                d: 'Acompanhamento semanal, ajustes finos, decisões registradas. Os números são lidos por mim e explicados pra você, não enviados em PDF.',
              },
            ].map((m, i) => (
              <div key={m.t}>
                <p className="text-primary text-sm font-bold tabular-nums mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-3xl font-bold tracking-tight mb-4">{m.t}</h3>
                <p className="text-foreground/70 leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — Sobre ------------------------------------------------------- */}
        <section
          id="sobre"
          className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10"
        >
          <p className="text-foreground/40 text-sm tracking-[0.18em] uppercase mb-8">05</p>
          <div className="grid md:grid-cols-12 gap-12 max-w-6xl">
            <div className="md:col-span-5">
              <img
                src={giovannePhoto}
                alt="Retrato de Giovanne Morais"
                className="w-full aspect-[3/4] object-cover object-top grayscale contrast-110"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7 md:pt-12">
              <h2
                className="font-bold leading-[1] tracking-[-0.03em] mb-8"
                style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
              >
                Quem cuida do seu negócio.
              </h2>
              <div className="space-y-5 text-foreground/75 leading-relaxed max-w-prose">
                <p>
                  Trabalho com marketing digital desde 2021. Ajudo pequenas e médias empresas
                  e profissionais a aumentarem faturamento com mídia paga, performance e os
                  serviços ao redor que sustentam o resultado.
                </p>
                <p>
                  Sou especialista em mídia paga. Desde 2021 ajudo empresas a crescerem no
                  digital com trabalho inteligente, gestão e clareza.
                </p>
                <p>Acredito em resultado, responsabilidade e em Deus.</p>
                <p className="text-foreground font-bold pt-2">
                  Não vendo promessa. Construo crescimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Depoimentos ------------------------------------------------- */}
        <section
          id="depoimentos"
          className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10"
        >
          <p className="text-foreground/40 text-sm tracking-[0.18em] uppercase mb-8">06</p>
          <h2
            className="font-bold leading-[1] tracking-[-0.03em] max-w-[16ch] mb-16"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
          >
            Quem já trabalhou comigo.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <blockquote className="border-l-2 border-primary pl-6">
              <p className="text-xl leading-snug text-foreground/85 mb-4">
                "primeiro mes eu nem entendi direito o que tava acontecendo, ele mexeu numa
                coisa de oferta que eu nem sabia que era oferta e o cpm caiu pela metade
                achei que ia ter que demitir um vendedor mas no fim contratei mais um"
              </p>
              <footer className="text-sm text-foreground/50">
                — Marcos, loja de suplemento, interior de SP
              </footer>
            </blockquote>

            <blockquote className="border-l-2 border-foreground/20 pl-6">
              <p className="text-xl leading-snug text-foreground/85 mb-4">
                "ele responde rapido e não enche de relatorio. eu queria menos call e mais
                resultado, foi exatamente isso"
              </p>
              <footer className="text-sm text-foreground/50">
                — Aline, prestadora de serviço B2B
              </footer>
            </blockquote>
          </div>

          <p className="mt-12 text-xs text-foreground/40 max-w-md">
            Depoimentos publicados com autorização. Casos completos compartilhados sob NDA na
            conversa inicial.
          </p>
        </section>

        {/* 07 — Objeções ---------------------------------------------------- */}
        <section
          id="objecoes"
          className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10"
        >
          <p className="text-foreground/40 text-sm tracking-[0.18em] uppercase mb-8">07</p>
          <h2
            className="font-bold leading-[1] tracking-[-0.03em] max-w-[18ch] mb-16"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
          >
            Serve pro meu caso?
          </h2>
          <dl className="max-w-3xl divide-y divide-foreground/10">
            {objecoes.map((o) => (
              <div key={o.pergunta} className="grid md:grid-cols-12 gap-6 py-8">
                <dt className="md:col-span-4 font-bold text-lg leading-tight">{o.pergunta}</dt>
                <dd className="md:col-span-8 text-foreground/70 leading-relaxed">
                  {o.resposta}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 08 — Vagas (escassez ética) -------------------------------------- */}
        <section
          id="vagas"
          className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10"
          style={{ backgroundColor: 'hsl(var(--deep-green))' }}
        >
          <p className="text-foreground/40 text-sm tracking-[0.18em] uppercase mb-8">08</p>
          <h2
            className="font-bold leading-[1] tracking-[-0.03em] max-w-[18ch] mb-10"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
          >
            Não trabalho com volume.
          </h2>
          <p className="max-w-xl text-foreground/75 leading-relaxed mb-16">
            Mantenho um número pequeno de projetos ao mesmo tempo pra conseguir analisar,
            acompanhar e responder de verdade. Antes de aceitar, conversamos pra entender se
            o seu negócio está no momento certo. Se não estiver, isso é dito também.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-4 max-w-3xl"
          >
            <span
              className="font-bold leading-[0.95] tracking-[-0.03em] border-b-2 border-foreground/30 group-hover:border-primary group-hover:text-primary transition-colors pb-2"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              Conversar comigo no WhatsApp
            </span>
            <span
              aria-hidden
              className="text-primary text-2xl group-hover:translate-x-2 transition-transform"
            >
              →
            </span>
          </a>
          <p className="mt-6 text-xs text-foreground/40">
            Resposta minha, no horário comercial. Sem chatbot, sem formulário de qualificação.
          </p>
        </section>
      </main>
    </div>
  );
}
