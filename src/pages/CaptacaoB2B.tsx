import { CaptacaoLP } from '@/components/captacao/CaptacaoLP';

export default function CaptacaoB2B() {
  return (
    <CaptacaoLP
      variant="b2b"
      copy={{
        path: '/empresas',
        pageTitle: 'Gestão de Tráfego Pago para Empresas | Giovanne Morais',
        pageDescription:
          'Gestor dedicado em tráfego pago para empresas que precisam de leads qualificados. Tráfego, SDR de IA, automação, CRM e Google Meu Negócio.',
        topbar: '⚡ Vagas limitadas para este mês',
        badge: 'Gestão de tráfego pago para empresas',
        h1: (
          <>
            Seu time comercial<br />
            está <span className="text-[#04BFBF]">ocioso?</span>
          </>
        ),
        subheadline: 'Fluxo previsível de leads qualificados',
        descricao: 'Gestor dedicado. Estratégia comprovada. Resultados em 90 dias.',
        ctaPrimario: 'Quero escalar meus leads',
        ctaMicro: 'Conversa no WhatsApp. Sem compromisso.',
        ctaFinal: 'Agendar minha consultoria estratégica gratuita',
        agitacaoH2:
          'Anunciar sem estratégia é a forma mais rápida de queimar o orçamento da sua empresa.',
        agitacaoProblema:
          'Você já contratou agências que prometeram o mundo, mas entregaram apenas relatórios cheios de métricas de vaidade: curtidas, impressões, cliques vazios. O seu comercial continua recebendo leads desqualificados que não convertem, ou pior, o telefone simplesmente não toca.',
        agitacaoAgitacao: (
          <>
            Enquanto isso, seu concorrente está dominando o mercado. A cada dia que sua empresa
            gasta dinheiro com tráfego mal gerenciado e sem automação inteligente, você perde
            vendas reais. O problema não é o seu produto ou o seu time de vendas: é a falta de
            uma estratégia digital focada exclusivamente em{' '}
            <strong className="text-[#F2F2F2]">performance e faturamento</strong>.
          </>
        ),
        solucaoH2: 'Não sou uma agência de volume. Sou o parceiro estratégico do seu crescimento.',
        solucaoIntro: (
          <>
            Meu nome é Giovanne Morais. Diferente das agências tradicionais que tratam sua
            empresa como apenas mais um número na planilha, meu foco é{' '}
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
              'Gestão especializada em Meta Ads, Google Ads e TikTok Ads focada 100% em ROI e leads qualificados.',
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
          {
            titulo: 'Google Meu Negócio',
            descricao:
              'Configuração e otimização recorrente para dominar as buscas locais e orgânicas.',
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
          'Meu modelo de trabalho exige dedicação extrema a cada parceiro. Por isso, não trabalho com volume. Tenho um limite rígido de projetos para garantir resultados excepcionais. Preencha o formulário abaixo e falo diretamente com você no WhatsApp.',
        rodapeTexto: 'Gestão de tráfego e estratégia digital para empresas',
      }}
    />
  );
}
