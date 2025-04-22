import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import { BarChartIcon, CoinsIcon, SearchIcon, UsersIcon, CheckCircle2Icon, MessageCircleIcon, LightbulbIcon, FolderIcon } from "lucide-react";

export default function EmpresaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SharedNavbar currentPage="empresa" />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Vídeos que <span className="text-primary">vendem</span> e <span className="text-primary">convertem</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Contrate os melhores criadores de conteúdo para transformar seus produtos em vendas reais. Pagamento por resultado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#">
                  <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                    Criar uma campanha
                  </button>
                </Link>
                <Link href="#">
                  <button className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition">
                    Conhecer criadores
                  </button>
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">A</div>
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">B</div>
                  <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-medium">C</div>
                  <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white font-medium">D</div>
                </div>
                <p className="ml-4 text-muted-foreground">
                  <span className="font-medium text-foreground">+500 empresas</span> já encontraram seus criadores ideais
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="gradient-border bg-card rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                    alt="Equipe de marketing analisando resultados" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                            <BarChartIcon className="h-5 w-5 text-white" />
                          </div>
                          <div className="ml-3">
                            <p className="text-white text-sm font-medium">Aumento nas vendas</p>
                            <p className="text-white/70 text-xs">35% em média</p>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <p className="text-white text-sm font-medium">ROI mensurável</p>
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
      
      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Como funciona para empresas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e transparente para encontrar os melhores criadores para sua marca.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md relative">
              <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mt-2">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Crie seu briefing</h3>
              <p className="text-muted-foreground mb-6">
                Preencha um briefing inteligente que ajudará os criadores a entenderem exatamente o que você precisa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Defina objetivos claros</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Escolha estilos de vídeo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Estabeleça métricas de sucesso</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-md relative">
              <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mt-2">
                <SearchIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Encontre os criadores</h3>
              <p className="text-muted-foreground mb-6">
                Nossa IA conecta você com os criadores mais adequados ao seu nicho e objetivos específicos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Filtre por especialidade</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Analise portfólios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Veja avaliações verificadas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-md relative">
              <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mt-2">
                <MessageCircleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Gerencie o projeto</h3>
              <p className="text-muted-foreground mb-6">
                Acompanhe todo o processo de produção, forneça feedbacks e aprove as entregas dentro da plataforma.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Chat integrado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Aprovações por etapa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Pagamento seguro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lumpz Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Lumpz: Contrate com agilidade, controle e segurança
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Com nosso sistema proprietário de Lumpz, você tem total controle sobre seus investimentos em conteúdo, com pagamentos condicionados a resultados reais.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CoinsIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Pagamento seguro</h3>
                    <p className="text-muted-foreground">O valor só é liberado quando você aprova o conteúdo final.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <UsersIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Escolha sua audiência</h3>
                    <p className="text-muted-foreground">Selecione criadores que já têm a audiência que você procura.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChartIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Métricas reais</h3>
                    <p className="text-muted-foreground">Acompanhe views, engajamento e conversões em tempo real.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative h-80 w-80">
                <div className="absolute top-0 left-0 h-64 w-64 bg-purple-500/10 rounded-lg transform rotate-6"></div>
                <div className="absolute top-8 left-8 h-64 w-64 bg-blue-500/10 rounded-lg transform -rotate-3"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-card border border-muted shadow-xl rounded-xl p-6 w-full max-w-xs">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-foreground">Campanha de lançamento</h3>
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <FolderIcon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Orçamento</span>
                        <span className="font-medium text-foreground">500 Lumpz</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Criadores</span>
                        <span className="font-medium text-foreground">5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Vídeos entregues</span>
                        <span className="font-medium text-foreground">15/20</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Conversões</span>
                        <span className="font-medium text-green-500">+357</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefícios para sua empresa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra como o ClipUp pode transformar sua estratégia de marketing em vídeo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-muted rounded-xl p-6 hover:border-primary/30 transition">
              <h3 className="text-xl font-semibold text-foreground mb-3">Aumento nas conversões</h3>
              <p className="text-muted-foreground">
                Empresas que utilizam o ClipUp relatam um aumento médio de 35% nas taxas de conversão com vídeos personalizados.
              </p>
            </div>
            
            <div className="border border-muted rounded-xl p-6 hover:border-primary/30 transition">
              <h3 className="text-xl font-semibold text-foreground mb-3">Redução de custos</h3>
              <p className="text-muted-foreground">
                Economize até 40% em comparação com agências tradicionais, pagando apenas pelo que realmente entrega resultados.
              </p>
            </div>
            
            <div className="border border-muted rounded-xl p-6 hover:border-primary/30 transition">
              <h3 className="text-xl font-semibold text-foreground mb-3">Conteúdo autêntico</h3>
              <p className="text-muted-foreground">
                Acesse uma rede de criadores autênticos que sabem como se conectar genuinamente com suas audiências.
              </p>
            </div>
            
            <div className="border border-muted rounded-xl p-6 hover:border-primary/30 transition">
              <h3 className="text-xl font-semibold text-foreground mb-3">Maior engajamento</h3>
              <p className="text-muted-foreground">
                Vídeos criados por nossa rede de talentos geram 3x mais engajamento que conteúdo produzido por métodos tradicionais.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pronto para aumentar suas vendas com vídeos impactantes?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Junte-se a mais de 500 empresas que já transformaram sua presença digital com o ClipUp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#">
                <button className="px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition text-lg">
                  Criar uma conta grátis
                </button>
              </Link>
              <Link href="#">
                <button className="px-8 py-4 bg-card border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition text-lg">
                  Agendar demonstração
                </button>
              </Link>
            </div>
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