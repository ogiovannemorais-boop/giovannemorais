import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { specialistInfo, WHATSAPP_LINK } from '@/data/links';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-semibold text-lg mb-4 inline-block">
              {specialistInfo.name}
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Especialista em mídia paga e performance para e-commerce. Método validado para escalar vendas com organização e lucro.
            </p>
            
            {/* Social Links */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-3">Redes sociais</h4>
              <SocialLinks variant="default" size="md" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/politica-privacidade"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  to="/termos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
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
                  {specialistInfo.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${specialistInfo.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {specialistInfo.email}
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
            © {new Date().getFullYear()} {specialistInfo.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: {specialistInfo.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
