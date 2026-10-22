import LeadLanding, { passosDiag, faqDiag } from '@/components/landing/LeadLanding';

export default function Diagnostico() {
  return (
    <LeadLanding
      c={{
        title: 'Giovanne Morais | Mais clientes para sua empresa',
        description: 'Sua empresa não precisa de mais seguidores. Precisa de clientes chegando todo mês. Assessoria de tráfego pago e estratégia para donos de empresa.',
        canonical: 'https://giovannemorais.lovable.app/diagnostico',
        topbar: 'Atendo poucas empresas por vez para acompanhar cada uma de perto. Diagnósticos de novembro abertos.',
        heroCta: 'Quero meu diagnóstico gratuito',
        heroMicro: '30 minutos, sem compromisso. Você sai com 3 ajustes que já pode aplicar.',
        heroCheck2: 'Resultado medido em vendas',
        methodKicker: 'Como funciona',
        methodCta: 'Quero começar pelo diagnóstico',
        passos: passosDiag,
        faq: faqDiag,
        formId: 'diagnostico',
        formKicker: 'Diagnóstico gratuito',
        formTitle: ['Descubra onde sua empresa está ', 'perdendo clientes'],
        formText: 'Responda as perguntas ao lado. Se sua empresa tiver perfil, eu entro em contato pelo WhatsApp em até 1 dia útil para marcar 30 minutos de conversa.',
        formChecks: ['Análise dos seus anúncios e do seu perfil', '3 ajustes práticos para aplicar já', 'Sem compromisso de contratar'],
        verbaLabel: 'Quanto pode investir em anúncios/mês?',
        formButton: 'Quero meu diagnóstico gratuito',
        onSuccess: 'whatsapp',
      }}
    />
  );
}
