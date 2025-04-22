import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import { CameraIcon, PencilIcon, ClockIcon, TrendingUpIcon, HeartIcon, CheckCircleIcon, VideoIcon, DollarSignIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SharedNavbar currentPage="institucional" />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="text-primary">Vídeos reais.</span> Resultados reais.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Chega de campanhas frias com conteúdo genérico! Contrate os melhores produtores de vídeo para sua marca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/empresa">
                  <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                    Contratar criadores
                  </button>
                </Link>
                <Link href="/freelancer">
                  <button className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition">
                    Sou criador de conteúdo
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="gradient-border bg-card rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                    alt="Produtor de vídeo trabalhando" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                            <VideoIcon className="h-5 w-5 text-white" />
                          </div>
                          <div className="ml-3">
                            <p className="text-white text-sm font-medium">Encontre talentos</p>
                            <p className="text-white/70 text-xs">+ de 1000 criadores</p>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <p className="text-white text-sm font-medium">Qualidade Premium</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Por que escolher o ClipUp?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma conecta empresas a criadores de conteúdo de vídeo qualificados, simplificando todo o processo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CameraIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Criadores Verificados</h3>
              <p className="text-muted-foreground">
                Todos os criadores passam por um processo de verificação rigoroso para garantir qualidade.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PencilIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Briefings Inteligentes</h3>
              <p className="text-muted-foreground">
                Nossa ferramenta de briefing guia você para obter exatamente o que precisa.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Entregas Pontuais</h3>
              <p className="text-muted-foreground">
                Sistema de prazos transparente e notificações automáticas para manter tudo no cronograma.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Métricas de Desempenho</h3>
              <p className="text-muted-foreground">
                Acompanhe o sucesso de seus vídeos com análises detalhadas e insights.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Satisfação Garantida</h3>
              <p className="text-muted-foreground">
                Se você não estiver satisfeito, trabalhamos para resolver até que esteja.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Pagamentos Seguros</h3>
              <p className="text-muted-foreground">
                Nosso sistema de pagamento com Lumpz garante segurança para ambas as partes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lumpz Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Lumpz: A moeda que valoriza seu conteúdo
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Com o sistema de Lumpz, os pagamentos são seguros e transparentes. Cada Lumpz equivale a 5 reais, tornando as transações mais simples e protegidas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-background rounded-lg p-4 flex items-center">
                  <DollarSignIcon className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Valor garantido</p>
                    <p className="text-sm text-muted-foreground">1 Lumpz = 5 reais</p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Pagamentos seguros</p>
                    <p className="text-sm text-muted-foreground">Proteção para ambos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-30" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-0 rounded-full bg-primary/30" style={{ transform: 'scale(0.9)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-28 w-28 bg-primary rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                    Lumpz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Pronto para transformar seu conteúdo em vídeo?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Escolha o caminho que melhor se adapta a você e comece a criar conteúdo de vídeo impactante hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/empresa">
              <button className="px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition text-lg">
                Sou uma empresa
              </button>
            </Link>
            <Link href="/freelancer">
              <button className="px-8 py-4 bg-card border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition text-lg">
                Sou freelancer
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-card border-t border-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
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
              <p className="text-muted-foreground mb-4">
                Conectando empresas e criadores de conteúdo para vídeos impactantes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Para empresas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Como funciona</a></li>
                <li><a href="#" className="hover:text-primary transition">Contratar criadores</a></li>
                <li><a href="#" className="hover:text-primary transition">Preços</a></li>
                <li><a href="#" className="hover:text-primary transition">Casos de sucesso</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Para freelancers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Por que se cadastrar</a></li>
                <li><a href="#" className="hover:text-primary transition">Como receber</a></li>
                <li><a href="#" className="hover:text-primary transition">Comissões</a></li>
                <li><a href="#" className="hover:text-primary transition">Programa de afiliados</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-primary transition">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition">Política de privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition">Termos de uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ClipUp. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}