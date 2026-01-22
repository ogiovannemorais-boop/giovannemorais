import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    slug: 'como-reduzir-cpl-trafego-pago',
    title: 'Como reduzir seu CPL em campanhas de tráfego pago',
    excerpt: 'Estratégias práticas para otimizar suas campanhas e pagar menos por lead qualificado. Descubra técnicas avançadas de segmentação e otimização.',
    date: '2024-01-15',
    category: 'Tráfego Pago',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    slug: 'landing-pages-que-convertem',
    title: '7 elementos essenciais de landing pages que convertem',
    excerpt: 'Descubra os componentes que fazem uma landing page gerar resultados reais. Da headline ao CTA, cada elemento importa.',
    date: '2024-01-10',
    category: 'Landing Pages',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
  {
    slug: 'ia-para-pequenos-negocios',
    title: 'IA para pequenos negócios: por onde começar',
    excerpt: 'Um guia prático para implementar inteligência artificial no seu dia a dia sem complicação.',
    date: '2024-01-05',
    category: 'Inteligência Artificial',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    slug: 'google-meu-negocio-guia-completo',
    title: 'Google Meu Negócio: guia completo para dominar buscas locais',
    excerpt: 'Aprenda a otimizar seu perfil e aparecer para clientes que estão procurando seu serviço agora.',
    date: '2024-01-01',
    category: 'SEO Local',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop',
  },
  {
    slug: 'metricas-que-importam-ecommerce',
    title: 'As métricas que realmente importam no e-commerce',
    excerpt: 'Esqueça métricas de vaidade. Foque nos KPIs que movem o ponteiro do seu negócio.',
    date: '2023-12-28',
    category: 'E-commerce',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    slug: 'automacoes-whatsapp-negocios',
    title: 'Automações de WhatsApp que aumentam vendas',
    excerpt: 'Como criar fluxos automatizados que qualificam leads e fecham vendas enquanto você dorme.',
    date: '2023-12-20',
    category: 'Automação',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
  },
];

export default function BlogPage() {
  return (
    <div className="beams-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Conteúdo educativo sobre tráfego pago, landing pages, IA e crescimento digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden interactive-card slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12 text-center scale-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 fade-in">
              Receba conteúdo exclusivo
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto fade-in delay-100">
              Assine a newsletter e receba dicas práticas de marketing digital diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto slide-in-left delay-200">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 h-12 px-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="lg" className="btn-hover">
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

