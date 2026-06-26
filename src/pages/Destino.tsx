import { CaptacaoLP } from '@/components/captacao/CaptacaoLP';

interface DestinoProps {
  path?: string;
}

export default function Destino({ path = '/' }: DestinoProps) {
  return (
    <CaptacaoLP
      variant="b2b"
      copy={{
        path,
        pageTitle: 'Gestão de Tráfego Pago com Foco em Faturamento | Giovanne Morais',
        pageDescription:
          'Aumente o faturamento do seu negócio com gestão especializada de tráfego pago. Método, conhecimento e estratégia no digital para gerar vendas reais, não métricas de vaidade.',
        topbar: '⚡ Vagas limitadas para novos parceiros este mês',
        badge: 'Performance & faturamento no digital',
        h1: (
          <>
            Poucas vendas, tráfego desqualificado ou baixo volume de pessoas{' '}
            <span className="text-[#04BFBF]">interessadas</span>?
          </>
        ),
        subheadline:
          'Nosso foco é aumentar o seu faturamento com método, conhecimento e estratégia no digital.',
        descricao:
          'Trabalho com gestão especializada de tráfego pago para e-commerces, empresas e comércios que precisam de vendas reais e crescimento previsível. Meu foco é faturamento, não métricas de vaidade.',
        ctaPrimario: 'Quero conversar com o especialista',
        ctaMicro:
          '🔒 Conversa direta para entender seu cenário, suas dores e desejos. Sem compromisso.',
        ctaFinal: 'Quero conversar com o especialista',
        agitacaoH2:
          'Anunciar sem estratégia é a forma mais rápida de queimar o orçamento da sua empresa.',
        agitacaoProblema:
          'Você já contratou agências que prometeram o mundo, mas entregaram apenas relatórios cheios de métricas de vaidade: cliques, impressões, alcance, tudo vazio. Seu tráfego continua gerando contatos desqualificados que não convertem, ou pior, o telefone simplesmente não toca e as vendas não saem do lugar.',
        agitacaoAgitacao: (
          <>
            Enquanto isso, seu concorrente está dominando o mercado. O problema não é o seu
            produto ou o seu time de vendas: é a falta de uma estratégia digital focada
            exclusivamente em{' '}
            <strong className="text-[#F2F2F2]">faturamento real e crescimento previsível</strong>.
          </>
        ),
        solucaoH2:
          'Não sou uma agência de volume. Sou o gestor especializado que seu negócio merecia.',
        solucaoIntro: (
          <>
            Meu nome é Giovanne Morais. Diferente das agências tradicionais que tratam sua
            empresa como apenas mais um número, meu foco é{' '}
            <strong className="text-[#F2F2F2]">qualidade e não quantidade</strong>. Atuo como
            um gestor dedicado, aplicando método, conhecimento e estratégia para aumentar o
            faturamento do seu negócio no digital.
          </>
        ),
        solucaoH3: 'O ecossistema de vendas previsíveis',
        ecosystem: [
          {
            titulo: 'Tráfego pago de alta performance',
            descricao:
              'Gestão especializada em Meta Ads e Google Ads focada em vendas reais e leads qualificados.',
          },
          {
            titulo: 'SDR de inteligência artificial',
            descricao:
              'Automação inteligente para qualificar leads em tempo real antes que cheguem ao seu time humano.',
          },
          {
            titulo: 'Integração e automação (Make / Webhooks)',
            descricao:
              'Disparo automático de mensagens e integração perfeita para que nenhum lead esfrie.',
          },
          {
            titulo: 'Implementação de CRM comercial',
            descricao:
              'Estruturação completa do seu funil de vendas para garantir que o comercial feche mais negócios.',
          },
        ],
        beneficiosH2: 'O que acontece quando você tem uma estratégia digital completa?',
        beneficios: [
          {
            titulo: 'Leads qualificados diariamente',
            descricao:
              'Seu time comercial foca apenas em fechar vendas, não em prospectar curiosos.',
          },
          {
            titulo: 'Mais faturamento com o mesmo investimento',
            descricao:
              'Campanhas otimizadas significam pagar menos por clientes melhores e vender mais.',
          },
          {
            titulo: 'Processos automatizados',
            descricao:
              'A tecnologia (IA e automações) trabalha 24/7 para nutrir e qualificar contatos.',
          },
          {
            titulo: 'Crescimento previsível',
            descricao:
              'Controle total sobre o retorno do seu investimento, com faturamento escalável.',
          },
        ],
        finalH2: 'Pronto para aumentar o faturamento do seu negócio no digital?',
        finalTexto:
          'Vamos conversar para entender seu cenário, suas dores e seus desejos, e desenhar juntos o caminho até o resultado esperado. Meu modelo de trabalho exige dedicação extrema a cada parceiro. Por isso, não trabalho com volume. Tenho um limite rígido de projetos para garantir resultados excepcionais.',
        rodapeTexto: 'Gestão de tráfego pago com foco em faturamento',
      }}
    />
  );
}
