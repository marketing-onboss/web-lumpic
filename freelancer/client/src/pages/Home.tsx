import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import ServicesShowcase from "@/components/ServicesShowcase";
import EarningsCalculator from "@/components/EarningsCalculator";
import LumpzCurrency from "@/components/LumpzCurrency";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-background">
      {/* Hero Section - Freelancer */}
      <section className="pt-20 pb-16 md:pb-24 bg-background" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Use apenas seu smartphone para gravar vídeos e ganhar dinheiro online
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                ClipUp conecta freelancers com empresas que precisam de vídeos reais. Receba pedidos, grave vídeos simples e ganhe Lumpz.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Começar Agora
                </button>
                <button className="border border-muted-foreground text-foreground hover:bg-muted px-6 py-3 rounded-lg font-medium transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full filter blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pessoa gravando vídeo com smartphone" 
                className="rounded-xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-card border-y border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">12.540</h3>
              <p className="text-muted-foreground">Criadores ativos</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">1.300+</h3>
              <p className="text-muted-foreground">Empresas contratando</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">R$ 5,6 mi</h3>
              <p className="text-muted-foreground">Pagos aos criadores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-background" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Como Funciona</h2>
            <p className="text-xl text-muted-foreground">Em poucos passos, comece a ganhar dinheiro com seus vídeos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <PlusIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">1. Crie sua conta</h3>
              <p className="text-muted-foreground">Cadastre-se em menos de 2 minutos e configure seu perfil.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <VideoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">2. Receba pedidos</h3>
              <p className="text-muted-foreground">Empresas enviam solicitações de vídeos com instruções claras.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MobileIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">3. Grave com o celular</h3>
              <p className="text-muted-foreground">Use nosso app para gravar vídeos curtos e enviar facilmente.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CoinsIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">4. Receba em Lumpz</h3>
              <p className="text-muted-foreground">Ganhe Lumpz por cada vídeo aprovado e saque quando quiser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você pode oferecer na plataforma */}
      <section className="py-16 bg-muted/30" id="ofertas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">O que você pode oferecer na plataforma?</h2>
            <p className="text-xl text-muted-foreground">Diversos formatos de vídeo são solicitados diariamente.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Depoimento em vídeo" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Depoimentos</h3>
                <p className="text-muted-foreground mb-4">Vídeos curtos falando sobre experiências com produtos ou serviços.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">3-8 Lumpz</span>
                  <span className="text-sm text-muted-foreground">10-30 segundos</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1564543791669-988e5e6f0fd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Unboxing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Unboxings</h3>
                <p className="text-muted-foreground mb-4">Vídeos abrindo produtos e mostrando a primeira impressão.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">5-15 Lumpz</span>
                  <span className="text-sm text-muted-foreground">1-3 minutos</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tutorial" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Tutoriais</h3>
                <p className="text-muted-foreground mb-4">Vídeos mostrando como usar produtos ou recursos específicos.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">10-30 Lumpz</span>
                  <span className="text-sm text-muted-foreground">3-5 minutos</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors">
              Ver Todos os Tipos de Vídeo
            </button>
          </div>
        </div>
      </section>

      {/* Calculadora de Ganhos */}
      <EarningsCalculator />

      {/* Depoimentos dos criadores */}
      <section className="py-16 bg-background" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Eles já estão mudando de vida com os vídeos</h2>
            <p className="text-xl text-muted-foreground">Histórias reais de criadores que transformaram suas vidas com a ClipUp.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-muted">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Ana Silva" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-foreground font-medium">Ana Silva</h3>
                  <p className="text-muted-foreground text-sm">Estudante, 22 anos</p>
                </div>
              </div>
              <p className="text-card-foreground mb-4">
                "Consigo pagar minha faculdade gravando depoimentos nos intervalos das aulas. O app é super simples de usar e o dinheiro cai direto na minha conta."
              </p>
              <div className="flex text-yellow-400">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/45.jpg" 
                  alt="Carlos Mendes" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-foreground font-medium">Carlos Mendes</h3>
                  <p className="text-muted-foreground text-sm">Professor, 35 anos</p>
                </div>
              </div>
              <p className="text-card-foreground mb-4">
                "Como professor, tenho facilidade em explicar. Faço tutoriais nos fins de semana e ganho uma renda extra que transformou minhas finanças."
              </p>
              <div className="flex text-yellow-400">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarHalfIcon className="h-5 w-5" />
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/67.jpg" 
                  alt="Mariana Costa" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-foreground font-medium">Mariana Costa</h3>
                  <p className="text-muted-foreground text-sm">Dona de casa, 41 anos</p>
                </div>
              </div>
              <p className="text-card-foreground mb-4">
                "Gravo vídeos enquanto meus filhos estão na escola. É incrível como posso trabalhar no meu próprio tempo e ainda cuidar da minha família."
              </p>
              <div className="flex text-yellow-400">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lumpz Currency */}
      <LumpzCurrency />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTASection />
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
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
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
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
    </svg>
  );
}

function MobileIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  );
}

function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarHalfIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1 3-6.1 3 6.1 7 1-5 4.8 1.2 6.9-6.2-3.3" />
      <path d="M12 12V2" fill="currentColor" />
    </svg>
  );
}