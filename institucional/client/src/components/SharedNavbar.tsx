import { useState } from "react";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  currentPage: "institucional" | "empresa" | "freelancer";
}

export default function SharedNavbar({ currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Função para determinar a URL de destino com base na página atual
  const getUrl = (target: string) => {
    if (currentPage === "institucional") {
      return target === "empresa" ? "/empresa" : "/freelancer";
    } else if (currentPage === "empresa") {
      return target === "institucional" ? "/" : "/freelancer";
    } else { // freelancer
      return target === "institucional" ? "/" : "/empresa";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-primary font-bold text-2xl">Clip</span>
            <span className="text-foreground font-bold text-2xl">Up</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={currentPage === "institucional" ? "#" : getUrl("institucional")}
              className={`text-${currentPage === "institucional" ? "primary font-medium" : "muted-foreground hover:text-foreground"} transition-colors`}
            >
              Início
            </Link>
            <Link 
              href={currentPage === "empresa" ? "#" : getUrl("empresa")} 
              className={`text-${currentPage === "empresa" ? "primary font-medium" : "muted-foreground hover:text-foreground"} transition-colors`}
            >
              Para Empresas
            </Link>
            <Link 
              href={currentPage === "freelancer" ? "#" : getUrl("freelancer")}
              className={`text-${currentPage === "freelancer" ? "primary font-medium" : "muted-foreground hover:text-foreground"} transition-colors`}
            >
              Para Freelancers
            </Link>
          </nav>
          
          {/* Authentication/Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="border border-input hover:bg-muted px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Entrar
            </button>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              {currentPage === "empresa" ? "Contratar" : currentPage === "freelancer" ? "Criar Conta" : "Registrar"}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-muted">
          <div className="px-4 py-3 space-y-2">
            <Link 
              href={currentPage === "institucional" ? "#" : getUrl("institucional")}
              className={`block py-2 px-3 rounded-lg ${currentPage === "institucional" ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href={currentPage === "empresa" ? "#" : getUrl("empresa")} 
              className={`block py-2 px-3 rounded-lg ${currentPage === "empresa" ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Para Empresas
            </Link>
            <Link 
              href={currentPage === "freelancer" ? "#" : getUrl("freelancer")}
              className={`block py-2 px-3 rounded-lg ${currentPage === "freelancer" ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Para Freelancers
            </Link>
            <div className="pt-4 pb-1">
              <button className="w-full border border-input hover:bg-muted px-4 py-2 rounded-lg text-sm font-medium transition-colors mb-2">
                Entrar
              </button>
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {currentPage === "empresa" ? "Contratar" : currentPage === "freelancer" ? "Criar Conta" : "Registrar"}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Bottom App Navigation for Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-muted z-50 md:hidden">
          <div className="flex justify-around py-2">
            <Link 
              href={currentPage === "institucional" ? "#" : getUrl("institucional")}
              className="flex flex-col items-center py-1 px-3"
            >
              <HomeIcon className={`h-6 w-6 ${currentPage === "institucional" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-xs ${currentPage === "institucional" ? "text-primary" : "text-muted-foreground"}`}>Início</span>
            </Link>
            <Link 
              href={currentPage === "empresa" ? "#" : getUrl("empresa")}
              className="flex flex-col items-center py-1 px-3"
            >
              <BuildingIcon className={`h-6 w-6 ${currentPage === "empresa" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-xs ${currentPage === "empresa" ? "text-primary" : "text-muted-foreground"}`}>Empresas</span>
            </Link>
            <Link 
              href={currentPage === "freelancer" ? "#" : getUrl("freelancer")}
              className="flex flex-col items-center py-1 px-3"
            >
              <UserIcon className={`h-6 w-6 ${currentPage === "freelancer" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-xs ${currentPage === "freelancer" ? "text-primary" : "text-muted-foreground"}`}>Freelancers</span>
            </Link>
            <Link 
              href="/entrar"
              className="flex flex-col items-center py-1 px-3"
            >
              <LogInIcon className="h-6 w-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Entrar</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Icons
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}