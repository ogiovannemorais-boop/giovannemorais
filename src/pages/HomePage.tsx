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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Seu crescimento não pode depender de{' '}
                <span className="gradient-text">sorte</span>, ele precisa de{' '}
                <span className="gradient-text">método</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Tráfego pago, landing pages e automações de IA com governança e foco em ROI.
              </p>
              <CTAButton size="xl" />
            </div>

            {/* Hero Image - Artistic composition */}
            <div className="relative animate-fade-in delay-200 hidden lg:block">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background glow effects */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-light/15 rounded-full blur-3xl" />
                
                {/* Image container with artistic shape */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary-light/20 rounded-[2rem] rounded-bl-[4rem] rounded-tr-[4rem]" />
                  <div className="relative rounded-[2rem] rounded-bl-[4rem] rounded-tr-[4rem] overflow-hidden aspect-[3/4]">
                    <img 
                      src={giovannePhoto} 
                      alt={`${specialistInfo.fullName} - ${specialistInfo.title}`}
                      className="w-full h-full object-cover object-top scale-105"
                      loading="lazy"
                    />
                    {/* Overlay gradient for artistic effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary-light/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border/50 bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">+30</div>
              <p className="text-muted-foreground">negócios atendidos</p>
            </div>
            <div className="animate-fade-in delay-100">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">+R$ 1MM</div>
              <p className="text-muted-foreground">em mídia gerenciada</p>
            </div>
            <div className="animate-fade-in delay-200">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={solution.href}
              title={solution.title}
              description={solution.description}
              href={solution.href}
              icon={solution.icon}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <div
              key={diff.title}
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
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
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={caseItem.client}
              client={caseItem.client}
              challenge={caseItem.challenge}
              strategy={caseItem.strategy}
              results={caseItem.results}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </Section>

      {/* Blog Preview */}
      <Section variant="card">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Blog</h2>
            <p className="text-muted-foreground">Conteúdo educativo para o seu negócio crescer.</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/blog">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="relative bg-card border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5" />
          <div className="relative z-10 max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos mudar a realidade do seu negócio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agende uma conversa gratuita e descubra como podemos acelerar seus resultados.
            </p>
            <CTAButton size="xl" />
          </div>
        </div>
      </Section>
    </div>
  );
}
