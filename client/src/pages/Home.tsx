import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import ServicesShowcase from "@/components/ServicesShowcase";
import EarningsCalculator from "@/components/EarningsCalculator";
import BlinkCurrency from "@/components/BlinkCurrency";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <ServicesShowcase />
        <EarningsCalculator />
        <BlinkCurrency />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      
      {/* Floating CTA Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-primary/20">
          <PlusIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
