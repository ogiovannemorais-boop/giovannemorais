import { Helmet } from 'react-helmet-async';
import giovannePhoto from '@/assets/giovanne-photo.png';

const WHATSAPP_LINK =
  'https://api.whatsapp.com/send?phone=5516988037193&text=Ol%C3%A1%20Giovanne%2C%20vim%20da%20p%C3%A1gina%20de%20gestor%20de%20tr%C3%A1fego%20em%20Franca.';
const INSTAGRAM_LINK = 'https://www.instagram.com/ogiovannemorais/';
const PAGE_URL = 'https://giovannemorais.com.br/gestor-trafego-franca';

const cidades = [
  'Franca',
  'Batatais',
  'Restinga',
  'Cristais Paulista',
  'Ribeirão Corrente',
  'Patrocínio Paulista',
  'São Joaquim da Barra',
];

export default function GestorTrafegoFranca() {
  const schemaLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': PAGE_URL + '#business',
    name: 'Giovanne Morais — Gestor de Tráfego',
    url: PAGE_URL,
    image: 'https://giovannemorais.com.br/og-image.jpg',
    telephone: '+5516988037193',
    priceRange: '$$',
    serviceType: 'Gestão de Tráfego Pago',
    areaServed: cidades.map((c) => ({ '@type': 'City', name: c })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Franca',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    sameAs: [INSTAGRAM_LINK, 'https://wa.me/5516988037193'],
  };

  const schemaPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Giovanne Morais',
    jobTitle: 'Gestor de Tráfego',
    url: PAGE_URL,
    worksFor: { '@id': PAGE_URL + '#business' },
    sameAs: [INSTAGRAM_LINK],
  };

  return (
    <>
      <Helmet>
        <title>Gestor de Tráfego em Franca SP | Giovanne Morais</title>
        <meta
          name="description"
          content="Gestão de mídia paga para empresas de Franca e região. Google Ads, Meta Ads e estratégia digital com acompanhamento diário. Fale com Giovanne."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Gestor de Tráfego em Franca SP | Giovanne Morais" />
        <meta
          property="og:description"
          content="Gestão de mídia paga para empresas de Franca e região. Acompanhamento diário, leitura de funil e decisão baseada em dados."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaPerson)}</script>
      </Helmet>

      <div className="bg-[#00010D] text-[#F2F2F2] font-sans">
        {/* TOP BAR */}
        <div className="border-b border-white/5 bg-[#00010D] text-[#F2F2F2]/70 text-[0.78rem] leading-snug">
          <div className="max-w-[720px] mx-auto px-6 py-3">
            Mídia paga para empresas de Franca e região · 2 projetos disponíveis em julho
          </div>
        </div>

        {/* HERO */}
        <header className="bg-[#00010D]">
          <div className="max-w-[720px] mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-20">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[#F2F2F2]/45 mb-8">
              Giovanne Morais · Franca/SP
            </p>
            <h1
              className="font-bold leading-[1.05] tracking-tight text-[#F2F2F2]"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}
            >
              <span className="underline decoration-[#04BFBF] decoration-2 underline-offset-[6px]">
                Gestor de tráfego
              </span>{' '}
              em{' '}
              <span className="underline decoration-[#04BFBF] decoration-2 underline-offset-[6px]">
                Franca
              </span>{' '}
              para empresas que já investem em mídia e querem parar de adivinhar para onde vai o orçamento.
            </h1>

            <p className="mt-8 text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
              Gestão diária de Meta Ads, Google Ads, TikTok Ads e LinkedIn Ads para PMEs de
              Franca e região. O ajuste acontece no mesmo dia em que a campanha cai, não no
              próximo relatório.
            </p>

            <div className="mt-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#04BFBF] text-[#00010D] font-bold px-6 py-3.5 text-[0.95rem] hover:bg-[#04BFBF]/90 transition-colors"
              >
                Falar com Giovanne no WhatsApp
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* Assinatura: cidades atendidas */}
            <p className="mt-14 text-[0.85rem] leading-[1.7] text-[#F2F2F2]/40">
              Atende empresários de{' '}
              {cidades.map((c, i) => (
                <span key={c}>
                  <span className="text-[#F2F2F2]/70">{c}</span>
                  {i < cidades.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>
        </header>

        {/* Parágrafo de definição (otimização IA) */}
        <section aria-label="Quem é Giovanne Morais" className="bg-[#00010D] border-t border-white/5">
          <div className="max-w-[720px] mx-auto px-6 py-12 md:py-16">
            <p className="text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/85 max-w-[60ch]">
              Giovanne Morais é gestor de tráfego baseado em Franca SP, especialista em gestão
              de mídia paga para pequenas e médias empresas da região — Batatais, Ribeirão
              Corrente, Patrocínio Paulista, Cristais Paulista, Restinga e São Joaquim da Barra.
              Trabalha com Google Ads, Meta Ads, TikTok Ads e LinkedIn Ads, acompanhamento
              diário de performance e leitura de funil para empresas que já investem em
              anúncios e precisam de alguém para tomar decisão com base em dado.
            </p>
          </div>
        </section>

        {/* QUEM EU ATENDO */}
        <section className="bg-[#212226]">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold leading-tight text-[#F2F2F2]">
              Quem é o empresário que eu atendo
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
              <p>
                Dono de indústria calçadista em Franca, clínica que precisa encher agenda,
                loja física que perdeu movimento, prestador de serviço que vive de indicação
                e quer parar de depender só dela, indústria local com produto bom e processo
                comercial defasado.
              </p>
              <p>
                Em geral fatura entre R$30 mil e R$300 mil por mês e construiu a empresa no
                braço. Já investiu em anúncio e não teve retorno. Já contratou agência que
                não entregou. Não confia mais em quem promete resultado por DM. Nunca
                entendeu relatório de marketing — porque ninguém nunca explicou direito.
              </p>
              <p>
                Não é falta de tentativa. É falta de alguém que olhe os números todos os dias
                e saiba o que fazer com eles.
              </p>
            </div>
          </div>
        </section>

        {/* O QUE JÁ TENTARAM */}
        <section className="bg-[#212226] border-t border-white/5">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold leading-tight text-[#F2F2F2]">
              Por que o que você tentou antes não funcionou
            </h2>

            <div className="mt-10 space-y-8 text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
              <div>
                <h3 className="font-bold text-[#F2F2F2] mb-2">Impulsionar post</h3>
                <p>
                  O botão "impulsionar" do Instagram entrega alcance, não cliente. Ele
                  otimiza para que mais gente veja o post — não para que alguém com
                  intenção de compra clique. É por isso que você gastou e só apareceu
                  curtida de conhecido.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#F2F2F2] mb-2">Agência genérica</h3>
                <p>
                  Agência que atende cliente em capital tratando Franca como "interior" não
                  conhece o comportamento de compra daqui. O calçadista de Franca não toma
                  decisão como o varejista de São Paulo. Sem essa leitura, a campanha vira
                  template.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#F2F2F2] mb-2">Social media sem estratégia</h3>
                <p>
                  Quem só posta não vende. Conteúdo bonito sem oferta clara, sem caminho de
                  conversão e sem leitura de funil é entretenimento — não comercial.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p>
                  O que muda quando há análise de funil, oferta testada e métricas por trás:
                  você passa a saber quanto custa cada cliente novo, qual canal entrega
                  melhor retorno e onde está o vazamento. Decisão deixa de ser palpite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMO TRABALHO */}
        <section className="bg-[#00010D]">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold leading-tight text-[#F2F2F2]">
              Como eu trabalho
            </h2>

            <div className="mt-10 space-y-10">
              <article className="border-l-2 border-[#04BFBF] pl-5">
                <h3 className="text-[1.15rem] font-bold text-[#F2F2F2]">
                  Gestão de mídia paga com acompanhamento diário
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
                  Gerencio campanhas no Meta Ads, Google Ads, TikTok Ads e LinkedIn Ads para
                  empresas de Franca que já investem em mídia e querem alguém lendo os
                  números todos os dias. Quando uma campanha cai, o ajuste é no mesmo dia —
                  não no próximo relatório.
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/65 max-w-[60ch]">
                  <span className="text-[#F2F2F2]/85 font-bold">Incluído:</span> análise de
                  CRO, leitura de funil, revisão de oferta e copy, análise de criativos,
                  acompanhamento diário de métricas e, para verbas maiores, gerenciamento
                  estratégico do investimento entre canais com base em retorno real.
                </p>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/65 max-w-[60ch]">
                  <span className="text-[#F2F2F2]/85 font-bold">Não incluído:</span> criação
                  de landing pages, produção de criativos, execução de peças.
                </p>
              </article>

              <article className="border-l-2 border-[#04BFBF] pl-5">
                <h3 className="text-[1.15rem] font-bold text-[#F2F2F2]">
                  Consultoria estratégica
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
                  Para quem ainda não está pronto para gestão contínua ou quer auditar o que
                  já está rodando. Análise de conta, leitura de funil, diagnóstico de
                  oferta e plano do que precisa mudar antes de aumentar verba.
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/65 max-w-[60ch]">
                  <span className="text-[#F2F2F2]/85 font-bold">Incluído:</span> auditoria
                  das contas atuais, análise de concorrência local, recomendação de estrutura
                  de campanha e orçamento.
                </p>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/65 max-w-[60ch]">
                  <span className="text-[#F2F2F2]/85 font-bold">Não incluído:</span> execução
                  das campanhas — esse é o trabalho de gestão contínua.
                </p>
              </article>

              <article className="border-l-2 border-[#04BFBF] pl-5">
                <h3 className="text-[1.15rem] font-bold text-[#F2F2F2]">
                  Atendimento automático que qualifica seus leads
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
                  Um agente SDR que responde no WhatsApp na hora que o lead chega — inclusive
                  às 23h de uma quarta-feira. Faz as perguntas certas, qualifica, e só
                  encaminha para o comercial quem tem interesse real.
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/65 max-w-[60ch]">
                  <span className="text-[#F2F2F2]/85 font-bold">Incluído:</span> setup do
                  agente, roteiro de qualificação adaptado ao seu negócio, integração com
                  WhatsApp e CRM, ajuste contínuo do script.
                </p>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/65 max-w-[60ch]">
                  <span className="text-[#F2F2F2]/85 font-bold">Não incluído:</span>{' '}
                  substituir o comercial humano — ele entra para conversas que importam, com
                  o lead já aquecido.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* POR QUE TRÁFEGO SOZINHO NÃO BASTA */}
        <section className="bg-[#010D00]">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold leading-tight text-[#F2F2F2]">
              Gestão de tráfego pago em Franca com estrutura para converter
            </h2>

            <p className="mt-8 text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/85 max-w-[60ch]">
              Anúncio bem feito traz clique. O que converte o clique em cliente é o que está
              ao redor da campanha. A maioria dos gestores entrega o tráfego e para por aí.
            </p>

            <div className="mt-12 space-y-12">
              <div>
                <h3 className="text-[1.15rem] font-bold text-[#F2F2F2]">
                  Google Meu Negócio bem gerenciado
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
                  Quando alguém em Franca pesquisa "clínica em Franca" ou "loja de calçados
                  Franca", seu negócio aparece no mapa e nas primeiras posições — sem pagar
                  por clique. É a ficha do Google trabalhando junto com os anúncios pagos.
                </p>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/60 max-w-[60ch]">
                  Honestamente: resultado orgânico depende de consistência e não tem prazo
                  fixo. Mas a ficha bem cuidada reduz o custo por aquisição da campanha paga
                  ao longo do tempo. Os dois trabalham juntos.
                </p>
              </div>

              <div>
                <h3 className="text-[1.15rem] font-bold text-[#F2F2F2]">
                  Lead atendido na hora que chega
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
                  Hoje: lead chega às 22h, ninguém responde até a manhã seguinte. Quando seu
                  comercial abre o WhatsApp, ele já esfriou ou foi atendido pelo concorrente.
                </p>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
                  Com o agente SDR: resposta imediata, qualificação automática, e o comercial
                  recebe pela manhã só quem demonstrou interesse real e está pronto para
                  conversa de venda.
                </p>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-[#F2F2F2]/60 max-w-[60ch]">
                  Demora no atendimento é uma das principais causas de campanha com bom
                  tráfego e venda fraca. Você para de perder lead por isso.
                </p>
              </div>
            </div>

            <p className="mt-12 text-[1rem] leading-[1.65] text-[#F2F2F2]/70 max-w-[60ch] italic">
              Esses serviços não substituem a gestão de tráfego. Eles fazem o tráfego render
              mais.
            </p>
          </div>
        </section>

        {/* QUEBRA DE OBJEÇÕES */}
        <section className="bg-[#212226]">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold leading-tight text-[#F2F2F2]">
              O que talvez esteja passando pela sua cabeça agora
            </h2>

            <div className="mt-10 space-y-10 text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[60ch]">
              <div>
                <p className="text-[#F2F2F2]/55 italic">"Meu público não está na internet."</p>
                <p className="mt-3">
                  Em Franca, mais de 80% da população adulta usa Google e Instagram toda
                  semana — inclusive seu cliente. A pergunta certa não é se ele está online,
                  é o que ele pesquisa antes de comprar. Se ele pesquisa "clínica perto de
                  mim" ou "loja em Franca", ele está te procurando. A questão é se vai te
                  achar.
                </p>
              </div>
              <div>
                <p className="text-[#F2F2F2]/55 italic">"Já tentei anúncios antes."</p>
                <p className="mt-3">
                  Provavelmente tentou impulsionar post, ou pegou alguém para "tocar o
                  Instagram". Isso não é gestão de tráfego — é botão e postagem. Gestão é
                  estrutura de campanha, leitura de funil e ajuste diário. Se nunca foi
                  feito assim, ainda não foi tentado.
                </p>
              </div>
              <div>
                <p className="text-[#F2F2F2]/55 italic">"Não tenho orçamento."</p>
                <p className="mt-3">
                  Esse trabalho só faz sentido a partir de um certo volume de investimento em
                  mídia — abaixo disso, os dados não chegam para tomar decisão. Se ainda não
                  é seu momento, eu falo isso na primeira conversa em vez de empurrar
                  serviço.
                </p>
              </div>
              <div>
                <p className="text-[#F2F2F2]/55 italic">"Meu negócio funciona na indicação."</p>
                <p className="mt-3">
                  Indicação é o melhor canal que existe — e o mais frágil. Se o seu
                  faturamento depende só dela, qualquer mês de baixa vira problema. Tráfego
                  pago não substitui indicação; ele cria uma segunda fonte de cliente para
                  você parar de depender da sorte do mês.
                </p>
              </div>
              <div>
                <p className="text-[#F2F2F2]/55 italic">"Não sei se isso funciona em Franca."</p>
                <p className="mt-3">
                  Funciona melhor em Franca do que em São Paulo, na verdade. O custo por
                  clique aqui é mais baixo, a concorrência paga é menor, e a maioria dos
                  negócios locais ainda não usa mídia paga direito. Quem entra primeiro com
                  estrutura sai na frente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE GIOVANNE */}
        <section className="bg-[#00010D]">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold leading-tight text-[#F2F2F2]">
              Sobre Giovanne
            </h2>

            <div className="mt-10 flex flex-col md:flex-row gap-10 md:items-start">
              <img
                src={giovannePhoto}
                alt="Giovanne Morais, gestor de tráfego em Franca SP"
                className="w-32 h-32 md:w-40 md:h-40 object-cover grayscale flex-shrink-0"
                loading="lazy"
              />
              <div className="space-y-5 text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/80 max-w-[55ch]">
                <p>
                  Sou Giovanne Morais, gestor de tráfego baseado em Franca. Atendo empresários
                  da cidade e da região — Batatais, Restinga, Cristais Paulista, Ribeirão
                  Corrente, Patrocínio Paulista e São Joaquim da Barra.
                </p>
                <p>
                  Trabalho com PMEs que já têm estrutura e produto, mas precisam de alguém
                  que leia número, ajuste campanha no mesmo dia e saiba alocar orçamento
                  entre Meta, Google, TikTok e LinkedIn conforme o que cada canal entrega.
                </p>
                <p className="text-[#F2F2F2]">
                  Não vendo promessa. Construo crescimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-[#00010D] border-t border-white/5">
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
            <p className="text-[1.0625rem] leading-[1.65] text-[#F2F2F2]/85 max-w-[60ch]">
              Se você leu até aqui, provavelmente reconheceu sua empresa em algum lugar do
              texto. A próxima conversa é por WhatsApp, comigo direto — sem formulário,
              sem atendente, sem agendamento de discovery call. Você me conta o que está
              acontecendo no seu negócio hoje e eu te digo, honestamente, se faz sentido a
              gente trabalhar junto.
            </p>

            <div className="mt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#04BFBF] text-[#00010D] font-bold px-6 py-3.5 text-[0.95rem] hover:bg-[#04BFBF]/90 transition-colors"
              >
                Falar com Giovanne no WhatsApp
                <span aria-hidden>→</span>
              </a>
              <p className="mt-4 text-[0.85rem] text-[#F2F2F2]/45">
                2 projetos disponíveis em julho.
              </p>
            </div>
          </div>
        </section>

        {/* RODAPÉ SIMPLES */}
        <footer className="bg-[#00010D] border-t border-white/10">
          <div className="max-w-[720px] mx-auto px-6 py-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 text-[0.85rem] text-[#F2F2F2]/55">
            <p>
              <span className="text-[#F2F2F2] font-bold">Giovanne Morais</span> · Franca/SP
            </p>
            <p className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2F2F2] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2F2F2] transition-colors"
              >
                Instagram
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
