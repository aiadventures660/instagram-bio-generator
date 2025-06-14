
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AestheticBios from "./pages/AestheticBios";
import FunnyBios from "./pages/FunnyBios";
import BusinessBios from "./pages/BusinessBios";
import AIBioGeneratorPage from "./pages/AIBioGeneratorPage";
import CoolBioIdeas from "./pages/CoolBioIdeas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aesthetic-bios" element={<AestheticBios />} />
          <Route path="/funny-bios" element={<FunnyBios />} />
          <Route path="/business-bios" element={<BusinessBios />} />
          <Route path="/ai-bio-generator" element={<AIBioGeneratorPage />} />
          <Route path="/cool-instagram-bio-ideas" element={<CoolBioIdeas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
