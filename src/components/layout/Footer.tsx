import { WHATSAPP_LINK, specialistInfo } from '@/data/links';

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 md:px-12 py-10 lg:pl-32 xl:pl-40 text-sm text-foreground/50">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <p>
          <span className="text-foreground font-bold">Giovanne Morais</span>{' '}
          · Mídia paga, performance e estratégia digital
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/ogiovannemorais/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a href="/politica-privacidade" className="hover:text-foreground transition-colors">
            Privacidade
          </a>
          <a href="/termos" className="hover:text-foreground transition-colors">
            Termos
          </a>
          <a href="/gestor-trafego-franca" className="hover:text-foreground transition-colors">
            Gestor de tráfego em Franca
          </a>
          <a href="/empresas" className="hover:text-foreground transition-colors">
            Para empresas
          </a>
          <a href="/ecommerce" className="hover:text-foreground transition-colors">
            Para e-commerce
          </a>
        </p>
      </div>
      <p className="mt-6 text-xs text-foreground/30">
        © {new Date().getFullYear()} {specialistInfo.fullName} · CNPJ {specialistInfo.cnpj}
      </p>
    </footer>
  );
}

export default Footer;
