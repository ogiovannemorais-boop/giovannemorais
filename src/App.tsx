import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { solutionsRoutes } from "@/routes/solutions.routes";
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
