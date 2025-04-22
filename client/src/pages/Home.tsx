import SharedNavbar from "@/components/SharedNavbar";
import { Link } from "wouter";
import { 
  CheckCircle, 
  ArrowRight, 
  Play, 
  User, 
  Building, 
  Briefcase, 
  Star, 
  ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <SharedNavbar currentPage="institucional" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Conectando <span className="text-primary">criadores</span> e <span className="text-primary">empresas</span> através de vídeos reais
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Uma plataforma onde empresas encontram pessoas reais para criar vídeos autênticos, e freelancers ganham dinheiro com seu smartphone.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
            <Link href="/empresa">
              <div className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Building className="h-5 w-5" />
                Sou Empresa
                <ChevronRight className="h-5 w-5" />
              </div>
            </Link>
            <Link href="/freelancer">
              <div className="w-full sm:w-auto bg-card hover:bg-muted border border-muted text-foreground text-lg px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <User className="h-5 w-5" />
                Sou Freelancer
                <ChevronRight className="h-5 w-5" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">12.540+</h3>
              <p className="text-muted-foreground text-center">Criadores ativos na plataforma</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1.300+</h3>
              <p className="text-muted-foreground text-center">Empresas contratando criadores</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Play className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">48.000+</h3>
              <p className="text-muted-foreground text-center">Vídeos criados e entregues</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Como funciona a ClipUp</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma plataforma completa que conecta quem precisa de vídeos com quem quer ganhar dinheiro criando conteúdo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-card rounded-xl p-8 border border-muted shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Para Empresas</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Contrate criadores para produzir vídeos autênticos sobre sua marca ou produto</p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Receba depoimentos genuínos, unboxings e tutoriais que geram confiança</p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Aumente suas conversões com conteúdo gerado por usuários reais</p>
                </div>
              </div>
              
              <Link href="/empresa">
                <div className="inline-flex items-center text-primary font-medium cursor-pointer">
                  Saiba mais sobre como contratar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-muted shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Para Freelancers</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Ganhe dinheiro criando vídeos rápidos usando apenas seu smartphone</p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Receba pagamentos em Lumpz por cada vídeo aprovado e aproveitado</p>
                </div>
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Trabalhe quando e onde quiser, sem compromissos fixos</p>
                </div>
              </div>
              
              <Link href="/freelancer">
                <div className="inline-flex items-center text-primary font-medium cursor-pointer">
                  Saiba mais sobre como ganhar dinheiro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tipos de Vídeo */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tipos de vídeo mais populares</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diversos formatos de vídeo para diferentes objetivos de marketing e comunicação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-muted hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Depoimento em vídeo" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Depoimentos</h3>
                <p className="text-muted-foreground mb-4">Pessoas reais falando sobre experiências com sua marca, produto ou serviço.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">3-8 Lumpz</span>
                  <span className="text-sm text-muted-foreground">10-30 segundos</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-muted hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1564543791669-988e5e6f0fd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Unboxing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Unboxings</h3>
                <p className="text-muted-foreground mb-4">Primeiras impressões ao desembalar e experimentar seu produto pela primeira vez.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">5-15 Lumpz</span>
                  <span className="text-sm text-muted-foreground">1-3 minutos</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-muted hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tutorial" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Tutoriais</h3>
                <p className="text-muted-foreground mb-4">Instruções passo a passo sobre como usar produtos ou recursos específicos.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">10-30 Lumpz</span>
                  <span className="text-sm text-muted-foreground">3-5 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que dizem sobre nós</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empresas e criadores que transformaram seus resultados com a ClipUp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-muted shadow-sm">
              <div className="flex items-start mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/men/42.jpg" 
                  alt="Ricardo Martins" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-foreground">Ricardo Martins</h3>
                  <p className="text-muted-foreground text-sm">Head de Marketing na TechBr</p>
                </div>
              </div>
              <p className="text-foreground mb-4">
                "Os vídeos gerados pelos criadores da ClipUp aumentaram nossas conversões em 46%. A autenticidade das pessoas falando sobre nosso produto é algo que nenhuma publicidade tradicional consegue entregar."
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-muted shadow-sm">
              <div className="flex items-start mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Ana Silva" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-foreground">Ana Silva</h3>
                  <p className="text-muted-foreground text-sm">Criadora de conteúdo</p>
                </div>
              </div>
              <p className="text-foreground mb-4">
                "Comecei a gravar vídeos para a ClipUp nas horas vagas e agora consegui deixar meu emprego para me dedicar 100% à plataforma. Ganho mais, trabalho quando quero e de qualquer lugar."
              </p>
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-20 bg-background border-t border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para transformar sua forma de <span className="text-primary">criar</span> ou <span className="text-primary">consumir</span> vídeos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Escolha seu caminho na plataforma e comece a experiência ClipUp hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link href="/empresa">
              <div className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Building className="h-5 w-5" />
                Área da Empresa
                <ChevronRight className="h-5 w-5" />
              </div>
            </Link>
            <Link href="/freelancer">
              <div className="w-full sm:w-auto bg-card hover:bg-muted border border-muted text-foreground text-lg px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <User className="h-5 w-5" />
                Área do Freelancer
                <ChevronRight className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-card border-t border-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary mr-2"
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
              <p className="text-muted-foreground mb-6">
                Conectando criadores de conteúdo e empresas através de vídeos autênticos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Plataforma</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/">
                    <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      Página Inicial
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/empresa">
                    <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      Para Empresas
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/freelancer">
                    <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      Para Freelancers
                    </div>
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Preços
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Recursos</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tutoriais
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Base de Conhecimento
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Comunidade
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Empresa</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Termos e Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-muted mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 ClipUp. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Termos de Uso
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Política de Privacidade
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}