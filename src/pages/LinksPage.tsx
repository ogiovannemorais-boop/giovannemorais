import { Link } from "react-router-dom";
import giovannePhoto from "@/assets/giovanne-photo.png";
import { SocialLinks } from "@/components/SocialLinks";
import { WHATSAPP_LINK, specialistInfo } from "@/data/links";

const links = [
  {
    label: "Agendar diagnóstico gratuito",
    href: WHATSAPP_LINK,
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

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Profile Photo */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20 scale-in">
          <img
            src={giovannePhoto}
            alt={`${specialistInfo.fullName} - ${specialistInfo.title}`}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name */}
        <div className="text-center fade-in delay-100">
          <h1 className="text-xl font-bold text-white">{specialistInfo.fullName}</h1>
          <p className="text-gray-400 text-sm mt-1">Tráfego Pago & Inteligência Artificial</p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3 mt-2 stagger-children">
          {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-xl text-center font-bold text-white transition-all duration-300 btn-hover slide-in-left ${
                  link.primary 
                    ? "bg-primary shadow-lg shadow-primary/30" 
                    : "bg-primary/90"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={index}
                to={link.href}
                className="w-full py-4 px-6 rounded-xl text-center font-bold text-white bg-primary/90 transition-all duration-300 btn-hover slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Social Icons */}
        <div className="fade-in delay-500">
          <SocialLinks 
            variant="light" 
            size="lg" 
            className="justify-center gap-6 mt-6"
          />
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-xs mt-8 fade-in delay-600">
          © {new Date().getFullYear()} {specialistInfo.fullName}
        </p>
      </div>
    </div>
  );
}
