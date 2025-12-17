import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
