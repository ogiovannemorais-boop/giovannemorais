import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, ShoppingCart, Layout, MapPin, Bot, Eye, FileText, TrendingUp, Shield, Sparkles, BarChart3 } from 'lucide-react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

const solutions = [
  {
    icon: Target,
    title: 'Geração de Leads | Tráfego Pago',
    description: 'Leads qualificados todos os dias — sem desperdício de verba.',
    href: '/solucoes/geracao-de-leads-trafego-pago',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce | Tráfego Pago',
    description: 'Campanhas que vendem todos os dias — ROAS crescente e previsível.',
    href: '/solucoes/ecommerce-trafego-pago',
  },
  {
    icon: Layout,
    title: 'Criação de Páginas (Landing Page)',
    description: 'Landing pages que convertem — design bonito com copy que vende.',
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
  },
  {
    slug: 'landing-pages-que-convertem',
    title: '7 elementos essenciais de landing pages que convertem',
    excerpt: 'Descubra os componentes que fazem uma landing page gerar resultados reais.',
    date: '2024-01-10',
  },
  {
    slug: 'ia-para-pequenos-negocios',
    title: 'IA para pequenos negócios: por onde começar',
    excerpt: 'Um guia prático para implementar inteligência artificial no seu dia a dia.',
    date: '2024-01-05',
  },
];

export function HomePage() {
  return (
    <div className="beams-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Seu crescimento não pode depender de{' '}
                <span className="gradient-text">sorte</span> — ele precisa de{' '}
                <span className="gradient-text">método</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Tráfego pago, landing pages e automações de IA com governança e foco em ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Agendar diagnóstico gratuito
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Quero meu plano de crescimento
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative animate-fade-in delay-200 hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl blur-3xl" />
                <div className="relative bg-card border border-border rounded-3xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-6xl font-bold gradient-text">G</span>
                    </div>
                    <p className="text-lg font-medium">Giovanne</p>
                    <p className="text-sm text-muted-foreground">Gestor de Tráfego & IA</p>
                  </div>
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções para o seu negócio</h2>
            <p className="text-lg text-muted-foreground">
              Estratégias personalizadas para cada etapa do seu crescimento digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={solution.href}
                to={solution.href}
                className={`group bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que me escolher?</h2>
            <p className="text-lg text-muted-foreground">
              Diferenciais que garantem resultados reais para o seu negócio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((diff, index) => (
              <div
                key={diff.title}
                className={`flex items-start gap-4 p-6 bg-card border border-border rounded-xl animate-fade-in`}
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
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cases de sucesso</h2>
            <p className="text-lg text-muted-foreground">
              Resultados reais de clientes que confiaram no meu trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <div
                key={caseItem.client}
                className={`bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-sm font-medium text-primary mb-2">{caseItem.client}</div>
                <h3 className="font-semibold mb-3">{caseItem.challenge}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Estratégia:</strong> {caseItem.strategy}
                </p>
                <div className="space-y-2">
                  {caseItem.results.map((result) => (
                    <div key={result} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
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
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`group bg-card border border-border rounded-2xl overflow-hidden card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-secondary" />
                <div className="p-6">
                  <time className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                  <h3 className="font-semibold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5" />
            <div className="relative z-10 max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vamos mudar a realidade do seu negócio?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma conversa gratuita e descubra como podemos acelerar seus resultados.
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
