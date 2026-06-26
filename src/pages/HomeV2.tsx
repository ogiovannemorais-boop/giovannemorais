import { CaptacaoLP } from '@/components/captacao/CaptacaoLP';

export default function HomeV2() {
  return (
    <CaptacaoLP
      variant="b2b"
      copy={{
        path: '/home',
        pageTitle: 'Tráfego + Automação + CRM | Ecossistema de Vendas | Giovanne Morais',
        pageDescription:
          'Implemento um ecossistema completo de vendas previsíveis: tráfego pago, automação inteligente, CRM e otimização contínua. Mais vendas, menos trabalho manual.',
        topbar: '⚡ Vagas limitadas: trabalho com poucos projetos por mês',
        badge: 'Ecossistema completo de vendas',
        h1: (
          <>
            Tráfego pago sozinho não é suficiente. Você precisa de um{' '}
            <span className="text-[#04BFBF]">ecossistema</span>.
          </>
        ),
        subheadline: 'Tráfego qualificado + Automação + CRM = Máquina de vendas.',
        descricao:
          'Não trabalho apenas com anúncios. Implemento um ecossistema completo de vendas previsíveis para e-commerces e empresas que querem escalar: gestão de tráfego pago especializada, automação inteligente (IA e webhooks), integração de CRM e otimização contínua. Resultado: mais vendas, menos trabalho manual.',
        ctaPrimario: 'Fale agora com o especialista',
        ctaMicro: '🔒 Veja como funciona em uma chamada gratuita.',
        ctaFinal: 'Fale agora com o especialista',
        agitacaoH2:
          'Você está investindo em tráfego pago, mas não tem um sistema para aproveitar.',
        agitacaoProblema:
          'Muitas empresas e comércios conseguem gerar tráfego, mas falham na conversão. Por quê? Porque não têm um ecossistema integrado: tráfego desconectado de automação, automação desconectada de CRM, e ninguém qualificando leads de verdade. O resultado? Leads que chegam frios, processos manuais que consomem tempo, vendedores frustrados, e um ROI que não justifica o investimento em anúncios.',
        agitacaoAgitacao: (
          <>
            Seu concorrente que tem tudo integrado está escalando enquanto você continua fazendo
            tudo na base do improviso. A diferença não é o orçamento de mídia: é ter um{' '}
            <strong className="text-[#F2F2F2]">sistema de vendas previsível e automatizado</strong>.
          </>
        ),
        solucaoH2: 'Tráfego pago + Automação + CRM = Máquina de vendas 24/7.',
        solucaoIntro: (
          <>
            Meu nome é Giovanne Morais. Não sou apenas um gestor de tráfego: sou um arquiteto de
            sistemas de vendas. Implemento um ecossistema completo onde cada peça trabalha em
            harmonia: tráfego qualificado entra, automação qualifica, CRM converte. Resultado:{' '}
            <strong className="text-[#F2F2F2]">vendas previsíveis e escaláveis</strong>.
          </>
        ),
        solucaoH3: 'Os 4 pilares do ecossistema de vendas',
        ecosystem: [
          {
            titulo: 'Tráfego pago de alta performance',
            descricao:
              'Gestão especializada em Meta Ads e Google Ads focada 100% em ROI e leads qualificados que realmente convertem.',
          },
          {
            titulo: 'SDR de inteligência artificial',
            descricao:
              'Automação inteligente que qualifica leads em tempo real, 24/7, antes que cheguem ao seu time humano.',
          },
          {
            titulo: 'Integração e automação (Make / Webhooks)',
            descricao:
              'Disparo automático de mensagens, integração perfeita entre plataformas, para que nenhum lead esfrie.',
          },
          {
            titulo: 'Implementação de CRM comercial',
            descricao:
              'Estruturação completa do seu funil de vendas para garantir que o comercial feche mais negócios com menos esforço.',
          },
        ],
        beneficiosH2: 'O que muda quando você tem um ecossistema de vendas integrado?',
        beneficios: [
          {
            titulo: 'Leads chegam qualificados',
            descricao: 'Seu time comercial só fala com quem realmente quer comprar.',
          },
          {
            titulo: 'Aumento de conversão',
            descricao:
              'Automação e CRM bem estruturados aumentam a taxa de fechamento em até 40%.',
          },
          {
            titulo: 'Menos trabalho manual',
            descricao:
              'A tecnologia trabalha 24/7 enquanto seu time foca no que importa: fechar vendas.',
          },
          {
            titulo: 'Faturamento escalável',
            descricao:
              'Você controla o investimento em tráfego e vê o retorno crescer proporcionalmente.',
          },
        ],
        finalH2: 'Quer construir uma máquina de vendas de verdade?',
        finalTexto:
          'Trabalho com um número limitado de empresas para garantir que cada uma receba dedicação extrema. Se você está pronto para escalar com um sistema integrado e comprovado, vamos conversar.',
        rodapeTexto: 'Ecossistema de vendas: tráfego, automação e CRM',
      }}
    />
  );
}
