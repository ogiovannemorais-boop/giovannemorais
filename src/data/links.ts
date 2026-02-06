import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

// WhatsApp CTA Link
export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio";

// Specialist Information
export const specialistInfo = {
  name: 'Giovanne',
  fullName: 'Giovanne Morais',
  title: 'Gestor de Performance para E-commerce',
  bio: 'Especialista em mídia paga e performance para e-commerce. Método validado para escalar vendas com organização e lucro.',
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

// Navigation Links (simplified for landing page)
export const navLinks = [
  { name: 'Início', href: '/' },
];

// Solutions Data (kept for backward compatibility)
export const solutions: { name: string; shortName: string; href: string }[] = [];

// Footer Links
export const footerLinks = {
  company: [
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
  ],
};
