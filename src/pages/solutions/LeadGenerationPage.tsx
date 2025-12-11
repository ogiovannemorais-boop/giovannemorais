import { SolutionLayout } from '@/components/solutions/SolutionLayout';

export function LeadGenerationPage() {
  return (
    <SolutionLayout
      title="Leads qualificados todos os dias — sem desperdício de verba."
      subtitle="Estratégia local + funil simples para captação, nutrição e conversão de leads qualificados."
      pains={[
        'Investir em anúncios sem retorno claro',
        'Falta de previsibilidade na geração de oportunidades',
        '"Impulsionar" posts sem um funil estruturado',
      ]}
      solution="Criamos uma estratégia completa de geração de leads com funil de captação → nutrição → agenda. Cada etapa é otimizada para maximizar a conversão e minimizar o custo por lead qualificado."
      playbook={[
        { step: 'Diagnóstico', description: 'Análise do seu mercado, persona e concorrência' },
        { step: 'Plano de mídia', description: 'Estratégia de canais, orçamento e metas' },
        { step: 'Execução + Creatives', description: 'Campanhas otimizadas com criativos de alta conversão' },
        { step: 'Otimização por KPIs', description: 'Ajustes contínuos baseados em dados reais' },
      ]}
      deliverables={[
        'Setup completo de campanhas (Meta, Google, etc)',
        'Landing page de captação otimizada',
        'Configuração de Pixel e GA4',
        'Automações leves de nutrição',
        'Relatórios semanais de performance',
      ]}
      kpis={[
        'CPL (Custo por Lead)',
        'Taxa de agendamento',
        'CAC (Custo de Aquisição de Cliente)',
        'Taxa de conversão do funil',
      ]}
      faqs={[
        {
          question: 'Quanto tempo leva para ver resultados?',
          answer: 'Os primeiros resultados aparecem nas primeiras semanas, mas a otimização completa do funil leva de 60 a 90 dias para atingir o máximo potencial.',
        },
        {
          question: 'Qual o investimento mínimo em mídia recomendado?',
          answer: 'Recomendamos um mínimo de R$ 1.500/mês para ter dados suficientes para otimização. O ideal varia conforme seu mercado e objetivos.',
        },
        {
          question: 'Vocês criam os anúncios ou preciso fornecer?',
          answer: 'Criamos todo o material: copy, criativos e landing pages. Você só aprova e acompanha os resultados.',
        },
        {
          question: 'Como funciona o relatório?',
          answer: 'Enviamos relatórios semanais com métricas principais e reuniões mensais para análise estratégica e ajustes.',
        },
      ]}
      microBait={{
        title: 'Checklist: 7 erros que travam a geração de leads',
        description: 'Descubra os erros mais comuns e como evitá-los para escalar sua captação.',
      }}
    />
  );
}
