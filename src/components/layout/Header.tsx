import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const solutions = [
  { name: 'Geração de Leads | Tráfego Pago', href: '/solucoes/geracao-de-leads-trafego-pago' },
  { name: 'E-commerce | Tráfego Pago', href: '/solucoes/ecommerce-trafego-pago' },
  { name: 'Criação de Páginas (Landing Page)', href: '/solucoes/landing-pages' },
  { name: 'Google Meu Negócio', href: '/solucoes/google-meu-negocio' },
  { name: 'Inteligência Artificial para Negócios', href: '/solucoes/inteligencia-artificial' },
];

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionActive = solutions.some(s => location.pathname === s.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Giovanne</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive('/') ? "text-primary" : "text-muted-foreground"
              )}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive('/sobre') ? "text-primary" : "text-muted-foreground"
              )}
            >
              Sobre mim
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                  isSolutionActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                Soluções
                <ChevronDown className={cn("w-4 h-4 transition-transform", solutionsOpen && "rotate-180")} />
              </button>
              
              {solutionsOpen && (
                <>
                  <div 
                    className="fixed inset-0" 
                    onClick={() => setSolutionsOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl py-2 z-50">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        to={solution.href}
                        onClick={() => setSolutionsOpen(false)}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors hover:bg-secondary",
                          isActive(solution.href) ? "text-primary bg-secondary" : "text-foreground"
                        )}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <Link 
              to="/blog" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive('/blog') ? "text-primary" : "text-muted-foreground"
              )}
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar diagnóstico gratuito
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive('/') ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                )}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive('/sobre') ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                )}
              >
                Sobre mim
              </Link>
              
              {/* Mobile Solutions */}
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Soluções</span>
              </div>
              {solutions.map((solution) => (
                <Link
                  key={solution.href}
                  to={solution.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-6 py-2.5 rounded-lg text-sm transition-colors",
                    isActive(solution.href) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {solution.name}
                </Link>
              ))}
              
              <Link 
                to="/blog" 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive('/blog') ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                )}
              >
                Blog
              </Link>
              
              <div className="px-4 pt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Agendar diagnóstico gratuito
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
