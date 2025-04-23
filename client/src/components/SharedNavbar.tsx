import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MenuIcon, XIcon } from "lucide-react";

interface SharedNavbarProps {
  currentPage: "institucional" | "freelancer" | "empresa";
}

const SharedNavbar = ({ currentPage }: SharedNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
            <a className="flex items-center space-x-2">
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
              <span className="text-xl font-bold text-foreground">ClipUp</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === "institucional" ? "text-primary" : "text-foreground"
              }`}>
                Página Inicial
              </a>
            </Link>
            <Link href="/freelancer">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === "freelancer" ? "text-primary" : "text-foreground"
              }`}>
                Para Freelancers
              </a>
            </Link>
            <Link href="/empresa">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === "empresa" ? "text-primary" : "text-foreground"
              }`}>
                Para Empresas
              </a>
            </Link>
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Blog
            </a>
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Ajuda
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/login">
                <a className="text-sm font-medium text-foreground px-3 py-2 rounded-md transition-colors hover:bg-muted">
                  Entrar
                </a>
              </Link>
              <Link href="/cadastro">
                <a className="text-sm font-medium bg-primary text-primary-foreground px-3 py-2 rounded-md transition-colors hover:bg-primary/90">
                  Cadastrar
                </a>
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
              <a 
                className={`block text-center text-base font-medium py-3 rounded-md transition-colors ${
                  currentPage === "institucional" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Página Inicial
              </a>
            </Link>
            <Link href="/freelancer">
              <a 
                className={`block text-center text-base font-medium py-3 rounded-md transition-colors ${
                  currentPage === "freelancer" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Para Freelancers
              </a>
            </Link>
            <Link href="/empresa">
              <a 
                className={`block text-center text-base font-medium py-3 rounded-md transition-colors ${
                  currentPage === "empresa" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Para Empresas
              </a>
            </Link>
            <a 
              href="#" 
              className="block text-center text-base font-medium text-foreground py-3 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#" 
              className="block text-center text-base font-medium text-foreground py-3 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ajuda
            </a>
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Link href="/login">
                <a 
                  className="block text-center text-base font-medium text-foreground py-3 rounded-md border border-border hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Entrar
                </a>
              </Link>
              <Link href="/cadastro">
                <a 
                  className="block text-center text-base font-medium bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cadastrar
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SharedNavbar;