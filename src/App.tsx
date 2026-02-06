import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import LinksPage from "@/pages/LinksPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import NotFound from "@/pages/NotFound";

import GestorTrafegoPagoFranca from "./pages/GestorTrafegoPagoFranca";

import Layout from "@/components/layout/Layout";

const queryClient = new QueryClient();

const routerBasename = (() => {
  const knownTopLevelPaths = new Set([
    "links",
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

            {/* Legais */}
            <Route path="/politica-privacidade" element={<PrivacyPage />} />
            <Route path="/termos" element={<TermsPage />} />

            {/* Páginas de tráfego local (SEO) */}
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
