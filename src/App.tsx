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

import GestorTrafegoFranca from "./pages/GestorTrafegoFranca";
import CaptacaoB2B from "./pages/CaptacaoB2B";
import CaptacaoEcommerce from "./pages/CaptacaoEcommerce";
import Destino from "./pages/Destino";
import HomeV2 from "./pages/HomeV2";

import Layout from "@/components/layout/Layout";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

const routerBasename = (() => {
  const knownTopLevelPaths = new Set([
    "links",
    "politica-privacidade",
    "termos",
    "gestor-trafego-franca",
    "gestor-trafego-pago-franca",
    "empresas",
    "ecommerce",
    "destino",
    "home",
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
          {/* Página fora do layout (SEO local — sem header/footer global) */}
          <Route path="/links" element={<LinksPage />} />
          <Route path="/gestor-trafego-franca" element={<GestorTrafegoFranca />} />
          <Route
            path="/gestor-trafego-pago-franca"
            element={<Navigate to="/gestor-trafego-franca" replace />}
          />
          <Route path="/empresas" element={<CaptacaoB2B />} />
          <Route path="/ecommerce" element={<CaptacaoEcommerce />} />
          <Route path="/destino" element={<Destino />} />
          <Route path="/home" element={<HomeV2 />} />

          {/* Layout principal */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            {/* Legais */}
            <Route path="/politica-privacidade" element={<PrivacyPage />} />
            <Route path="/termos" element={<TermsPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
