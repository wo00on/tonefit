import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import LanguageToggle from "@/components/LanguageToggle";
import Home from "@/pages/Home";
import Results from "@/pages/Results";
import ColorGuidePage from "@/pages/ColorGuidePage";
import Quiz from "@/pages/Quiz";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/color-guide" component={ColorGuidePage} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/results/:colorType" component={Results} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-gray-50 font-korean">
            <Navigation />
            <LanguageToggle />
            <Toaster />
            <Router />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
