import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/context";
import Index from "./pages/Index";
import Offer from "./pages/Offer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RedotPayPurchase from "./pages/RedotPayPurchase";
import PaymentSuccess from "./pages/PaymentSuccess";  // Добавьте импорт
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/redotpay-purchase" element={<RedotPayPurchase />} />
            <Route path="/payment-success" element={<PaymentSuccess />} /> {/* Страница успешной оплаты */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

