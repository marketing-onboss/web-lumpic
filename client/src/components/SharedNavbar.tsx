import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { 
  MenuIcon, XIcon, HomeIcon, BriefcaseIcon, BuildingIcon, 
  BookOpenIcon, HelpCircleIcon, UserIcon
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSrc from "@/assets/lumpic-logo.png";
import logoLightSrc from "@/assets/lumpic-logo-light.png";

interface SharedNavbarProps {
  currentPage?: string;
}

const SharedNavbar: React.FC<SharedNavbarProps> = ({ currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [, setLocation] = useLocation();
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
  // Handler para CTA com captura de lead
  const handleCadastroCTA = useLeadCapture(() => {
    setMobileMenuOpen(false);
    setLocation('/cadastro');
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-xl py-2"
            : "bg-gradient-to-b from-background/40 to-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-3 md:gap-6 lg:gap-8">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center cursor-pointer flex-shrink-0 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-2xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={isDark ? logoSrc : logoLightSrc}
                    alt="Lumpic"
                    className="h-28 sm:h-32 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300 group-hover:scale-110 -mt-4 md:mt-0"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1">
              <Link href="/">
                <div className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold transition-all duration-200 cursor-pointer group rounded-lg ${
                  currentPage === "institucional" 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:text-primary hover:bg-muted/40"
                }`}>
                  {t('nav.home')}
                  <span className={`absolute bottom-1.5 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-200 ${
                    currentPage === "institucional" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}></span>
                </div>
              </Link>
              <Link href="/freelancer">
                <div className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold transition-all duration-200 cursor-pointer group rounded-lg ${
                  currentPage === "freelancer" 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:text-primary hover:bg-muted/40"
                }`}>
                  {t('nav.freelancer')}
                  <span className={`absolute bottom-1.5 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-200 ${
                    currentPage === "freelancer" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}></span>
                </div>
              </Link>
              <Link href="/empresa">
                <div className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold transition-all duration-200 cursor-pointer group rounded-lg ${
                  currentPage === "empresa" 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:text-primary hover:bg-muted/40"
                }`}>
                  {t('nav.business')}
                  <span className={`absolute bottom-1.5 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-200 ${
                    currentPage === "empresa" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}></span>
                </div>
              </Link>
              <Link href="/contato">
                <div className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold transition-all duration-200 cursor-pointer group rounded-lg ${
                  currentPage === "contact" 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:text-primary hover:bg-muted/40"
                }`}>
                  {t('nav.contact')}
                  <span className={`absolute bottom-1.5 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-200 ${
                    currentPage === "contact" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}></span>
                </div>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-1.5 md:space-x-2 lg:space-x-3 ml-auto">
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                <LanguageSwitcher />
                
                <div className="h-5 w-px bg-gradient-to-b from-border/0 via-border/60 to-border/0"></div>
                
                <a href="https://app.lumpic.com/login" target="_blank" rel="noopener noreferrer">
                  <div className="text-xs font-bold text-primary bg-primary/15 border border-primary/40 px-4 lg:px-5 py-2 rounded-lg transition-all duration-200 hover:bg-primary/25 hover:border-primary/70 cursor-pointer hover:shadow-lg hover:shadow-primary/30">
                    {t('nav.login')}
                  </div>
                </a>
                <div onClick={handleCadastroCTA}>
                  <div className="text-xs font-bold bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground px-4 lg:px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 cursor-pointer hover:scale-105 transform">
                    {t('nav.signup')}
                  </div>
                </div>
              </div>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200 hover:shadow-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-card/98 to-card/95 backdrop-blur-xl overflow-hidden transition-all duration-300 border-t border-border/30 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-8 space-y-4 max-h-96 overflow-y-auto">
            <Link href="/">
              <div 
                className={`block text-center text-sm font-bold py-4 px-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                  currentPage === "institucional" 
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary shadow-md" 
                    : "text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </div>
            </Link>
            <Link href="/freelancer">
              <div 
                className={`block text-center text-sm font-bold py-4 px-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                  currentPage === "freelancer" 
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary shadow-md" 
                    : "text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.freelancer')}
              </div>
            </Link>
            <Link href="/empresa">
              <div 
                className={`block text-center text-sm font-bold py-4 px-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                  currentPage === "empresa" 
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary shadow-md" 
                    : "text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.business')}
              </div>
            </Link>
            <Link href="/contato">
              <div 
                className={`block text-center text-sm font-bold py-4 px-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                  currentPage === "contact" 
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary shadow-md" 
                    : "text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </div>
            </Link>
            
            <div className="flex flex-col space-y-4 pt-6 border-t border-border/40">
              <div className="flex justify-center py-3">
                <LanguageSwitcher />
              </div>
              
              <a href="https://app.lumpic.com/login" target="_blank" rel="noopener noreferrer">
                <div 
                  className="block text-center text-sm font-bold text-foreground py-4 px-4 rounded-2xl border border-primary/30 hover:bg-muted/50 hover:border-primary/60 transition-all duration-200 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.login')}
                </div>
              </a>
              <div onClick={handleCadastroCTA}>
                <div 
                  className="block text-center text-sm font-bold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 px-4 rounded-2xl hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 cursor-pointer"
                >
                  {t('nav.signup')}
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
    </header>

    {/* Mobile Bottom Navigation - App Style */}
    {isMobile && (
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background to-background/95 backdrop-blur-xl border-t border-primary/10 z-50 md:hidden shadow-2xl">
        <div className="flex justify-around items-center px-2">
          <Link href="/">
            <div className={`flex flex-col items-center justify-center py-5 px-3 transition-all duration-200 group ${
              currentPage === "institucional" ? "text-primary" : "text-muted-foreground"
            }`}>
              <div className={`p-3 rounded-2xl transition-all duration-200 ${
                currentPage === "institucional" 
                  ? "bg-gradient-to-br from-primary/30 to-primary/10 text-primary shadow-lg shadow-primary/20" 
                  : "group-hover:bg-muted/60"
              }`}>
                <HomeIcon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold mt-2">{t('nav.home_short')}</span>
            </div>
          </Link>
          
          <Link href="/freelancer">
            <div className={`flex flex-col items-center justify-center py-5 px-3 transition-all duration-200 group ${
              currentPage === "freelancer" ? "text-primary" : "text-muted-foreground"
            }`}>
              <div className={`p-3 rounded-2xl transition-all duration-200 ${
                currentPage === "freelancer" 
                  ? "bg-gradient-to-br from-primary/30 to-primary/10 text-primary shadow-lg shadow-primary/20" 
                  : "group-hover:bg-muted/60"
              }`}>
                <BriefcaseIcon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold mt-2">{t('nav.freelancer_short')}</span>
            </div>
          </Link>
          
          <Link href="/empresa">
            <div className={`flex flex-col items-center justify-center py-5 px-3 transition-all duration-200 group ${
              currentPage === "empresa" ? "text-primary" : "text-muted-foreground"
            }`}>
              <div className={`p-3 rounded-2xl transition-all duration-200 ${
                currentPage === "empresa" 
                  ? "bg-gradient-to-br from-primary/30 to-primary/10 text-primary shadow-lg shadow-primary/20" 
                  : "group-hover:bg-muted/60"
              }`}>
                <BuildingIcon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold mt-2">{t('nav.business_short')}</span>
            </div>
          </Link>
          
          <a href="https://app.lumpic.com/login" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center justify-center py-5 px-3 text-muted-foreground hover:text-foreground transition-all duration-200 group">
              <div className="p-3 rounded-2xl group-hover:bg-muted/60 transition-all duration-200">
                <UserIcon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold mt-2">{t('nav.account')}</span>
            </div>
          </a>
        </div>
      </nav>
    )}
    </>
  );
};

export default SharedNavbar;