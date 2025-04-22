import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type SharedNavbarProps = {
  currentPage: "institucional" | "empresa" | "freelancer";
};

export default function SharedNavbar({ currentPage }: SharedNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-muted z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
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
                <span className="text-xl font-bold text-foreground">ClipUp</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <div className={`text-muted-foreground hover:text-foreground transition-colors px-1 py-2 text-sm font-medium cursor-pointer ${currentPage === 'institucional' ? 'text-foreground font-semibold border-b-2 border-primary' : ''}`}>
                Início
              </div>
            </Link>
            <Link href="/empresa">
              <div className={`text-muted-foreground hover:text-foreground transition-colors px-1 py-2 text-sm font-medium cursor-pointer ${currentPage === 'empresa' ? 'text-foreground font-semibold border-b-2 border-primary' : ''}`}>
                Para Empresas
              </div>
            </Link>
            <Link href="/freelancer">
              <div className={`text-muted-foreground hover:text-foreground transition-colors px-1 py-2 text-sm font-medium cursor-pointer ${currentPage === 'freelancer' ? 'text-foreground font-semibold border-b-2 border-primary' : ''}`}>
                Para Freelancers
              </div>
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors px-1 py-2 text-sm font-medium"
                onClick={toggleDropdown}
              >
                <span>Recursos</span>
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg border border-muted py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                    Blog
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                    Tutoriais
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
                    Documentação
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-foreground inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Login/Register buttons and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="#" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Login
            </a>
            <a href="#" className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
              Cadastrar
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-muted">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <div className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${currentPage === 'institucional' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}>
                Início
              </div>
            </Link>
            <Link href="/empresa">
              <div className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${currentPage === 'empresa' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}>
                Para Empresas
              </div>
            </Link>
            <Link href="/freelancer">
              <div className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${currentPage === 'freelancer' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}>
                Para Freelancers
              </div>
            </Link>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-muted">
              Blog
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-muted">
              Tutoriais
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-muted">
              Documentação
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-muted">
            <div className="flex items-center justify-between px-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    ?
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-foreground">Visitante</div>
                  <div className="text-sm font-medium text-muted-foreground">visitante@exemplo.com</div>
                </div>
              </div>
              <div>
                <ThemeToggle />
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-muted">
                Login
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-muted bg-primary/10 text-primary">
                Cadastrar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}