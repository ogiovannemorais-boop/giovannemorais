import { CaptacaoLP } from '@/components/captacao/CaptacaoLP';

export default function Destino() {
  return (
    <CaptacaoLP
      variant="b2b"
      copy={{
        path: '/destino',
        pageTitle: 'Gestão de Tráfego Pago com Foco em ROI | Giovanne Morais',
        pageDescription:
          'Gestão especializada de tráfego pago para e-commerces, empresas e comércios. Foco 100% em ROI, leads qualificados e vendas reais. Não em métricas de vaidade.',
        topbar: '⚡ Diagnóstico gratuito: vagas limitadas para este mês',
        badge: 'Performance & ROI em tráfego pago',
        h1: (
          <>
            Seu tráfego pago não está retornando o que{' '}
            <span className="text-[#04BFBF]">deveria</span>?
          </>
        ),
        subheadline: 'Você está pagando por cliques, mas recebendo apenas curiosos.',
        descricao:
          'Trabalho com gestão especializada de tráfego pago para e-commerces, empresas e comércios que precisam de leads qualificados e vendas reais. Meu foco é 100% em ROI, não em métricas de vaidade.',
        ctaPrimario: 'Fale agora com o especialista',
        ctaMicro: '🔒 Diagnóstico gratuito de suas campanhas atuais.',
        ctaFinal: 'Fale agora com o especialista',
        agitacaoH2:
          'Anunciar sem estratégia é a forma mais rápida de queimar o orçamento da sua empresa.',
        agitacaoProblema:
          'Você já contratou agências que prometeram o mundo, mas entregaram apenas relatórios cheios de métricas de vaidade: cliques, impressões, alcance, tudo vazio. Seu tráfego continua gerando leads desqualificados que não convertem, ou pior, o telefone simplesmente não toca e as vendas não saem do lugar.',
        agitacaoAgitacao: (
          <>
            Enquanto isso, seu concorrente está dominando o mercado. O problema não é o seu
            produto ou o seu time de vendas: é a falta de uma estratégia digital focada
            exclusivamente em{' '}
            <strong className="text-[#F2F2F2]">performance e faturamento real</strong>.
          </>
        ),
        solucaoH2:
          'Não sou uma agência de volume. Sou o gestor especializado que seu negócio merecia.',
        solucaoIntro: (
          <>
            Meu nome é Giovanne Morais. Diferente das agências tradicionais que tratam sua
            empresa como apenas mais um número, meu foco é{' '}
            <strong className="text-[#F2F2F2]">qualidade e não quantidade</strong>. Atuo como
            um gestor dedicado, implementando um método validado para atrair clientes que
            realmente querem comprar de você.
          </>
        ),
        solucaoH3: 'O ecossistema de vendas previsíveis',
        ecosystem: [
          {
            titulo: 'Tráfego pago de alta performance',
            descricao:
              'Gestão especializada em Meta Ads e Google Ads focada 100% em ROI e leads qualificados.',
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
            titulo: 'Redução do custo de aquisição (CAC)',
            descricao: 'Campanhas otimizadas significam pagar menos por clientes melhores.',
          },
          {
            titulo: 'Processos automatizados',
            descricao:
              'A tecnologia (IA e automações) trabalha 24/7 para nutrir e qualificar contatos.',
          },
          {
            titulo: 'Faturamento previsível',
            descricao:
              'Controle total sobre o retorno do seu investimento (ROI positivo e escalável).',
          },
        ],
        finalH2: 'Pronto para transformar seu comercial em uma máquina de vendas?',
        finalTexto:
          'Meu modelo de trabalho exige dedicação extrema a cada parceiro. Por isso, não trabalho com volume. Tenho um limite rígido de projetos para garantir resultados excepcionais.',
        rodapeTexto: 'Gestão de tráfego pago com foco em ROI',
      }}
    />
  );
}
