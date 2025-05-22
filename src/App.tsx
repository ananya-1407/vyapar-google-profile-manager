
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import GoogleLogin from "./pages/GoogleLogin";
import BusinessLayout from "./pages/BusinessLayout";
import BusinessDetails from "./pages/BusinessDetails";
import CustomerInteractions from "./pages/CustomerInteractions";
import GoogleInsights from "./pages/GoogleInsights";
import NotFound from "./pages/NotFound";
import BusinessSelection from "./pages/BusinessSelection"; // Import the BusinessSelection component

const queryClient = new QueryClient();

// Mock authentication state - in a real app, this would come from your auth provider
const isLoggedIn = () => {
  // This is a placeholder. In a real app, check local storage, cookies, or auth context
  return localStorage.getItem("isLoggedIn") === "true";
};

// Mock function to get default business ID
const getDefaultBusinessId = () => {
  // In a real app, get this from an API or local storage
  return "1"; // Default to the first business
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              isLoggedIn() ? 
                <Navigate to={`/business/${getDefaultBusinessId()}/details`} replace /> : 
                <Index />
            } 
          />
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/select-business" element={<BusinessSelection />} /> {/* Add route for business selection */}
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
