import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  MenuIcon, XIcon, HomeIcon, BriefcaseIcon, BuildingIcon, 
  BookOpenIcon, HelpCircleIcon, UserIcon
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

interface SharedNavbarProps {
  currentPage: "institucional" | "freelancer" | "empresa";
}

const SharedNavbar: React.FC<SharedNavbarProps> = ({ currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <rect
                    x="6"
                    y="6"
                    width="20"
                    height="20"
                    rx="5"
                    className="fill-primary"
                  />
                  <path
                    d="M15 12L20 16L15 20V12Z"
                    fill="white"
                  />
                </svg>
                <span className="text-xl font-bold text-foreground">Lumpic</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/">
                <div className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  currentPage === "institucional" ? "text-primary" : "text-foreground"
                }`}>
                  {t('nav.home')}
                </div>
              </Link>
              <Link href="/freelancer">
                <div className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  currentPage === "freelancer" ? "text-primary" : "text-foreground"
                }`}>
                  {t('nav.freelancer')}
                </div>
              </Link>
              <Link href="/empresa">
                <div className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  currentPage === "empresa" ? "text-primary" : "text-foreground"
                }`}>
                  {t('nav.business')}
                </div>
              </Link>
              <div className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer">
                Blog
              </div>
              <div className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer">
                {t('footer.help')}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <LanguageSwitcher />
                
                <Link href="/login">
                  <div className="text-sm font-medium text-foreground px-3 py-2 rounded-md transition-colors hover:bg-muted cursor-pointer">
                    {t('nav.login')}
                  </div>
                </Link>
                <Link href="/cadastro">
                  <div className="text-sm font-medium bg-primary text-primary-foreground px-3 py-2 rounded-md transition-colors hover:bg-primary/90 cursor-pointer">
                    {t('nav.signup')}
                  </div>
                </Link>
              </div>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground"
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
        <div className="md:hidden bg-card/95 backdrop-blur-md overflow-hidden transition-all duration-300">
          <div className="px-4 py-6 space-y-5">
            <Link href="/">
              <div 
                className={`block text-center text-base font-medium py-3 rounded-md transition-colors cursor-pointer ${
                  currentPage === "institucional" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </div>
            </Link>
            <Link href="/freelancer">
              <div 
                className={`block text-center text-base font-medium py-3 rounded-md transition-colors cursor-pointer ${
                  currentPage === "freelancer" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.freelancer')}
              </div>
            </Link>
            <Link href="/empresa">
              <div 
                className={`block text-center text-base font-medium py-3 rounded-md transition-colors cursor-pointer ${
                  currentPage === "empresa" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.business')}
              </div>
            </Link>
            <div 
              className="block text-center text-base font-medium text-foreground py-3 rounded-md hover:bg-muted transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </div>
            <div 
              className="block text-center text-base font-medium text-foreground py-3 rounded-md hover:bg-muted transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('footer.help')}
            </div>
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <div className="flex justify-center py-2">
                <LanguageSwitcher />
              </div>
              
              <Link href="/login">
                <div 
                  className="block text-center text-base font-medium text-foreground py-3 rounded-md border border-border hover:bg-muted transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.login')}
                </div>
              </Link>
              <Link href="/cadastro">
                <div 
                  className="block text-center text-base font-medium bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.signup')}
                </div>
              </Link>
            </div>
          </div>
        </div>
        )}
    </header>

    {/* Mobile Bottom Navigation - App Style */}
    {isMobile && (
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 md:hidden">
        <div className="flex justify-around">
          <Link href="/">
            <div className={`flex flex-col items-center py-3 px-2 ${
              currentPage === "institucional" ? "text-primary" : "text-muted-foreground"
            }`}>
              <HomeIcon className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('nav.home_short')}</span>
            </div>
          </Link>
          
          <Link href="/freelancer">
            <div className={`flex flex-col items-center py-3 px-2 ${
              currentPage === "freelancer" ? "text-primary" : "text-muted-foreground"
            }`}>
              <BriefcaseIcon className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('nav.freelancer_short')}</span>
            </div>
          </Link>
          
          <Link href="/empresa">
            <div className={`flex flex-col items-center py-3 px-2 ${
              currentPage === "empresa" ? "text-primary" : "text-muted-foreground"
            }`}>
              <BuildingIcon className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('nav.business_short')}</span>
            </div>
          </Link>
          
          <div className="flex flex-col items-center py-3 px-2 text-muted-foreground">
            <BookOpenIcon className="h-5 w-5 mb-1" />
            <span className="text-xs">Blog</span>
          </div>
          
          <Link href="/login">
            <div className="flex flex-col items-center py-3 px-2 text-muted-foreground">
              <UserIcon className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('nav.account')}</span>
            </div>
          </Link>
        </div>
      </nav>
    )}
    </>
  );
};

export default SharedNavbar;