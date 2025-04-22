import SharedNavbar from "@/components/SharedNavbar";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SharedNavbar currentPage="institucional" />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight md:leading-tight">
              Vídeos autênticos que <span className="text-primary">impactam</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
              Conectamos empresas que precisam de vídeos reais com criadores que transformam ideias em conteúdo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              <div className="bg-card rounded-xl p-8 border border-muted shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BuildingIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Sou Empresa</h2>
                <p className="text-muted-foreground mb-4">
                  Contrate criadores de vídeos reais para aumentar conversões e estabelecer confiança.
                </p>
                <a href="/empresa" className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 text-center py-3 rounded-lg font-medium transition-colors">
                  Contratar Criadores
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-muted shadow-sm hover:shadow-md hover:border-secondary/50 transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <UserIcon className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Sou Freelancer</h2>
                <p className="text-muted-foreground mb-4">
                  Grave vídeos simples com seu smartphone e transforme seu tempo livre em renda.
                </p>
                <a href="/freelancer" className="block w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-center py-3 rounded-lg font-medium transition-colors">
                  Começar a Ganhar
                </a>
              </div>
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Como a ClipUp funciona</h2>
            <p className="text-xl text-muted-foreground">Vídeos reais, resultados reais, sem complicação.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                Para Empresas
              </h3>
              <div className="space-y-8 ml-11">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Crie um briefing</h4>
                  <p className="text-muted-foreground">Descreva o tipo de vídeo que precisa e quem é seu público-alvo.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Selecione criadores</h4>
                  <p className="text-muted-foreground">Escolha quantos criadores você quer para seu projeto.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Receba os vídeos</h4>
                  <p className="text-muted-foreground">Aprove os vídeos e use onde quiser - redes sociais, site, anúncios.</p>
                </div>
                <div>
                  <a href="/empresa" className="inline-flex items-center text-primary font-medium">
                    Saiba mais sobre contratação 
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                Para Freelancers
              </h3>
              <div className="space-y-8 ml-11">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Receba pedidos</h4>
                  <p className="text-muted-foreground">Empresas enviam solicitações com instruções claras do que precisa ser feito.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Grave com o celular</h4>
                  <p className="text-muted-foreground">Use nosso app para gravar vídeos curtos e enviar facilmente.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Ganhe Lumpz</h4>
                  <p className="text-muted-foreground">Receba em nossa moeda digital (1 Lumpz = R$ 5,00) por cada vídeo aprovado.</p>
                </div>
                <div>
                  <a href="/freelancer" className="inline-flex items-center text-secondary font-medium">
                    Saiba mais sobre ganhos 
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Videos */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Vídeos que geram resultados</h2>
            <p className="text-xl text-muted-foreground">Casos reais de empresas que transformaram seu marketing com a ClipUp</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircleIcon className="h-16 w-16 text-primary/90" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Depoimento em vídeo" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Depoimentos de clientes</h3>
                <p className="text-muted-foreground">Pessoas reais compartilhando experiências autênticas com sua marca.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircleIcon className="h-16 w-16 text-primary/90" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1564543791669-988e5e6f0fd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Unboxing" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Unboxings</h3>
                <p className="text-muted-foreground">A emoção genuína de desembalar seu produto pela primeira vez.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircleIcon className="h-16 w-16 text-primary/90" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tutorial" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Tutoriais</h3>
                <p className="text-muted-foreground">Demonstrações práticas de como usar seus produtos de forma efetiva.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="/exemplos" className="inline-flex items-center text-primary font-medium">
              Ver mais exemplos
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-muted">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Pronto para transformar seu marketing com vídeos autênticos?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Escolha o caminho que faz sentido para você e comece a experimentar o poder dos vídeos reais hoje mesmo.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="/empresa" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                    Sou Empresa
                  </a>
                  <a href="/freelancer" className="border border-input hover:bg-muted px-6 py-3 rounded-lg font-medium transition-colors text-center">
                    Sou Freelancer
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-secondary/20 rounded-full filter blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pessoas celebrando sucesso" 
                  className="rounded-xl shadow-lg relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background pt-16 pb-8 border-t border-muted mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-primary font-bold text-2xl">Clip</span>
                <span className="text-foreground font-bold text-2xl">Up</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Conectando empresas e criadores para vídeos autênticos que geram resultados.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <YoutubeIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <TiktokIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-foreground font-bold mb-6">Plataforma</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-muted-foreground hover:text-primary">Início</a></li>
                <li><a href="/empresa" className="text-muted-foreground hover:text-primary">Para Empresas</a></li>
                <li><a href="/freelancer" className="text-muted-foreground hover:text-primary">Para Freelancers</a></li>
                <li><a href="/exemplos" className="text-muted-foreground hover:text-primary">Exemplos</a></li>
                <li><a href="/precos" className="text-muted-foreground hover:text-primary">Preços</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-foreground font-bold mb-6">Empresa</h3>
              <ul className="space-y-3">
                <li><a href="/sobre" className="text-muted-foreground hover:text-primary">Sobre Nós</a></li>
                <li><a href="/blog" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="/carreiras" className="text-muted-foreground hover:text-primary">Carreiras</a></li>
                <li><a href="/imprensa" className="text-muted-foreground hover:text-primary">Imprensa</a></li>
                <li><a href="/contato" className="text-muted-foreground hover:text-primary">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-foreground font-bold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/termos" className="text-muted-foreground hover:text-primary">Termos de Uso</a></li>
                <li><a href="/privacidade" className="text-muted-foreground hover:text-primary">Política de Privacidade</a></li>
                <li><a href="/cookies" className="text-muted-foreground hover:text-primary">Cookies</a></li>
                <li><a href="/direitos" className="text-muted-foreground hover:text-primary">Direitos de Conteúdo</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-muted pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2023 ClipUp. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6">
                <a href="/termos" className="text-muted-foreground hover:text-primary text-sm">Termos</a>
                <a href="/privacidade" className="text-muted-foreground hover:text-primary text-sm">Privacidade</a>
                <a href="/cookies" className="text-muted-foreground hover:text-primary text-sm">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icons
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

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PlayCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M15 2v20" />
      <path d="M9 16v6" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}