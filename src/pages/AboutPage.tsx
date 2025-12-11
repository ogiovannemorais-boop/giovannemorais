import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Target, Users, Shield, CheckCircle, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import giovannePhoto from '@/assets/giovanne-photo.png';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

const qualifications = [
  'Tráfego pago: Meta, Google, YouTube, Pinterest, TikTok, LinkedIn Ads',
  'Formação: Comunidade Sobral (Tráfego), IA na Prática (Fábio Ricotta)',
  'Track record: +30 clientes, +R$ 1MM em mídia',
];

const values = [
  { icon: Shield, title: 'Respeito', description: 'Relacionamentos baseados em confiança' },
  { icon: Target, title: 'Transparência', description: 'Comunicação clara e direta' },
  { icon: CheckCircle, title: 'Antiprocrastinação', description: 'Ação rápida e eficiente' },
  { icon: Award, title: 'Meritocracia', description: 'Resultados falam mais que promessas' },
  { icon: Users, title: 'Processos', description: 'Governança em cada etapa' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/giovanne-morais-ab5b47349/', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/ogiovannemorais/', icon: Instagram },
  { name: 'X', href: 'https://x.com/ogiovannemorais', icon: Twitter },
  { name: 'YouTube', href: 'https://www.youtube.com/@OGiovanneMorais', icon: Youtube },
];

// Custom Threads icon component
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.333-3.023.812-.673 1.927-1.084 3.22-1.19a13.6 13.6 0 0 1 3.056.07c-.036-.65-.236-1.158-.603-1.528-.467-.47-1.258-.707-2.353-.707h-.084c-.911.01-1.81.265-2.45.697l-1.104-1.69c.96-.63 2.227-1.009 3.546-1.027h.118c1.634 0 2.924.445 3.837 1.323.77.74 1.244 1.762 1.41 3.04.493.14.95.318 1.368.535 1.132.59 2.002 1.433 2.582 2.504.79 1.457.9 3.547-.526 5.944-1.804 3.032-5.086 4.012-8.413 3.988zm.652-7.606c-.822.045-1.476.282-1.894.686-.39.376-.574.87-.548 1.469.024.534.284 1.04.73 1.428.52.451 1.256.681 2.127.664 1.032-.055 1.835-.444 2.388-1.157.433-.558.705-1.273.808-2.13a10.8 10.8 0 0 0-3.611-.96z"/>
  </svg>
);

export function AboutPage() {
  return (
    <div className="beams-background">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Clareza, método e IA para transformar{' '}
                <span className="gradient-text">marketing em receita</span>.
              </h1>
              
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-12">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Faço negócios venderem com previsibilidade: estruturo tráfego pago, crio páginas que convertem e implemento automações com IA. Sem promessas fáceis, com governança, relatórios claros e foco no resultado.
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-1 animate-fade-in delay-100">
                <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                  <div className="relative w-40 h-48 mx-auto mb-4 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 blur-xl" />
                    <img 
                      src={giovannePhoto} 
                      alt="Giovanne - Gestor de Tráfego e Consultor de IA"
                      className="relative w-full h-full object-cover object-top"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-2">Giovanne</h2>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Gestor de Tráfego & Consultor de IA
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap mb-4">
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary">
                      Meta Partner
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary">
                      Google Partner
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="border-t border-border pt-4">
                    <h4 className="text-xs font-medium text-muted-foreground text-center mb-3">Redes sociais</h4>
                    <div className="flex justify-center gap-2 flex-wrap">
                      {socialLinks.map((social) => (
                        <a 
                          key={social.name}
                          href={social.href}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                          aria-label={social.name}
                        >
                          <social.icon className="w-[22px] h-[22px]" />
                        </a>
                      ))}
                      <a 
                        href="https://www.threads.com/@ogiovannemorais"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label="Threads"
                      >
                        <ThreadsIcon className="w-[22px] h-[22px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 animate-fade-in delay-200">
                <h3 className="text-2xl font-semibold mb-4">Sobre mim</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Sou movido por disciplina, ordem e aprendizado contínuo. Construí minha carreira unindo gestão de tráfego, criação de páginas e inteligência artificial aplicada ao dia a dia das empresas. Trago um olhar analítico, explico com clareza e ajo como parceiro, cuidando do negócio do cliente como se fosse meu.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Meu objetivo é simples: transformar esforço em resultado mensurável, com processos sólidos, documentação e respeito à LGPD.
                  </p>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div className="mb-16 animate-fade-in delay-300">
              <h3 className="text-2xl font-semibold mb-6">Qualificações</h3>
              <div className="space-y-4">
                {qualifications.map((qual) => (
                  <div key={qual} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="animate-fade-in delay-400">
              <h3 className="text-2xl font-semibold mb-6">Valores</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="p-4 bg-card border border-border rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center animate-fade-in delay-500">
              <h3 className="text-2xl font-semibold mb-4">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6">
                Vamos conversar sobre como posso ajudar seu negócio a crescer.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar diagnóstico gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
