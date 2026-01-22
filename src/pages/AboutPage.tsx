import { ArrowRight, Award, Target, Users, Shield, CheckCircle } from 'lucide-react';
import giovannePhoto from '@/assets/giovanne-photo.png';
import { CTAButton } from '@/components/CTAButton';
import { SocialLinks } from '@/components/SocialLinks';
import { specialistInfo, WHATSAPP_LINK } from '@/data/links';

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

export default function AboutPage() {
  return (
    <div className="beams-background">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Clareza, método e IA para transformar{' '}
                <span className="gradient-text">marketing em receita</span>.
              </h1>
              
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-12 slide-in-left delay-200">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Faço negócios venderem com previsibilidade: estruturo tráfego pago, crio páginas que convertem e implemento automações com IA. Sem promessas fáceis, com governança, relatórios claros e foco no resultado.
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-1 slide-in-left delay-100">
                <div className="bg-card border border-border rounded-2xl p-6 sticky top-24 interactive-card">
                  <div className="relative w-40 h-48 mx-auto mb-4 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 blur-xl" />
                    <img 
                      src={giovannePhoto} 
                      alt={`${specialistInfo.fullName} - ${specialistInfo.title}`}
                      className="relative w-full h-full object-cover object-top"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-2">{specialistInfo.name}</h2>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {specialistInfo.title}
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap mb-4">
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary scale-in delay-300">
                      Meta Partner
                    </div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary scale-in delay-400">
                      Google Partner
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="border-t border-border pt-4">
                    <h4 className="text-xs font-medium text-muted-foreground text-center mb-3">Redes sociais</h4>
                    <SocialLinks variant="default" size="sm" className="justify-center" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 slide-in-right delay-200">
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
            <div className="mb-16 fade-in delay-300">
              <h3 className="text-2xl font-semibold mb-6">Qualificações</h3>
              <div className="space-y-4 stagger-children">
                {qualifications.map((qual, index) => (
                  <div key={qual} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl slide-in-left interactive-card" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="fade-in delay-400">
              <h3 className="text-2xl font-semibold mb-6">Valores</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
                {values.map((value, index) => (
                  <div key={value.title} className="p-4 bg-card border border-border rounded-xl slide-in-right interactive-card" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 scale-in" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center scale-in delay-500">
              <h3 className="text-2xl font-semibold mb-4 fade-in">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6 fade-in delay-100">
                Vamos conversar sobre como posso ajudar seu negócio a crescer.
              </p>
              <div className="scale-in delay-200">
                <CTAButton size="xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

