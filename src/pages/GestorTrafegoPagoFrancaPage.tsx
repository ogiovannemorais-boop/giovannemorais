import { Helmet } from 'react-helmet-async';
import { ArrowRight, Target, LineChart, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQ } from '@/components/FAQ';
import giovannePhoto from '@/assets/giovanne-photo.png';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Olá!%20Vim%20da%20página%20de%20Gestor%20de%20Tráfego%20em%20Franca.%20Quero%20agendar%20meu%20diagnóstico%20gratuito.";

const faqItems = [
  {
    question: 'Isso funciona para o meu tipo de negócio?',
    answer: 'Sim. Meu método foi validado em mais de 30 segmentos diferentes, incluindo restaurantes, clínicas, lojas, prestadores de serviço e e-commerces em Franca e região. Se você vende um produto ou serviço de qualidade, eu posso ajudar a atrair os clientes certos.',
  },
  {
    question: 'Quanto eu preciso investir?',
    answer: 'Você tem total controle sobre o seu orçamento. No nosso diagnóstico gratuito, vamos entender suas metas e sugerir um plano de investimento que caiba no seu bolso e que tenha o melhor potencial de retorno. Meu foco é em maximizar seu ROI, seja com R$500 ou R$5.000 por mês.',
  },
  {
    question: 'Eu não entendo nada de marketing digital. Isso é um problema?',
    answer: 'Pelo contrário! Meu trabalho é traduzir a complexidade do marketing digital em resultados que você entende: mais clientes e mais vendas. Cuido de toda a parte técnica e apresento relatórios claros e diretos, sem "marketinguês".',
  },
  {
    question: 'O que te diferencia de outras agências em Franca?',
    answer: 'Minha abordagem é de parceria e governança. Você não fala com um vendedor ou um gerente de contas; você fala diretamente comigo. Além disso, meu método integra tráfego, páginas de conversão e automações com IA, garantindo um processo mais eficiente e com maior retorno, sempre em conformidade com a LGPD desde o início.',
  },
];

const methodSteps = [
  {
    step: 'Diagnóstico e Estratégia',
    description: 'Analiso seu negócio, seus concorrentes em Franca e o comportamento do seu cliente ideal. Defino as melhores plataformas e a verba ideal para suas metas.',
    benefit: 'Clareza total. Você sabe exatamente onde e por que seu dinheiro está sendo investido.',
  },
  {
    step: 'Execução e Otimização',
    description: 'Crio e gerencio suas campanhas de anúncios com uma única obsessão: performance. Otimizo diariamente para atrair os clientes mais qualificados.',
    benefit: 'Mais clientes, menos desperdício. Fluxo constante de contatos qualificados.',
  },
  {
    step: 'Análise e Relatórios',
    description: 'Envio relatórios simples e visuais que mostram o essencial: quanto foi investido, quantos clientes foram gerados e qual foi o seu ROI.',
    benefit: 'Transparência e controle. Decisões baseadas em dados, não em suposições.',
  },
];

const cases = [
  {
    title: 'Restaurante Local em Franca',
    challenge: 'Pouca visibilidade nas buscas locais e dificuldade em atrair novos clientes durante a semana.',
    strategy: 'Otimização completa do Google Meu Negócio e campanhas geolocalizadas no Instagram Ads.',
    results: [
      { value: '+320%', label: 'em visualizações no perfil do Google' },
      { value: '+40%', label: 'em ligações para reservas' },
      { value: '+85', label: 'novas avaliações 5 estrelas' },
    ],
  },
  {
    title: 'Clínica de Estética em Franca',
    challenge: 'Alto custo por agendamento e baixa taxa de comparecimento dos leads gerados.',
    strategy: 'Funil de captação com qualificação e nutrição via automações no WhatsApp.',
    results: [
      { value: '-62%', label: 'no Custo por Lead (CPL)' },
      { value: '78%', label: 'de taxa de comparecimento' },
      { value: '+140', label: 'agendamentos por mês' },
    ],
  },
];

export default function GestorTrafegoPagoFrancaPage() {
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Giovanne Morais - Gestor de Tráfego Pago",
    "description": "Gestor de tráfego pago especializado em negócios locais em Franca/SP. Mais de R$ 1 milhão em mídia gerenciada, +30 negócios atendidos.",
    "url": "https://giovanne.io/gestor-trafego-pago-franca",
    "telephone": "+5516988037193",
    "email": "ogiovannemorais@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Franca",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Franca",
      "containedInPlace": {
        "@type": "State",
        "name": "São Paulo"
      }
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/in/giovanne-morais-ab5b47349/",
      "https://www.instagram.com/ogiovannemorais/"
    ]
  };

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gestão de Tráfego Pago",
    "provider": {
      "@type": "Person",
      "name": "Giovanne Morais",
      "jobTitle": "Gestor de Tráfego Pago"
    },
    "areaServed": {
      "@type": "City",
      "name": "Franca"
    },
    "description": "Serviço de gestão de tráfego pago para negócios locais em Franca/SP. Campanhas no Google Ads e Meta Ads com foco em ROI."
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Gestor de Tráfego Pago em Franca/SP | Giovanne Morais</title>
        <meta 
          name="description" 
          content="Gestor de tráfego pago especializado em negócios locais em Franca/SP. +R$ 1 milhão em mídia gerenciada, +30 negócios atendidos. Agende seu diagnóstico gratuito." 
        />
        <meta name="keywords" content="gestor de tráfego pago franca, tráfego pago franca sp, marketing digital franca, google ads franca, facebook ads franca, instagram ads franca" />
        <link rel="canonical" href="https://giovanne.io/gestor-trafego-pago-franca" />
        <meta property="og:title" content="Gestor de Tráfego Pago em Franca/SP | Giovanne Morais" />
        <meta property="og:description" content="Gestor de tráfego pago especializado em negócios locais em Franca/SP. Agende seu diagnóstico gratuito." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <div className="beams-background">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center section-padding">
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                  Seu negócio em Franca merece mais clientes.{' '}
                  <span className="text-primary">Eu posso ajudar.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
                  Sou Giovanne Morais, Gestor de Tráfego especializado em negócios locais. Foco total em ROI e resultados para sua empresa em Franca.
                </p>

                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Agendar Diagnóstico Gratuito
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>

                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Google Partner</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Meta Business Partner</span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  Junte-se a mais de 30 empresários de Franca e região que transformaram seus negócios.
                </p>
              </div>

              <div className="relative animate-fade-in delay-200 order-first lg:order-last">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
                  <img 
                    src={giovannePhoto} 
                    alt="Giovanne Morais - Gestor de Tráfego Pago em Franca SP" 
                    className="relative rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
              Se você é dono de um negócio em Franca, talvez isso soe familiar...
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 bg-card border border-border rounded-2xl animate-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-destructive">Você se sente deixado para trás?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você construiu sua empresa com muito suor e dedicação, mas ultimamente percebe que o movimento não é mais o mesmo. Você vê seus concorrentes, até os mais novos, aparecendo no Google e no Instagram e se pergunta: "Como eles fazem isso?". A ideia de investir em marketing digital parece complexa, arriscada e você tem medo de gastar dinheiro sem ver um retorno real na sua loja ou no seu caixa.
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl animate-fade-in delay-100">
                <h3 className="text-xl font-semibold mb-4 text-destructive">Você atingiu um platô?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você já tem uma presença online, faz seus posts e até impulsiona algumas publicações. Mas a verdade é que os resultados não são consistentes. Você atrai muitos curiosos que só perguntam o preço e somem, e não consegue criar uma estratégia que realmente traga clientes qualificados de forma previsível. Você sabe que poderia crescer muito mais, mas sente que falta um parceiro com expertise para levar seu negócio para o próximo nível.
                </p>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-semibold text-center mt-12 text-primary animate-fade-in delay-200">
              A boa notícia? Existe um caminho mais simples e eficaz para atrair clientes em Franca, baseado em método, não em sorte.
            </p>
          </div>
        </section>

        {/* Solution & Method Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Chega de achismo. Meu método une Tráfego Pago, Clareza e Foco em ROI.
              </h2>
              <p className="text-lg text-muted-foreground">
                Ao longo de mais de 30 projetos e com mais de R$ 1 milhão em mídia gerenciada, desenvolvi um processo que transforma seu investimento em clientes reais. Esqueça a complexidade; meu trabalho é entregar resultados que você entende e vê no caixa.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-8 text-center">
              Como meu método funciona na prática para o seu negócio em Franca:
            </h3>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {methodSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className="relative p-6 bg-card border border-border rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="mt-4">
                    {index === 0 && <Target className="w-8 h-8 text-primary mb-4" />}
                    {index === 1 && <LineChart className="w-8 h-8 text-primary mb-4" />}
                    {index === 2 && <Users className="w-8 h-8 text-primary mb-4" />}
                    <h4 className="font-semibold mb-3">{step.step}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-primary">{step.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl font-semibold text-center mt-12 animate-fade-in">
              Meu compromisso é com o seu crescimento. Cuido do seu marketing como se o negócio fosse meu, com a disciplina e a governança que você merece.
            </p>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
              Resultados reais de negócios que confiaram no meu método:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {cases.map((caseItem, index) => (
                <div 
                  key={caseItem.title}
                  className="p-8 bg-card border border-border rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-4">{caseItem.title}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">O Desafio:</span>
                      <p className="text-sm">{caseItem.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">A Estratégia:</span>
                      <p className="text-sm">{caseItem.strategy}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <span className="text-sm font-medium text-muted-foreground mb-4 block">O Resultado:</span>
                    <div className="grid grid-cols-3 gap-4">
                      {caseItem.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <span className="text-2xl font-bold text-primary">{result.value}</span>
                          <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Pronto para ter um método de crescimento para o seu negócio em Franca?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Chega de depender de sorte ou de indicações. Vamos criar juntos uma estratégia de anúncios que gera resultados reais e previsíveis. Agende um diagnóstico de marketing gratuito e sem compromisso diretamente comigo.
              </p>

              <Button variant="hero" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Diagnóstico Gratuito com Giovanne
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <p className="mt-6 text-sm text-muted-foreground italic">
                Atenção: Para garantir a máxima dedicação e resultados para meus clientes, minha agenda tem espaço para apenas mais 2 empresas de Franca este mês. Garanta sua vaga.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
              Perguntas Frequentes
            </h2>
            <div className="max-w-3xl mx-auto animate-fade-in delay-100">
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vamos conversar sobre o seu negócio?
              </h2>
              <p className="text-muted-foreground mb-8">
                Agende uma conversa gratuita e descubra como o tráfego pago pode transformar seu negócio em Franca.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
