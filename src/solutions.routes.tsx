import LeadGenerationPage from "@/pages/solutions/LeadGenerationPage";
import EcommercePage from "@/pages/solutions/EcommercePage";
import LandingPagesPage from "@/pages/solutions/LandingPagesPage";
import GoogleBusinessPage from "@/pages/solutions/GoogleBusinessPage";
import AIPage from "@/pages/solutions/AIPage";

export const solutionsRoutes = [
  {
    path: "/solucoes/geracao-de-leads-trafego-pago",
    element: <LeadGenerationPage />,
  },
  {
    path: "/solucoes/ecommerce-trafego-pago",
    element: <EcommercePage />,
  },
  {
    path: "/solucoes/landing-pages",
    element: <LandingPagesPage />,
  },
  {
    path: "/solucoes/google-meu-negocio",
    element: <GoogleBusinessPage />,
  },
  {
    path: "/solucoes/inteligencia-artificial",
    element: <AIPage />,
  },
];
