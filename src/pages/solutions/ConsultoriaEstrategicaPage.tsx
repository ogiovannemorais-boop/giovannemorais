import { SolutionLayout } from '@/components/solutions/SolutionLayout';

export default function ConsultoriaEstrategicaPage() {
  return (
    <SolutionLayout
      title="Clareza estratégica para crescer com previsibilidade."
      subtitle="Diagnóstico + plano de ação para alinhar oferta, funil e métricas — com foco em ROI."
      pains={[
        'Crescimento inconsistente e sem previsibilidade',
        'Dúvidas sobre qual canal priorizar (Meta, Google, SEO, etc.)',
        'Métricas desconectadas da receita e pouca clareza do ROI',
      ]}
      solution="Estruturamos um diagnóstico completo do seu negócio e transformamos isso em um plano prático: posicionamento, oferta, funil, metas e próximos passos. Você sai com direção clara, prioridades e um roadmap executável."
      playbook={[
        { step: 'Diagnóstico', description: 'Entendimento do negócio, metas e gargalos atuais' },
        { step: 'Mapeamento', description: 'Oferta, funil, canais e jornada do cliente' },
        { step: 'Plano de ação', description: 'Prioridades, tarefas e cronograma por impacto' },
        { step: 'Métricas', description: 'KPIs e rotina de acompanhamento para decidir com dados' },
      ]}
      deliverables={[
        'Diagnóstico estratégico (documentado)',
        'Roadmap de crescimento (30/60/90 dias)',
        'Plano de funil (captação → conversão)',
        'Matriz de canais e prioridades',
        'KPIs e cadência de acompanhamento',
      ]}
      kpis={[
        'Leads qualificados',
        'Taxa de conversão por etapa',
        'CAC e LTV (quando aplicável)',
        'ROI por canal',
        'Taxa de fechamento',
      ]}
      faqs={[
        {
          question: 'Isso é consultoria ou execução?',
          answer: 'É um trabalho estratégico com entregáveis práticos. Se fizer sentido, a execução pode ser contratada separadamente.',
        },
        {
          question: 'Quanto tempo leva?',
          answer: 'Em geral, de 7 a 14 dias, dependendo da disponibilidade de informações e alinhamentos.',
        },
        {
          question: 'Funciona para negócios locais e e-commerce?',
          answer: 'Sim. A estrutura se adapta ao seu modelo (local, e-commerce, serviços, B2B) e às métricas corretas para cada caso.',
        },
        {
          question: 'Vou receber tudo por escrito?',
          answer: 'Sim. Você recebe um documento com diagnóstico, plano de ação e KPIs — para executar com clareza.',
        },
      ]}
      microBait={{
        title: 'Template: Funil simples de aquisição (1 página)',
        description: 'Um modelo prático para organizar oferta, etapas do funil e métricas de decisão.',
      }}
    />
  );
}
