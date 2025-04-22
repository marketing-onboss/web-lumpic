import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-primary font-bold text-2xl cursor-pointer">Clip</span>
                <span className="text-foreground font-bold text-2xl cursor-pointer">Up</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
              Como Funciona
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
              Serviços
            </a>
            <a href="#earnings" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
              Ganhos
            </a>
            <a href="#perguntas" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
              FAQ
            </a>
            <Button variant="default" size="sm">Entrar</Button>
            <Button variant="outline" size="sm">Criar Conta</Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button 
              type="button" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#como-funciona" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#servicos" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#earnings" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ganhos
            </a>
            <a 
              href="#perguntas" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="default" className="justify-center">Entrar</Button>
              <Button variant="outline" className="justify-center">Criar Conta</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
