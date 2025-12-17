import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { LeadGenerationPage } from "./pages/solutions/LeadGenerationPage";
import { EcommercePage } from "./pages/solutions/EcommercePage";
import { LandingPagesPage } from "./pages/solutions/LandingPagesPage";
import { GoogleBusinessPage } from "./pages/solutions/GoogleBusinessPage";
import { AIPage } from "./pages/solutions/AIPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import LinksPage from "./pages/LinksPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={
            <Layout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sobre" element={<AboutPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/:slug" element={<BlogPostPage />} />

    {solutionsRoutes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
      />
    ))}

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
