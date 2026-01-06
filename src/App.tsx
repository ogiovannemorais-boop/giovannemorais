import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import LinksPage from "@/pages/LinksPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import SolucoesPage from "@/pages/SolucoesPage";
import NotFound from "@/pages/NotFound";

import LeadGenerationPage from "@/pages/solutions/LeadGenerationPage";
import EcommercePage from "@/pages/solutions/EcommercePage";
import LandingPagesPage from "@/pages/solutions/LandingPagesPage";
import GoogleBusinessPage from "@/pages/solutions/GoogleBusinessPage";
import AIPage from "@/pages/solutions/AIPage";
import ConsultoriaEstrategicaPage from "@/pages/solutions/ConsultoriaEstrategicaPage";

import GestorTrafegoPagoFranca from "./pages/GestorTrafegoPagoFranca";

import Layout from "@/components/layout/Layout";

const queryClient = new QueryClient();

const routerBasename = (() => {
  const knownTopLevelPaths = new Set([
    "links",
    "sobre",
    "blog",
    "solucoes",
    "politica-privacidade",
    "termos",
    "gestor-trafego-pago-franca",
  ]);

  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0] ?? "";
  return firstSegment && !knownTopLevelPaths.has(firstSegment) ? `/${firstSegment}` : "/";
})();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Routes>
          {/* Página fora do layout */}
          <Route path="/links" element={<LinksPage />} />

          {/* Layout principal */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* Soluções */}
            <Route path="/solucoes" element={<SolucoesPage />} />
            <Route path="/solucoes/geracao-de-leads-trafego-pago" element={<LeadGenerationPage />} />
            <Route path="/solucoes/ecommerce-trafego-pago" element={<EcommercePage />} />
            <Route path="/solucoes/landing-pages" element={<LandingPagesPage />} />
            <Route path="/solucoes/google-meu-negocio" element={<GoogleBusinessPage />} />
            <Route path="/solucoes/inteligencia-artificial" element={<AIPage />} />
            <Route path="/solucoes/consultoria-estrategica" element={<ConsultoriaEstrategicaPage />} />

            {/* Legais */}
            <Route path="/politica-privacidade" element={<PrivacyPage />} />
            <Route path="/termos" element={<TermsPage />} />

            {/* Páginas de tráfego local (SEO) - não visíveis no menu */}
            <Route path="/gestor-trafego-pago-franca" element={<GestorTrafegoPagoFranca />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
