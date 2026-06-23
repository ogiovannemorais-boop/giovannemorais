import { CaptacaoLP } from '@/components/captacao/CaptacaoLP';

export default function CaptacaoEcommerce() {
  return (
    <CaptacaoLP
      variant="ecommerce"
      copy={{
        path: '/ecommerce',
        pageTitle: 'Performance para E-commerce | Giovanne Morais',
        pageDescription:
          'Especialista em e-commerce. Escale vendas com ROAS positivo. Método validado para vender todos os dias no site próprio. Análise gratuita.',
        topbar: '⚡ Vagas limitadas para este mês',
        badge: (
          <>
            Performance exclusiva para{' '}
            <span className="whitespace-nowrap">e-commerce</span>
          </>
        ),
        h1: (
          <>
            Sua loja tem visitas,<br />
            mas <span className="text-[#04BFBF]">poucas vendas?</span>
          </>
        ),
        subheadline: 'Escale com tráfego 100% em conversão',
        descricao: 'Método validado. ROAS positivo. Vendas diárias.',
        ctaPrimario: 'Quero escalar as vendas',
        ctaMicro: 'Análise gratuita no WhatsApp.',
        ctaFinal: 'Agendar análise gratuita do meu e-commerce',
        agitacaoH2: 'Tráfego sem estratégia é o maior ralo de dinheiro do seu e-commerce.',
        agitacaoProblema:
          'Você olha para o painel da sua loja e vê dezenas de visitantes, carrinhos abandonados, mas o número de pedidos finalizados não fecha a conta no fim do mês. Você já tentou impulsionar publicações ou contratou agências genéricas que comemoram cliques, mas o seu faturamento continua estagnado.',
        agitacaoAgitacao: (
          <>
            O problema de trabalhar com quem foca em quantidade é que você paga caro por um
            público que não tem intenção de compra. A cada dia com campanhas mal configuradas e
            sem um funil de remarketing agressivo, você está deixando dinheiro na mesa e
            perdendo espaço para concorrentes que já entenderam o jogo da{' '}
            <strong className="text-[#F2F2F2]">performance digital</strong>.
          </>
        ),
        solucaoH2: 'O método validado para vender todos os dias no seu site próprio.',
        solucaoIntro: (
          <>
            Meu nome é Giovanne Morais. Não sou uma agência de volume que atende centenas de
            clientes de forma superficial. Sou um gestor dedicado, especialista em{' '}
            <span className="whitespace-nowrap">e-commerce</span>. Meu único foco é o seu{' '}
            <strong className="text-[#F2F2F2]">
              Retorno Sobre o Investimento (ROAS)
            </strong>
            . Trago qualidade, não apenas volume.
          </>
        ),
        solucaoH3: 'A engenharia de performance para e-commerce',
        ecosystem: [
          {
            titulo: 'Tráfego de conversão extrema',
            descricao:
              'Campanhas avançadas no Meta Ads, Google Ads (Shopping e Performance Max) e TikTok Ads focadas exclusivamente em compradores.',
          },
          {
            titulo: 'Recuperação automática de vendas',
            descricao:
              'Integrações (Make e Webhooks) para resgatar carrinhos abandonados e boletos / PIX não pagos instantaneamente.',
          },
          {
            titulo: 'Automação com IA (SDR)',
            descricao:
              'Inteligência Artificial para responder dúvidas de clientes em tempo real e acelerar o checkout.',
          },
          {
            titulo: 'Google Meu Negócio otimizado',
            descricao:
              'Dominação das buscas locais para atrair compradores orgânicos com intenção imediata.',
          },
          {
            titulo: 'Análise de dados e escalabilidade',
            descricao:
              'Leitura profunda de métricas reais (CAC, LTV, ROAS) para escalar o que funciona e cortar o que dá prejuízo.',
          },
        ],
        beneficiosH2: 'O que muda quando seu e-commerce tem um gestor de performance?',
        beneficios: [
          {
            titulo: 'Vendas diárias e previsíveis',
            descricao:
              'O som da notificação de venda aprovada se torna rotina no seu dia a dia.',
          },
          {
            titulo: 'ROAS positivo e escalável',
            descricao:
              'Cada real investido em anúncios volta multiplicado para o caixa da empresa.',
          },
          {
            titulo: 'Carrinhos recuperados',
            descricao:
              'A tecnologia trabalha nos bastidores para salvar vendas que seriam perdidas.',
          },
          {
            titulo: 'Crescimento sustentável',
            descricao:
              'Você foca em logística e produto, enquanto eu cuido de encher a sua loja de compradores.',
          },
        ],
        finalH2: 'Sua loja está pronta para escalar o faturamento?',
        finalTexto:
          'Para garantir resultados reais e acompanhamento próximo de cada métrica do seu e-commerce, eu não trabalho com volume de clientes. Minha agenda é extremamente restrita. Preencha o formulário abaixo e falo diretamente com você no WhatsApp.',
        rodapeTexto: 'Performance para e-commerce',
      }}
    />
  );
}
