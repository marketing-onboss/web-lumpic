import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import ServicesShowcase from "@/components/ServicesShowcase";
import EarningsCalculator from "@/components/EarningsCalculator";
import LumpzCurrency from "@/components/LumpzCurrency";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SharedNavbar from "@/components/SharedNavbar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-background">
      {/* Hero Section - Empresas */}
      <section className="pt-20 pb-16 md:pb-24 bg-background" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Use pessoas reais para gravar vídeos autênticos que geram conversão
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Chega de campanhas frias com conteúdo genérico. Contrate criadores reais para depoimentos, unboxings e tutoriais que estabelecem confiança.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Contratar Agora
                </button>
                <button className="border border-muted-foreground text-foreground hover:bg-muted px-6 py-3 rounded-lg font-medium transition-colors">
                  Ver Exemplos
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full filter blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe de marketing analisando vídeos" 
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
              <h3 className="text-3xl font-bold text-primary mb-2">97%</h3>
              <p className="text-muted-foreground">Taxa de satisfação</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">24h</h3>
              <p className="text-muted-foreground">Tempo médio de entrega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-background" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Como Funciona</h2>
            <p className="text-xl text-muted-foreground">Contrate criadores de vídeo em poucos cliques.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <PlusIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">1. Crie sua conta</h3>
              <p className="text-muted-foreground">Cadastre sua empresa em menos de 2 minutos.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FormIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">2. Crie um briefing</h3>
              <p className="text-muted-foreground">Descreva o que você precisa e seu público-alvo.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">3. Selecione criadores</h3>
              <p className="text-muted-foreground">Escolha quantos criadores quer para seu projeto.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <VideoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">4. Receba os vídeos</h3>
              <p className="text-muted-foreground">Em poucos dias, seus vídeos estarão prontos para uso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que contratar na plataforma */}
      <section className="py-16 bg-muted/30" id="beneficios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">O que pode oferecer na plataforma?</h2>
            <p className="text-xl text-muted-foreground">Escolha o tipo de conteúdo que sua marca precisa.</p>
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
                <p className="text-muted-foreground mb-4">Pessoas reais falando sobre sua marca aumentam a confiabilidade.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">A partir de 3 Lumpz</span>
                  <span className="text-sm text-muted-foreground">Entrega em 24h</span>
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
                <p className="text-muted-foreground mb-4">Reações autênticas ao desembalar seu produto pela primeira vez.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">A partir de 5 Lumpz</span>
                  <span className="text-sm text-muted-foreground">Entrega em 48h</span>
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
                <p className="text-muted-foreground mb-4">Criadores explicam como usar seu produto de forma prática e clara.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">A partir de 10 Lumpz</span>
                  <span className="text-sm text-muted-foreground">Entrega em 72h</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors">
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </section>

      {/* ROI e Valor */}
      <section className="py-16 bg-card" id="roi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Investimento que traz retorno</h2>
            <p className="text-xl text-muted-foreground">Conteúdo gerado por usuários aumenta conversões em até 161%.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-foreground mb-6">Por que os vídeos de pessoas reais funcionam?</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Confiança imediata</h4>
                    <p className="text-muted-foreground">Pessoas confiam em rostos mais do que em logos. Vídeos reais humanizam sua marca.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Autenticidade</h4>
                    <p className="text-muted-foreground">Consumidores valorizam opiniões reais. 92% confiam mais em UGC do que em publicidade tradicional.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Economia de recursos</h4>
                    <p className="text-muted-foreground">Produza dezenas de vídeos pelo custo de uma única produção tradicional.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-foreground mb-6">Casos de sucesso</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <blockquote className="text-foreground mb-2">
                    "Aumentamos em 43% nossa taxa de conversão em apenas 30 dias depois que implementamos os vídeos de depoimentos reais."
                  </blockquote>
                  <p className="text-primary font-medium">Maria Silva, CMO da BeautyStore</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <blockquote className="text-foreground mb-2">
                    "Nossas vendas online cresceram 67% após incluirmos vídeos de unboxing reais em todas as páginas de produto."
                  </blockquote>
                  <p className="text-primary font-medium">Carlos Eduardo, E-commerce Manager da TechGear</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <blockquote className="text-foreground mb-2">
                    "Reduzimos em 38% as solicitações de devolução após implementarmos tutoriais em vídeo feitos por usuários reais."
                  </blockquote>
                  <p className="text-primary font-medium">Fernanda Moreira, CEO da HomeStyle</p>
                </div>
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

function FormIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="9" x2="15" y1="9" y2="9" />
      <line x1="9" x2="15" y1="15" y2="15" />
      <line x1="9" x2="9" y1="9" y2="15" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}