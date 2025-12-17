import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import Sobre from "./pages/sobre";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { LeadGenerationPage } from "./pages/solutions/LeadGenerationPage";
import { EcommercePage } from "./pages/solutions/EcommercePage";
import { LandingPagesPage } from "./pages/solutions/LandingPagesPage";
import { GoogleBusinessPage } from "./pages/solutions/GoogleBusinessPage";
import { AIPage } from "./pages/solutions/AIPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import Links from "./pages/links";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
           <Route path="/links" element={<links />} />
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/solucoes/geracao-de-leads-trafego-pago" element={<LeadGenerationPage />} />
                <Route path="/solucoes/ecommerce-trafego-pago" element={<EcommercePage />} />
                <Route path="/solucoes/landing-pages" element={<LandingPagesPage />} />
                <Route path="/solucoes/google-meu-negocio" element={<GoogleBusinessPage />} />
                <Route path="/solucoes/inteligencia-artificial" element={<AIPage />} />
                <Route path="/politica-privacidade" element={<PrivacyPage />} />
                <Route path="/termos" element={<TermsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
