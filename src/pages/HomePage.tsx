import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, ShoppingCart, Layout, MapPin, Bot, Eye, FileText, TrendingUp, Shield, Sparkles, BarChart3 } from 'lucide-react';
import giovannePhoto from '@/assets/giovanne-photo.png';
import { CTAButton } from '@/components/CTAButton';
import { Section } from '@/components/Section';
import { SolutionCard } from '@/components/SolutionCard';
import { CaseCard } from '@/components/CaseCard';
import { BlogCard } from '@/components/BlogCard';
import { WHATSAPP_LINK, specialistInfo } from '@/data/links';

const solutionsData = [
  {
    icon: Target,
    title: 'Geração de Leads | Tráfego Pago',
    description: 'Leads qualificados todos os dias, sem desperdício de verba.',
    href: '/solucoes/geracao-de-leads-trafego-pago',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce | Tráfego Pago',
    description: 'Campanhas que vendem todos os dias, ROAS crescente e previsível.',
    href: '/solucoes/ecommerce-trafego-pago',
  },
  {
    icon: Layout,
    title: 'Criação de Páginas (Landing Page)',
    description: 'Landing pages que convertem, design bonito com copy que vende.',
    href: '/solucoes/landing-pages',
  },
  {
    icon: MapPin,
    title: 'Google Meu Negócio',
    description: 'Domine as buscas locais e receba mais ligações e visitas.',
    href: '/solucoes/google-meu-negocio',
  },
  {
    icon: Bot,
    title: 'Inteligência Artificial para Negócios',
    description: 'Automatize processos e reduza custos com IA aplicada.',
    href: '/solucoes/inteligencia-artificial',
  },
];

const differentials = [
  { icon: Eye, title: 'Clareza e governança', description: 'Processos documentados e visíveis' },
  { icon: FileText, title: 'Transparência', description: 'Relatórios completos e acessíveis' },
  { icon: BarChart3, title: 'Relatórios acionáveis', description: 'Dados que viram decisões' },
  { icon: TrendingUp, title: 'Foco em ROI', description: 'Cada real investido é rastreado' },
  { icon: Sparkles, title: 'Integração total', description: 'Mídia + LP + automações + mensuração' },
  { icon: Shield, title: 'LGPD by design', description: 'Conformidade desde o início' },
];

const cases = [
  {
    client: 'Clínica de Estética',
    challenge: 'Alto custo por lead e baixa taxa de comparecimento',
    strategy: 'Funil de captação com nutrição via WhatsApp',
    results: ['CPL reduzido em 62%', 'Taxa de comparecimento 78%', '+140 agendamentos/mês'],
  },
  {
    client: 'E-commerce de Moda',
    challenge: 'ROAS estagnado em 2.5x',
    strategy: 'Campanhas Advantage+ com catálogo otimizado',
    results: ['ROAS de 5.2x', '+180% em receita', 'CPA reduzido em 45%'],
  },
  {
    client: 'Restaurante Local',
    challenge: 'Pouca visibilidade nas buscas locais',
    strategy: 'Otimização GMB + Gestão de avaliações',
    results: ['+320% em visualizações', '+85 avaliações 5⭐', '+40% em ligações'],
  },
];

const blogPosts = [
  {
    slug: 'como-reduzir-cpl-trafego-pago',
    title: 'Como reduzir seu CPL em campanhas de tráfego pago',
    excerpt: 'Estratégias práticas para otimizar suas campanhas e pagar menos por lead qualificado.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    slug: 'landing-pages-que-convertem',
    title: '7 elementos essenciais de landing pages que convertem',
    excerpt: 'Descubra os componentes que fazem uma landing page gerar resultados reais.',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
  {
    slug: 'ia-para-pequenos-negocios',
    title: 'IA para pequenos negócios: por onde começar',
    excerpt: 'Um guia prático para implementar inteligência artificial no seu dia a dia.',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
];

export default function HomePage() {
  return (
    <div className="beams-background">
      {/* Hero Section - Full Width Corporate Premium */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Clean background base */}
        <div className="absolute inset-0 bg-background z-0" />
        
        {/* Premium ambient lighting effects */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/4 right-[15%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] hidden lg:block" />
          <div className="absolute bottom-1/3 right-[25%] w-[400px] h-[400px] bg-primary-light/10 rounded-full blur-[120px] hidden lg:block" />
          <div className="absolute top-1/2 left-[10%] w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
        </div>

        {/* Grid Layout: Text Left | Image Right */}
        <div className="container-custom relative z-10 min-h-screen">
          <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 lg:gap-0">
            
            {/* Left Column - Text Content (always visible, never overlapped) */}
            <div className="relative z-20 py-24 lg:py-0 order-2 lg:order-1">
              <div className="max-w-xl fade-in">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                  Seu crescimento não pode depender de{' '}
                  <span className="gradient-text">sorte</span>, ele precisa de{' '}
                  <span className="gradient-text">método</span>.
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                  Tráfego pago, landing pages e automações de IA com governança e foco em ROI.
                </p>
                
                {/* CTA */}
                <div className="scale-in delay-300">
                  <CTAButton size="xl" />
                </div>
              </div>
            </div>

            {/* Right Column - Specialist Image (hidden on mobile, visible on desktop) */}
            <div className="relative order-1 lg:order-2 hidden lg:flex items-end justify-end h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background z-10" />
              <img 
                src={giovannePhoto} 
                alt={`${specialistInfo.fullName} - ${specialistInfo.title}`}
                className="h-[90%] w-auto max-w-none object-contain object-bottom slide-in-right"
                style={{ 
                  maskImage: 'linear-gradient(to left, black 60%, black 40%, transparent 90%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 60%, black 40%, transparent 90%)'
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border/50 bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center stagger-children">
            <div className="scale-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">+30</div>
              <p className="text-muted-foreground">negócios atendidos</p>
            </div>
            <div className="scale-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">+R$ 1MM</div>
              <p className="text-muted-foreground">em mídia gerenciada</p>
            </div>
            <div className="scale-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100%</div>
              <p className="text-muted-foreground">crescimento consistente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <Section
        title="Soluções para o seu negócio"
        subtitle="Estratégias personalizadas para cada etapa do seu crescimento digital."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={solution.href}
              title={solution.title}
              description={solution.description}
              href={solution.href}
              icon={solution.icon}
              className="slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </Section>

      {/* Differentials */}
      <Section
        title="Por que me escolher?"
        subtitle="Diferenciais que garantem resultados reais para o seu negócio."
        variant="card"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {differentials.map((diff, index) => (
            <div
              key={diff.title}
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl slide-in-right interactive-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 scale-in" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                <diff.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{diff.title}</h3>
                <p className="text-sm text-muted-foreground">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cases */}
      <Section
        title="Cases de sucesso"
        subtitle="Resultados reais de clientes que confiaram no meu trabalho."
      >
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={caseItem.client}
              client={caseItem.client}
              challenge={caseItem.challenge}
              strategy={caseItem.strategy}
              results={caseItem.results}
              className="slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </Section>

      {/* Blog Preview */}
      <Section variant="card">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Blog</h2>
            <p className="text-muted-foreground">Conteúdo educativo para o seu negócio crescer.</p>
          </div>
          <Button variant="outline" asChild className="btn-hover">
            <Link to="/blog">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              className="slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="relative bg-card border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Vamos mudar a realidade do seu negócio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 fade-in delay-100">
              Agende uma conversa gratuita e descubra como podemos acelerar seus resultados.
            </p>
            <div className="scale-in delay-200">
              <CTAButton size="xl" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
