import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const solutions = [
  { name: 'Geração de Leads', href: '/solucoes/geracao-de-leads-trafego-pago' },
  { name: 'E-commerce', href: '/solucoes/ecommerce-trafego-pago' },
  { name: 'Landing Pages', href: '/solucoes/landing-pages' },
  { name: 'Google Meu Negócio', href: '/solucoes/google-meu-negocio' },
  { name: 'Inteligência Artificial', href: '/solucoes/inteligencia-artificial' },
];

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

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

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-semibold text-lg mb-4 inline-block">
              Giovanne
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Gestor de tráfego e consultor de IA. +30 negócios atendidos, +R$ 1MM em mídia gerenciada.
            </p>
            
            {/* Social Links */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-3">Siga-me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-[22px] h-[22px]" />
                  </a>
                ))}
                <a 
                  href="https://www.threads.com/@ogiovannemorais"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Threads"
                >
                  <ThreadsIcon className="w-[22px] h-[22px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link 
                    to={solution.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (16) 98803-7193
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ogiovannemorais@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  ogiovannemorais@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Partner Badges */}
            <div className="mt-6 flex gap-4">
              <div className="px-3 py-1.5 bg-secondary rounded text-xs font-medium text-muted-foreground">
                Meta Partner
              </div>
              <div className="px-3 py-1.5 bg-secondary rounded text-xs font-medium text-muted-foreground">
                Google Partner
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Giovanne. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: 42.434.651/0001-30
          </p>
        </div>
      </div>
    </footer>
  );
}
