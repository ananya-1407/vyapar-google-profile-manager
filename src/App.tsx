
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import GoogleLogin from "./pages/GoogleLogin";
import BusinessSelection from "./pages/BusinessSelection";
import BusinessLayout from "./pages/BusinessLayout";
import BusinessDetails from "./pages/BusinessDetails";
import CustomerInteractions from "./pages/CustomerInteractions";
import GoogleInsights from "./pages/GoogleInsights";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/select-business" element={<BusinessSelection />} />
          <Route path="/business/:businessId" element={<BusinessLayout />}>
            <Route path="details" element={<BusinessDetails />} />
            <Route path="interactions" element={<CustomerInteractions />} />
            <Route path="insights" element={<GoogleInsights />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
