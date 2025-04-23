import { Link } from "wouter";
import { useEffect } from "react";
import SharedNavbar from "@/components/SharedNavbar";
import { 
  Camera, Smartphone, CheckCircle, Video, 
  DollarSign, User, Lightbulb, Users, 
  CreditCard, Star, TrendingUp, Home,
  MapPin, MoreHorizontal, ArrowRight,
  Check, ShieldCheck, Package, MessageSquare,
  Heart, Sliders, ChevronDown, Lock
} from "lucide-react";
import { initAnimations } from "@/scripts/animations";

export default function FreelancerPage() {
  // Inicializa as animações quando o componente montar
  useEffect(() => {
    initAnimations();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SharedNavbar currentPage="freelancer" />
      
      {/* Hero Section - Usando o texto fornecido pelo usuário */}
      <section className="pt-24 pb-12 hero-gradient relative">
        <div className="particles-container"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 fade-in-element">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Use apenas seu smartphone para gravar vídeos e transforme isso em renda sem sair de casa
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Mostre seu rosto, compartilhe sua voz. Nós cuidamos do resto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cadastro">
                  <button className="clipup-btn flex items-center">
                    Começar Agora
                  </button>
                </Link>
                <Link href="#como-funciona">
                  <button className="clipup-btn-outline">
                    Como Funciona
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="gradient-border bg-card rounded-lg shadow-xl overflow-hidden parallax-card">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                  alt="Pessoa gravando um vídeo com smartphone" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                          <SmartphoneIcon className="h-5 w-5 text-black" />
                        </div>
                        <div className="ml-3">
                          <p className="text-white text-sm font-medium">Grave de qualquer lugar</p>
                          <p className="text-white/70 text-xs">Seu smartphone é suficiente</p>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-white text-sm font-medium">Comece hoje</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefícios Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Ganhe do seu jeito, sem complicação</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Liberdade para escolher como e quando trabalhar, sem burocracias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 stagger-container">
            {/* Benefício 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircleIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Você escolhe os serviços</h3>
              <p className="text-muted-foreground text-center">
                Selecione apenas os projetos que combinam com seu perfil e disponibilidade. Você está no controle.
              </p>
            </div>
            
            {/* Benefício 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUpIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Seu talento é valorizado</h3>
              <p className="text-muted-foreground text-center">
                Sistema de ranqueamento que premia os melhores criadores com mais visibilidade e oportunidades de ganhos.
              </p>
            </div>
            
            {/* Benefício 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSignIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Entregou? Recebeu!</h3>
              <p className="text-muted-foreground text-center">
                Pagamentos rápidos e seguros em nossa moeda Lumpz, que pode ser convertida em reais a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resumo de Ganhos */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Resultados reais dos nossos criadores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Veja o potencial de ganhos trabalhando na plataforma
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-md border border-primary/10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 stagger-container">
              {/* Ganhos do mês */}
              <div className="text-center stagger-item">
                <h3 className="text-lg font-semibold text-foreground mb-2">Ganhos médios mensais</h3>
                <p className="text-3xl font-bold text-primary">R$ 2.547</p>
                <p className="text-sm text-muted-foreground">por produtor ativo</p>
              </div>
              
              {/* Projetos entregues */}
              <div className="text-center stagger-item">
                <h3 className="text-lg font-semibold text-foreground mb-2">Projetos entregues</h3>
                <p className="text-3xl font-bold text-primary">12.540+</p>
                <p className="text-sm text-muted-foreground">concluídos com sucesso</p>
              </div>
              
              {/* Clientes satisfeitos */}
              <div className="text-center stagger-item">
                <h3 className="text-lg font-semibold text-foreground mb-2">Clientes satisfeitos</h3>
                <p className="text-3xl font-bold text-primary">1.870+</p>
                <p className="text-sm text-muted-foreground">empresas e contratantes</p>
              </div>
              
              {/* Empresas parceiras */}
              <div className="text-center stagger-item">
                <h3 className="text-lg font-semibold text-foreground mb-2">Empresas parceiras</h3>
                <p className="text-3xl font-bold text-primary">2.157+</p>
                <p className="text-sm text-muted-foreground">contratando regularmente</p>
              </div>
              
              {/* Satisfação */}
              <div className="text-center stagger-item">
                <h3 className="text-lg font-semibold text-foreground mb-2">Satisfação geral</h3>
                <div className="flex justify-center mb-1">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
                <p className="text-lg font-bold text-primary">4.8 / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Transforme seu talento em renda em apenas 4 passos simples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Processo descomplicado do cadastro ao pagamento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-container">
            {/* Passo 1 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  1
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-background"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Cadastre-se</h3>
              <p className="text-muted-foreground text-center">
                Crie sua conta gratuita na plataforma em menos de 2 minutos.
              </p>
            </div>
            
            {/* Passo 2 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  2
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-background"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Complete seu perfil</h3>
              <p className="text-muted-foreground text-center">
                Adicione suas informações, uma boa foto e quais tipos de vídeos você pode criar.
              </p>
            </div>
            
            {/* Passo 3 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  3
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-background"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Aceite projetos</h3>
              <p className="text-muted-foreground text-center">
                Escolha os projetos que combinam com seu perfil e comece a gravar.
              </p>
            </div>
            
            {/* Passo 4 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  4
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-background"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Receba pagamentos</h3>
              <p className="text-muted-foreground text-center">
                Ganhe Lumpz por cada entrega aprovada. Converta em reais a qualquer momento.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/cadastro">
              <button className="clipup-btn">
                Começar minha jornada
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* É para você se... */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">É para você se...</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Identifique-se com o perfil ideal de criadores da nossa plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Perfil 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <VideoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Gosta de aparecer em frente às câmeras</h3>
              <p className="text-muted-foreground text-center">
                Tem naturalidade e carisma para se expressar em vídeo, mesmo usando apenas seu smartphone.
              </p>
            </div>
            
            {/* Perfil 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageSquareIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Tem boa dicção e comunicação</h3>
              <p className="text-muted-foreground text-center">
                Consegue transmitir ideias de forma clara e envolvente, criando conexão com quem assiste.
              </p>
            </div>
            
            {/* Perfil 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <SmartphoneIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Já grava vídeos para redes sociais</h3>
              <p className="text-muted-foreground text-center">
                Tem experiência criando conteúdo para plataformas digitais e quer monetizar sua habilidade.
              </p>
            </div>
            
            {/* Perfil 4 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <DollarSignIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Quer fazer uma grana extra no tempo livre</h3>
              <p className="text-muted-foreground text-center">
                Busca uma forma de complementar sua renda com flexibilidade de horários e sem compromisso fixo.
              </p>
            </div>
            
            {/* Perfil 5 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <HomeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Quer trabalhar de casa</h3>
              <p className="text-muted-foreground text-center">
                Prefere a comodidade de produzir conteúdo no conforto do seu lar, sem precisar se deslocar.
              </p>
            </div>
            
            {/* Perfil 6 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPinIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Quer trabalhar de qualquer lugar do mundo</h3>
              <p className="text-muted-foreground text-center">
                Busca liberdade geográfica para criar conteúdo enquanto viaja ou mora em diferentes regiões.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/cadastro">
              <button className="clipup-btn">
                Isso é para mim! Quero começar
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* O que você pode oferecer */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">O que você pode oferecer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Diversos formatos de conteúdo para diversificar seu portfólio e aumentar suas oportunidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger-container">
            {/* Tipo 1 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <VideoIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Depoimentos em vídeo</h3>
            </div>
            
            {/* Tipo 2 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <PackageIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Unboxings de produtos</h3>
            </div>
            
            {/* Tipo 3 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <StarIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Reações e reviews</h3>
            </div>
            
            {/* Tipo 4 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <UserIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Vídeos UGC</h3>
            </div>
            
            {/* Tipo 5 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <MoreHorizontalIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">E muito mais...</h3>
            </div>
          </div>
          
          <div className="mt-10 bg-card/50 rounded-xl p-8 shadow-md border border-primary/10 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Descubra seu potencial como criador</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada pessoa tem talentos únicos que podem ser valorizados. Encontre seu nicho e 
              estilo para se destacar na plataforma e atrair as melhores oportunidades.
            </p>
            <Link href="/categorias-de-videos">
              <button className="clipup-btn-outline">
                Ver mais categorias e exemplos
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Simulador de Ganhos */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Simulador de Ganhos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Calcule seu potencial de ganhos baseado no volume e tipo de vídeos que você pode criar
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-md border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Quantidade de vídeos por mês
                    </label>
                    <div className="flex items-center">
                      <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        defaultValue="10"
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-3 text-lg font-semibold text-primary">10</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de vídeo
                    </label>
                    <select className="w-full rounded-md border border-border bg-background px-3 py-2">
                      <option>Depoimento (10-20 Lumpz)</option>
                      <option>Unboxing (15-30 Lumpz)</option>
                      <option>Review (20-40 Lumpz)</option>
                      <option>Promocional (25-50 Lumpz)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Os valores apresentados são estimativas baseadas na média de ganhos dos criadores ativos na plataforma. 
                    Seus ganhos reais podem variar de acordo com diversos fatores, como qualidade do conteúdo, relevância 
                    para os anunciantes e volume de trabalho.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="mb-6 text-center">
                  <h3 className="text-lg font-medium text-foreground mb-1">Ganhos em Lumpz</h3>
                  <p className="text-4xl font-bold text-primary">500</p>
                </div>
                
                <div className="mb-6 text-center">
                  <h3 className="text-lg font-medium text-foreground mb-1">Conversão</h3>
                  <p className="text-xl text-muted-foreground">Aproximadamente R$ 2 por Lumpz</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-medium text-foreground mb-1">Ganhos totais estimados</h3>
                  <p className="text-4xl font-bold text-primary">R$ 1.000</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-xl font-semibold text-foreground mb-6">
                Comece agora mesmo e transforme seu tempo livre em renda extra!
              </p>
              <Link href="/cadastro">
                <button className="clipup-btn">
                  Criar minha conta agora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sistema Lumpz */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/5">
              <div className="text-left fade-in-element">
                <h2 className="clipup-section-title mb-6">Conheça o sistema Lumpz</h2>
                <p className="text-lg text-muted-foreground mt-4 mb-6">
                  Nossa moeda digital que facilita pagamentos e traz maior segurança para freelancers e contratantes
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Pagamentos instantâneos e automáticos</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Sem intermediários ou surpresas</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Controle total do que você ganha</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Economia de tempo e taxas menores</p>
                  </div>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-4">Detalhes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <ArrowRightIcon className="h-3 w-3 text-primary" />
                      </div>
                      <p className="ml-2 text-sm text-muted-foreground">Você recebe em Lumpz a cada entrega aprovada</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <ArrowRightIcon className="h-3 w-3 text-primary" />
                      </div>
                      <p className="ml-2 text-sm text-muted-foreground">Pode acumular e sacar em reais quando quiser</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <ArrowRightIcon className="h-3 w-3 text-primary" />
                      </div>
                      <p className="ml-2 text-sm text-muted-foreground">Saque flexível a partir de 100 reais acumulados em Lumpz</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <div className="bg-gradient-to-br from-primary/80 to-primary rounded-2xl overflow-hidden shadow-xl p-1">
                <div className="bg-background rounded-xl p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                        <CreditCardIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-foreground">Sistema Lumpz</h3>
                        <p className="text-sm text-muted-foreground">Acumule Lumpz e saque em BRL</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 px-3 py-2 rounded-lg">
                      <p className="text-xs font-semibold text-primary">Valor estimado por Lumpz</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <div className="flex-1 bg-card/50 rounded-xl p-5 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Saldo atual</p>
                      <p className="text-2xl font-bold text-foreground">500 <span className="text-primary">Lumpz</span></p>
                      <p className="text-sm text-muted-foreground mt-1">= R$ 1.000,00</p>
                    </div>
                    
                    <div className="flex-1 bg-card/50 rounded-xl p-5 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Pendente</p>
                      <p className="text-2xl font-bold text-foreground">50 <span className="text-primary">Lumpz</span></p>
                      <p className="text-sm text-muted-foreground mt-1">= R$ 100,00</p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 rounded-xl p-6 border border-primary/10 mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Transparência e liberdade</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Tudo que você ganha está no seu painel. Nada escondido. Nada retido.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                      <p className="text-sm text-foreground">
                        Receba seus ganhos do jeito que quiser
                      </p>
                      <div className="mt-3 sm:mt-0">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                          Pagamento Semanal (Grátis)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <UsersIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>+3200 creators cadastrados</span>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Avaliação 4.8/5</span>
                    </div>
                    <div className="flex items-center">
                      <ShieldCheckIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>100% Seguro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dicas para aumentar ganhos */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Dicas para aumentar seus ganhos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Estratégias que fazem diferença na qualidade do seu conteúdo e visibilidade na plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Dica 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Invista em boa iluminação</h3>
              <p className="text-muted-foreground">
                Mesmo com equipamentos simples, uma boa iluminação faz toda diferença na qualidade final do vídeo.
              </p>
            </div>
            
            {/* Dica 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <VideoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Grave em ambientes silenciosos</h3>
              <p className="text-muted-foreground">
                Um áudio limpo é tão importante quanto a imagem. Procure um lugar tranquilo para fazer suas gravações.
              </p>
            </div>
            
            {/* Dica 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <StarIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mantenha alta qualidade</h3>
              <p className="text-muted-foreground">
                Freelancers com boas avaliações recebem mais projetos e bônus especiais na plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tipos de Vídeos */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Tipos de vídeos mais solicitados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Conheça as categorias mais populares entre os contratantes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Tipo 1 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1603383928972-0dbadcb23578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                  alt="Depoimento de cliente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Depoimentos</h3>
                <p className="text-muted-foreground mb-4">
                  Vídeos curtos falando sobre experiências positivas com produtos ou serviços.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">10-20 Lumpz</span>
                  <span className="text-sm text-muted-foreground">Alta demanda</span>
                </div>
              </div>
            </div>
            
            {/* Tipo 2 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1569171188700-9c4a4f8a4446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                  alt="Unboxing de produto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Unboxings</h3>
                <p className="text-muted-foreground mb-4">
                  Abertura e primeira impressão de produtos, destacando características.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">15-30 Lumpz</span>
                  <span className="text-sm text-muted-foreground">Média demanda</span>
                </div>
              </div>
            </div>
            
            {/* Tipo 3 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1551817958-c5b51e7b4a33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                  alt="Vídeo promocional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Promocionais</h3>
                <p className="text-muted-foreground mb-4">
                  Conteúdo persuasivo para campanhas publicitárias e lançamentos.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">20-50 Lumpz</span>
                  <span className="text-sm text-muted-foreground">Alta demanda</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/veja-mais-tipos">
              <button className="clipup-btn-outline">
                Ver todos os tipos de vídeos
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Empresas buscando serviços */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Empresas que estão buscando serviços agora</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Oportunidades disponíveis neste momento para criadores se cadastrarem
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center flex-wrap gap-3 mb-6">
              <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2">
                <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Todos
                </button>
                <button className="px-4 py-2 rounded-full bg-background hover:bg-muted text-foreground text-sm font-medium">
                  Vídeo Depoimento
                </button>
                <button className="px-4 py-2 rounded-full bg-background hover:bg-muted text-foreground text-sm font-medium">
                  Unboxing
                </button>
                <button className="px-4 py-2 rounded-full bg-background hover:bg-muted text-foreground text-sm font-medium">
                  Vídeo Promocional
                </button>
                <button className="px-4 py-2 rounded-full bg-background hover:bg-muted text-foreground text-sm font-medium">
                  Tutorial
                </button>
                <button className="px-4 py-2 rounded-full bg-background hover:bg-muted text-foreground text-sm font-medium">
                  Review
                </button>
                <button className="px-4 py-2 rounded-full bg-background hover:bg-muted text-foreground text-sm font-medium">
                  Animação
                </button>
                <button className="px-4 py-2 rounded-full bg-background hover:bg-muted text-foreground text-sm font-medium">
                  Edição
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-muted text-foreground text-sm font-medium border border-border">
                    <div className="flex items-center">
                      <span>Ordenar por</span>
                      <ChevronDownIcon className="h-4 w-4 ml-1 text-muted-foreground" />
                    </div>
                  </button>
                </div>
                
                <div className="relative flex items-center">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-muted text-foreground text-sm font-medium border border-border">
                    <div className="flex items-center">
                      <span>Preço</span>
                      <ChevronDownIcon className="h-4 w-4 ml-1 text-muted-foreground" />
                    </div>
                  </button>
                </div>
                
                <button className="p-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary">
                  <SlidersIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {/* Serviço 1 - Visível */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                  alt="Serviço"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <HeartIcon className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary mr-2">L</div>
                  <p className="text-sm text-muted-foreground">Luiz Brass</p>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Vídeo Depoimento Profissional</h3>
                <div className="flex mb-3">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-primary" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">4.8 (32)</p>
                  <p className="text-xs text-muted-foreground ml-auto">32 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-base font-semibold text-primary">2.500 Lumpz</p>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Serviço 2 - Visível */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80" 
                  alt="Serviço"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <HeartIcon className="h-4 w-4 text-red-500 fill-red-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary mr-2">A</div>
                  <p className="text-sm text-muted-foreground">Amanda Rocha</p>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Unboxing de Produtos</h3>
                <div className="flex mb-3">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-primary" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">5.0 (18)</p>
                  <p className="text-xs text-muted-foreground ml-auto">18 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-base font-semibold text-primary">3.200 Lumpz</p>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Serviço 3 - Visível */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Serviço"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <HeartIcon className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary mr-2">R</div>
                  <p className="text-sm text-muted-foreground">Ricardo Santos</p>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Vídeo Promocional para Redes Sociais</h3>
                <div className="flex mb-3">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <StarIcon key={i} className={`h-4 w-4 ${i < 4 ? 'text-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">4.0 (26)</p>
                  <p className="text-xs text-muted-foreground ml-auto">26 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-base font-semibold text-primary">4.000 Lumpz</p>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Serviço 4 - Visível */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
                  alt="Serviço"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <HeartIcon className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary mr-2">P</div>
                  <p className="text-sm text-muted-foreground">Patricia Alves</p>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Tutorial em Vídeo</h3>
                <div className="flex mb-3">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <StarIcon key={i} className={`h-4 w-4 ${i < 4 ? 'text-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">4.1 (15)</p>
                  <p className="text-xs text-muted-foreground ml-auto">15 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-base font-semibold text-primary">2.800 Lumpz</p>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Serviço 5 - Borrado */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 relative">
              <div className="absolute inset-0 backdrop-blur-[12px] bg-background/40 z-10 flex flex-col items-center justify-center">
                <LockIcon className="h-8 w-8 text-primary mb-3" />
                <p className="text-lg font-semibold text-foreground mb-2">Conteúdo Exclusivo</p>
                <p className="text-sm text-muted-foreground mb-4 px-6 text-center">Cadastre-se para acessar todos os serviços disponíveis</p>
                <Link href="/cadastro">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                    Criar conta grátis
                  </button>
                </Link>
              </div>
              <div>
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 w-32 bg-muted rounded mb-3"></div>
                  <div className="h-5 w-48 bg-muted rounded mb-2"></div>
                  <div className="h-4 w-full bg-muted rounded mb-3"></div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="h-5 w-20 bg-muted rounded"></div>
                    <div className="h-8 w-24 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serviço 6 - Borrado */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 relative">
              <div className="absolute inset-0 backdrop-blur-[12px] bg-background/40 z-10"></div>
              <div>
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 w-32 bg-muted rounded mb-3"></div>
                  <div className="h-5 w-48 bg-muted rounded mb-2"></div>
                  <div className="h-4 w-full bg-muted rounded mb-3"></div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="h-5 w-20 bg-muted rounded"></div>
                    <div className="h-8 w-24 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serviço 7 - Borrado */}
            <div className="hidden md:block bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 relative">
              <div className="absolute inset-0 backdrop-blur-[12px] bg-background/40 z-10"></div>
              <div>
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 w-32 bg-muted rounded mb-3"></div>
                  <div className="h-5 w-48 bg-muted rounded mb-2"></div>
                  <div className="h-4 w-full bg-muted rounded mb-3"></div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="h-5 w-20 bg-muted rounded"></div>
                    <div className="h-8 w-24 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serviço 8 - Borrado */}
            <div className="hidden md:block bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 relative">
              <div className="absolute inset-0 backdrop-blur-[12px] bg-background/40 z-10"></div>
              <div>
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 w-32 bg-muted rounded mb-3"></div>
                  <div className="h-5 w-48 bg-muted rounded mb-2"></div>
                  <div className="h-4 w-full bg-muted rounded mb-3"></div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="h-5 w-20 bg-muted rounded"></div>
                    <div className="h-8 w-24 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/cadastro">
              <button className="clipup-btn">
                Ver todos os serviços disponíveis
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Depoimentos de freelancers */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Histórias de sucesso</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Depoimentos de criadores que transformaram suas vidas com a plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Depoimento 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="mb-6">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-lg italic mb-4">
                "Comecei apenas para uma renda extra nos fins de semana. Em 3 meses já estava ganhando mais que no meu trabalho principal."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">L</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Lucas Ferreira</p>
                  <p className="text-sm text-muted-foreground">São Paulo, SP</p>
                </div>
              </div>
            </div>
            
            {/* Depoimento 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="mb-6">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-lg italic mb-4">
                "A flexibilidade de horários me permitiu conciliar com a faculdade. Faço meus próprios horários e ganho melhor que estágios tradicionais."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">J</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Juliana Costa</p>
                  <p className="text-sm text-muted-foreground">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
            
            {/* Depoimento 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="mb-6">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-lg italic mb-4">
                "Gravei meus primeiros vídeos com insegurança, mas o feedback dos clientes me deu confiança. Hoje sou Top 10 da plataforma."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">A</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">André Santos</p>
                  <p className="text-sm text-muted-foreground">Curitiba, PR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-primary/10 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pronto para transformar seu smartphone em uma fonte de renda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Junte-se a milhares de criadores que estão monetizando seu tempo e talento com vídeos simples e autênticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/cadastro">
                <button className="clipup-btn">
                  Começar agora - É grátis!
                </button>
              </Link>
              <Link href="/faq-freelancers">
                <button className="clipup-btn-outline">
                  Dúvidas frequentes
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
              <h3 className="font-semibold text-foreground mb-4">Para freelancers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Como funciona</a></li>
                <li><a href="#" className="hover:text-primary transition">Tipos de vídeos</a></li>
                <li><a href="#" className="hover:text-primary transition">Pagamentos</a></li>
                <li><a href="#" className="hover:text-primary transition">Dicas e tutoriais</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Para empresas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Por que contratar</a></li>
                <li><a href="#" className="hover:text-primary transition">Como contratar</a></li>
                <li><a href="#" className="hover:text-primary transition">Casos de sucesso</a></li>
                <li><a href="#" className="hover:text-primary transition">Preços</a></li>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}