import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

// WhatsApp CTA Link
export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

// Specialist Information
export const specialistInfo = {
  name: 'Giovanne',
  fullName: 'Giovanne Morais',
  title: 'Gestor de Tráfego e Consultor de IA',
  bio: 'Gestor de tráfego e consultor de IA. +30 negócios atendidos, +R$ 1MM em mídia gerenciada.',
  email: 'ogiovannemorais@gmail.com',
  phone: '(16) 98803-7193',
  cnpj: '42.434.651/0001-30',
};

// Social Media Links
export const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/giovanne-morais-ab5b47349/', 
    icon: Linkedin 
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/ogiovannemorais/', 
    icon: Instagram 
  },
  { 
    name: 'X', 
    href: 'https://x.com/ogiovannemorais', 
    icon: Twitter 
  },
  { 
    name: 'YouTube', 
    href: 'https://www.youtube.com/@OGiovanneMorais', 
    icon: Youtube 
  },
  { 
    name: 'Threads', 
    href: 'https://www.threads.com/@ogiovannemorais', 
    icon: null // Custom icon handled separately
  },
];

// Solutions Data
export const solutions = [
  { 
    name: 'Geração de Leads | Tráfego Pago', 
    shortName: 'Geração de Leads',
    href: '/solucoes/geracao-de-leads' 
  },
  { 
    name: 'E-commerce | Tráfego Pago', 
    shortName: 'E-commerce',
    href: '/solucoes/ecommerce' 
  },
  { 
    name: 'Criação de Páginas (Landing Page)', 
    shortName: 'Landing Pages',
    href: '/solucoes/landing-pages' 
  },
  { 
    name: 'Google Meu Negócio', 
    shortName: 'Google Meu Negócio',
    href: '/solucoes/google-meu-negocio' 
  },
  { 
    name: 'Inteligência Artificial para Negócios', 
    shortName: 'Inteligência Artificial',
    href: '/solucoes/inteligencia-artificial' 
  },
  {
    name: 'Consultoria Estratégica',
    shortName: 'Consultoria Estratégica',
    href: '/solucoes/consultoria-estrategica',
  },
];

// Navigation Links
export const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre mim', href: '/sobre' },
  { name: 'Blog', href: '/blog' },
];

// Footer Links
export const footerLinks = {
  company: [
    { name: 'Sobre mim', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Termos de Uso', href: '/termos-de-uso' },
  ],
};
