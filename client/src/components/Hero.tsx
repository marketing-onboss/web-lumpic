import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
              Transforme Seu Talento com Vídeo em <span className="text-primary">Renda Real</span>
            </h1>
            <p className="text-xl text-card-foreground mb-8">
              Mostre seu rosto, compartilhe sua voz. Nós cuidamos do resto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Como Funciona <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-60 h-60 rounded-full bg-primary/20 filter blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-60 h-60 rounded-full bg-secondary/20 filter blur-xl"></div>
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=800&fit=crop" 
                alt="Pessoa gravando um vídeo com smartphone" 
                className="relative z-10 rounded-xl object-cover shadow-2xl w-full"
              />
              
              {/* Floating earnings card */}
              <div className="absolute top-8 -right-12 z-20 bg-card p-4 rounded-lg shadow-xl border border-muted transform rotate-6">
                <p className="text-card-foreground text-sm">Ganhos do mês</p>
                <p className="text-primary font-bold text-xl">R$ 1.240,00</p>
              </div>
              
              {/* Floating video icon */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-card p-3 rounded-full shadow-lg border border-muted">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                  <VideoIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-card rounded-lg p-4 border border-muted">
            <p className="text-muted-foreground text-sm">Vídeos Entregues</p>
            <p className="text-foreground font-bold text-2xl">12.540+</p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-muted">
            <p className="text-muted-foreground text-sm">Freelancers Ativos</p>
            <p className="text-foreground font-bold text-2xl">3.200+</p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-muted">
            <p className="text-muted-foreground text-sm">Clientes Satisfeitos</p>
            <p className="text-foreground font-bold text-2xl">1.870+</p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-muted">
            <p className="text-muted-foreground text-sm">Valores Pagos</p>
            <p className="text-foreground font-bold text-2xl">R$ 1.2M+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 7c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3" />
      <path d="m16 5 4 4-4 4" />
    </svg>
  );
}
