import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ConsentProvider } from "@/contexts/ConsentContext";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsLoader from "@/lib/Analytics";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ConsentProvider>
        <ThemeProvider defaultTheme="dark">
          {/* Analytics loader will initialize only after consent */}
          <AnalyticsLoader />
          <App />
          <CookieBanner />
        </ThemeProvider>
      </ConsentProvider>
    </LanguageProvider>
  </QueryClientProvider>
);
