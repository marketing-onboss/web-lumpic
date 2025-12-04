import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import EmpresaPage from "@/pages/EmpresaPage";
import FreelancerPage from "@/pages/FreelancerPage";
import GettingStarted from "@/pages/GettingStarted";
import VideoTips from "@/pages/VideoTips";
import PaymentPolicy from "@/pages/PaymentPolicy";
import Help from "@/pages/Help";
import Community from "@/pages/Community";
import Hiring from "@/pages/Hiring";
import Benefits from "@/pages/Benefits";
import Quality from "@/pages/Quality";
import Enterprise from "@/pages/Enterprise";
import API from "@/pages/API";
import Cookies from "@/pages/Cookies";
import Referral from "@/pages/Referral";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
// ThemeProvider is provided at the application root (main.tsx)
import { LeadCaptureProvider, useLeadCaptureContext } from "@/contexts/LeadCaptureContext";
import LeadCaptureModal from "@/components/LeadCaptureModal";
// Frontend now posts leads to server endpoint `/api/leads`

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/empresa" component={EmpresaPage} />
      <Route path="/freelancer" component={FreelancerPage} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route path="/video-tips" component={VideoTips} />
      <Route path="/payment-policy" component={PaymentPolicy} />
      <Route path="/help" component={Help} />
      <Route path="/community" component={Community} />
      <Route path="/hiring" component={Hiring} />
      <Route path="/benefits" component={Benefits} />
      <Route path="/quality" component={Quality} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/api" component={API} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/referral" component={Referral} />
      <Route path="/contato" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LeadCaptureProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Router />
          <Toaster />
          <LeadCaptureModalWrapper />
        </div>
      </LeadCaptureProvider>
    </QueryClientProvider>
  );
}

function LeadCaptureModalWrapper() {
  const { isModalOpen, closeModal } = useLeadCaptureContext();

  const handleSuccess = async (leadData: any) => {
    try {
      const resp = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Server error: ${resp.status} ${text}`);
      }

      console.log('Lead forwarded to server /api/leads:', leadData);
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
    }
  };

  return (
    <LeadCaptureModal
      isOpen={isModalOpen}
      onClose={closeModal}
      onSuccess={handleSuccess}
    />
  );
}

export default App;
