import LeadLanding from '@/components/landing/LeadLanding';

export default function HomeLanding() {
  return (
    <LeadLanding
      c={{
        title: 'Giovanne Morais | Mais clientes para sua empresa com tráfego pago',
        description: 'Assessoria de tráfego pago e estratégia para donos de empresa que querem clientes chegando todo mês, sem depender só de indicação. Agende uma conversa estratégica.',
        canonical: 'https://giovannemorais.lovable.app/',
        topbar: 'Atendo poucas empresas por vez para acompanhar cada uma de perto. Agenda de conversas estratégicas de novembro aberta.',
        header: true,
        hideHeroCard: true,
        heroCta: 'Quero agendar minha conversa',
        heroMicro: 'Uma conversa de 30 minutos para entender seu negócio e mostrar o caminho para destravar suas vendas.',
        heroCheck2: 'Método validado, resultado medido em vendas',
        methodKicker: 'O método',
        methodCta: 'Quero agendar minha conversa',
        passos: [
          ['Conversa estratégica', 'Entendo seu negócio, seus números e onde o cliente está escapando hoje.'],
          ['Estratégia e oferta', 'Definimos público, mensagem e meta de custo por cliente. Você aprova o plano de 90 dias.'],
          ['Campanhas no ar', 'Anúncios no Instagram, Facebook e Google levando contatos qualificados direto para seu WhatsApp.'],
          ['Acompanhamento', 'Relatório toda segunda, reunião mensal e ajustes semanais olhando para o que virou venda.'],
        ],
        faq: [
          ['Já contratei agência e não deu certo. Por que seria diferente?', 'Porque eu não meço curtida, meço contato e venda. Na conversa estratégica eu mostro onde o dinheiro estava escapando antes de você decidir qualquer coisa.'],
          ['Anúncio funciona para o meu ramo?', 'Funciona para quem tem algo que o cliente procura e alguém para atender. Indústria, clínica, loja, serviço: o método é o mesmo, muda a mensagem. Na conversa eu digo com sinceridade se vale para você.'],
          ['Quanto preciso investir?', 'A partir de R$ 1.500 por mês em anúncios, além da assessoria. O valor exato depende da sua meta e é definido no plano de 90 dias.'],
          ['E se eu não tiver tempo para acompanhar?', 'Você só precisa me dizer quais contatos viraram venda. O resto fica comigo, com relatório pronto toda segunda no seu WhatsApp.'],
          ['A conversa tem algum custo?', 'Não. São 30 minutos para entender seu negócio e mostrar o caminho. Se fizer sentido trabalharmos juntos, eu apresento a proposta depois.'],
        ],
        formId: 'agendar',
        formKicker: 'Conversa estratégica gratuita',
        formTitle: ['Vamos destravar as vendas da ', 'sua empresa'],
        formText: 'Responda as perguntas ao lado para eu chegar na conversa já conhecendo seu negócio. Em 30 minutos você entende o método que uso para transformar anúncio em cliente e sai com um plano claro dos próximos passos.',
        formChecks: ['Análise do seu negócio e dos seus números', 'O método aplicado à sua realidade', 'Plano dos próximos passos, sem compromisso'],
        verbaLabel: 'Quanto pode investir em anúncios por mês?',
        formButton: 'Quero agendar minha conversa',
        onSuccess: 'agendar',
        footerLinks: [
          ['Para empresas', '/empresas'],
          ['Para e-commerce', '/ecommerce'],
          ['Franca', '/gestor-trafego-franca'],
          ['Links', '/links'],
          ['Privacidade', '/politica-privacidade'],
          ['Termos', '/termos'],
        ],
      }}
    />
  );
}
