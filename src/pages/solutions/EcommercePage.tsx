import { SolutionLayout } from '@/components/solutions/SolutionLayout';

export function EcommercePage() {
  return (
    <SolutionLayout
      title="Campanhas que vendem todos os dias, ROAS crescente e previsível."
      subtitle="Do jeito antigo ao Método Power com IA & Machine Learning para e-commerces que querem escalar."
      pains={[
        'ROAS estagnado ou em queda',
        'Dificuldade em escalar sem perder eficiência',
        'Campanhas complexas demais para gerenciar',
      ]}
      solution="Implementamos o Método Power: campanhas estruturadas com Advantage+ e otimização contínua baseada em Machine Learning. Foco em ROAS crescente com catálogo otimizado e remarketing avançado."
      playbook={[
        { step: 'Auditoria', description: 'Análise completa da conta e identificação de oportunidades' },
        { step: 'Estruturação', description: 'Reorganização de campanhas com estrutura otimizada' },
        { step: 'Catálogo', description: 'Otimização de feed e criativos de produto' },
        { step: 'Escala', description: 'Expansão controlada com monitoramento de ROAS' },
      ]}
      deliverables={[
        'Catálogo otimizado para Meta e Google',
        'Configuração completa de Pixel e conversões',
        'Campanhas estruturadas (prospecção + remarketing)',
        'CRO contínuo na loja',
        'Relatórios de performance detalhados',
      ]}
      kpis={[
        'ROAS (Retorno sobre Investimento em Ads)',
        'AOV (Ticket Médio)',
        'Taxa de conversão',
        'CPA (Custo por Aquisição)',
      ]}
      faqs={[
        {
          question: 'Qual ROAS posso esperar?',
          answer: 'Depende do seu nicho, ticket médio e margem. Em geral, buscamos ROAS mínimo de 3x, podendo chegar a 8x+ em nichos específicos.',
        },
        {
          question: 'Trabalham com qual plataforma de e-commerce?',
          answer: 'Trabalhamos com todas as principais: Shopify, WooCommerce, Nuvemshop, VTEX, Magento e outras.',
        },
        {
          question: 'Fazem otimização na loja também?',
          answer: 'Sim, oferecemos consultoria de CRO para otimizar a taxa de conversão da sua loja e maximizar o retorno dos anúncios.',
        },
        {
          question: 'Como funciona a precificação?',
          answer: 'Trabalhamos com fee fixo + percentual sobre investimento em mídia. Entre em contato para uma proposta personalizada.',
        },
      ]}
      microBait={{
        title: 'Checklist CRO para E-commerce',
        description: '15 pontos para aumentar sua taxa de conversão hoje mesmo.',
      }}
      ctaText="Agendar diagnóstico de performance"
    />
  );
}
