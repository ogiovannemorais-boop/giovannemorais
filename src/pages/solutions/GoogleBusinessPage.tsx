import { SolutionLayout } from '@/components/solutions/SolutionLayout';

export function GoogleBusinessPage() {
  return (
    <SolutionLayout
      title="Domine as buscas locais e receba mais ligações e visitas."
      subtitle="Otimização completa do Google Meu Negócio para negócios locais que querem ser encontrados."
      pains={[
        'Perfil desatualizado ou incompleto',
        'Poucas avaliações ou avaliações negativas',
        'Concorrentes aparecem antes de você nas buscas',
      ]}
      solution="Otimizamos seu perfil do Google Meu Negócio com informações completas, fotos profissionais, posts regulares e gestão ativa de avaliações. Seu negócio aparece para quem está procurando agora."
      deliverables={[
        'Otimização completa do perfil',
        'Fotos profissionais otimizadas',
        'Posts semanais no perfil',
        'Gestão de avaliações',
        'Relatório mensal de insights',
      ]}
      kpis={[
        'Chamadas telefônicas',
        'Solicitações de rota',
        'Visitas ao site',
        'Visualizações do perfil',
        'Posição para termos locais',
      ]}
      faqs={[
        {
          question: 'Quanto tempo para aparecer nas buscas locais?',
          answer: 'Os primeiros resultados aparecem em 2-4 semanas. Resultados consistentes levam de 2 a 3 meses de trabalho contínuo.',
        },
        {
          question: 'Vocês respondem às avaliações?',
          answer: 'Sim, respondemos todas as avaliações de forma personalizada, tanto positivas quanto negativas, seguindo boas práticas.',
        },
        {
          question: 'Preciso de fotos profissionais?',
          answer: 'Recomendamos fotos de qualidade, mas podemos trabalhar com o que você tem e otimizar. Se necessário, indicamos fotógrafos parceiros.',
        },
        {
          question: 'Funciona para qualquer tipo de negócio local?',
          answer: 'Sim, funciona para restaurantes, clínicas, lojas, prestadores de serviço e qualquer negócio com endereço físico ou área de atendimento.',
        },
      ]}
      ctaText="Quero análise do meu perfil"
    />
  );
}
