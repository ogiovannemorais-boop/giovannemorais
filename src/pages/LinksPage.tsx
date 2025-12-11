import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import giovannePhoto from "@/assets/giovanne-photo.png";

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.577.878-6.43 2.523-8.483C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.596-1.237 1.238-.075 2.39.034 3.455.286-.065-.762-.274-1.378-.63-1.833-.456-.585-1.18-.88-2.153-.88h-.065c-.747.016-1.369.24-1.848.668l-1.393-1.505c.782-.723 1.836-1.116 3.14-1.17h.105c1.606 0 2.857.538 3.72 1.6.773.949 1.178 2.254 1.205 3.834.463.17.888.378 1.273.624 1.169.746 2.012 1.78 2.436 2.987.556 1.578.556 4.143-1.65 6.306-1.9 1.865-4.246 2.678-7.597 2.7zm-.78-6.24c.096 0 .194-.002.293-.007.967-.052 1.694-.393 2.162-.988.38-.482.636-1.14.766-1.967-1.042-.252-2.128-.356-3.242-.29-1.523.092-2.432.705-2.38 1.644.035.626.47 1.608 2.4 1.608z"/>
  </svg>
);

const links = [
  {
    label: "Agendar diagnóstico gratuito",
    href: "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio",
    external: true,
    primary: true,
  },
  {
    label: "Soluções de Tráfego Pago",
    href: "/solucoes/geracao-de-leads-trafego-pago",
    external: false,
  },
  {
    label: "E-commerce Performance",
    href: "/solucoes/ecommerce-trafego-pago",
    external: false,
  },
  {
    label: "Criação de Landing Pages",
    href: "/solucoes/landing-pages",
    external: false,
  },
  {
    label: "Google Meu Negócio",
    href: "/solucoes/google-meu-negocio",
    external: false,
  },
  {
    label: "Inteligência Artificial para Negócios",
    href: "/solucoes/inteligencia-artificial",
    external: false,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/giovanne-morais-ab5b47349/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ogiovannemorais/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/ogiovannemorais", label: "X (Twitter)" },
  { icon: ThreadsIcon, href: "https://www.threads.com/@ogiovannemorais", label: "Threads" },
  { icon: Youtube, href: "https://www.youtube.com/@OGiovanneMorais", label: "YouTube" },
];

const LinksPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Profile Photo */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
          <img
            src={giovannePhoto}
            alt="Giovanne Morais - Especialista em Tráfego Pago e IA"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-white">Giovanne Morais</h1>
          <p className="text-gray-400 text-sm mt-1">Tráfego Pago & Inteligência Artificial</p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3 mt-2">
          {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-xl text-center font-bold text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02] ${
                  link.primary 
                    ? "bg-primary shadow-lg shadow-primary/30" 
                    : "bg-primary/90"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={index}
                to={link.href}
                className="w-full py-4 px-6 rounded-xl text-center font-bold text-white bg-primary/90 transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <social.icon className="w-[26px] h-[26px]" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} Giovanne Morais
        </p>
      </div>
    </div>
  );
};

export default LinksPage;
