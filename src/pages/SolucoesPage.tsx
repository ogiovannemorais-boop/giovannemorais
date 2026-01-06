import { Link } from "react-router-dom";
import { ArrowRight, Target, ShoppingCart, Layout, MapPin, Brain } from "lucide-react";

const solutions = [
  {
    title: "Geração de Leads",
    description: "Campanhas de tráfego pago otimizadas para captar leads qualificados e aumentar suas vendas.",
    href: "/solucoes/geracao-de-leads-trafego-pago",
    icon: Target,
  },
  {
    title: "E-commerce",
    description: "Estratégias de tráfego pago específicas para lojas virtuais com foco em conversão.",
    href: "/solucoes/ecommerce-trafego-pago",
    icon: ShoppingCart,
  },
  {
    title: "Landing Pages",
    description: "Páginas de alta conversão desenvolvidas para maximizar seus resultados.",
    href: "/solucoes/landing-pages",
    icon: Layout,
  },
  {
    title: "Google Meu Negócio",
    description: "Otimização completa do seu perfil para dominar as buscas locais.",
    href: "/solucoes/google-meu-negocio",
    icon: MapPin,
  },
  {
    title: "Inteligência Artificial",
    description: "Automações e soluções de IA para potencializar seu marketing digital.",
    href: "/solucoes/inteligencia-artificial",
    icon: Brain,
  },
];

export default function SolucoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossas Soluções
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estratégias personalizadas de marketing digital para acelerar o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                to={solution.href}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
