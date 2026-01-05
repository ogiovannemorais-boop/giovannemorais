import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

interface SolutionLayoutProps {
  title: string;
  subtitle: string;
  pains: string[];
  solution: string;
  playbook?: { step: string; description: string }[];
  deliverables: string[];
  kpis: string[];
  faqs: { question: string; answer: string }[];
  microBait?: { title: string; description: string };
  ctaText?: string;
  children?: ReactNode;
  heroImage?: string;
}

export function SolutionLayout({
  title,
  subtitle,
  pains,
  solution,
  playbook,
  deliverables,
  kpis,
  faqs,
  microBait,
  ctaText = 'Agendar diagnóstico gratuito',
  children,
  heroImage,
}: SolutionLayoutProps) {
  return (
    <div className="beams-background">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <nav className="mb-8 animate-fade-in">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl animate-fade-in delay-100">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {subtitle}
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  {ctaText}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
            {heroImage && (
              <div className="animate-fade-in delay-200">
                <img src={heroImage} alt="Especialista em Marketing Digital" className="rounded-2xl shadow-2xl" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fade-in">Você se identifica?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pains.map((pain, index) => (
              <div 
                key={pain}
                className="p-6 bg-card border border-destructive/20 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <span className="text-destructive font-bold">!</span>
                </div>
                <p className="text-muted-foreground">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A solução</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{solution}</p>
          </div>

          {playbook && (
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {playbook.map((step, index) => (
                <div 
                  key={step.step}
                  className="relative p-6 bg-card border border-border rounded-xl animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2 mt-2">{step.step}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          )}

          {children}
        </div>
      </section>

      {/* Deliverables & KPIs */}
      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">O que você recebe</h2>
              <div className="space-y-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in delay-200">
              <h2 className="text-2xl font-bold mb-6">KPIs monitorados</h2>
              <div className="space-y-3">
                {kpis.map((kpi) => (
                  <div key={kpi} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro Bait */}
      {microBait && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto bg-card border border-primary/20 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{microBait.title}</h3>
              <p className="text-muted-foreground mb-6">{microBait.description}</p>
              <Button variant="outline" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Baixar checklist gratuito
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            Perguntas frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={faq.question}
                className="group bg-card border border-border rounded-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground mb-8">
              Agende uma conversa gratuita e descubra como essa solução pode transformar seu negócio.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
