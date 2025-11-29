import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import FreelancerEarningsCalculator from "@/components/FreelancerEarningsCalculator";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { 
  Camera, Smartphone, CheckCircle, Video, 
  DollarSign, User, Lightbulb, Users, 
  CreditCard, Star, TrendingUp, Home,
  MapPin, MoreHorizontal, ArrowRight,
  Check, ShieldCheck, Package, MessageSquare,
  Heart, Sliders, ChevronDown, Lock
} from "lucide-react";
import { initAnimations } from "@/scripts/animations";
import logoSrc from "@/assets/lumpic-logo.png";
import img05 from "@/assets/05.png";
import img06 from "@/assets/06.png";
import img07 from "@/assets/07.png";
import img08 from "@/assets/08.png";
import img09 from "@/assets/09.png";
import img10 from "@/assets/10.png";
import img11 from "@/assets/11.png";
import img12 from "@/assets/12.png";
import img13 from "@/assets/13.png";

export default function FreelancerPage() {
  const [, setLocation] = useLocation();
  
  // Handlers para CTAs com captura de lead
  const handleCadastroCTA = useLeadCapture(() => setLocation('/cadastro'));
  const handleComoFuncionaCTA = useLeadCapture(() => {
    const el = document.getElementById('como-funciona');
    el?.scrollIntoView({ behavior: 'smooth' });
  });
  
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
                <button onClick={handleCadastroCTA} className="clipup-btn flex items-center">
                  Começar Agora
                </button>
                <button onClick={handleComoFuncionaCTA} className="clipup-btn-outline">
                  Como Funciona
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="gradient-border bg-card rounded-lg shadow-xl overflow-hidden parallax-card max-h-[500px]">
                <img 
                  src={img13}
                  alt="Pessoa gravando um vídeo com smartphone" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-black" />
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
                  <CheckCircle className="h-8 w-8 text-primary" />
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
                  <TrendingUp className="h-8 w-8 text-primary" />
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
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Entregou? Recebeu!</h3>
              <p className="text-muted-foreground text-center">
                Pagamentos rápidos e seguros em nossos créditos Lumpz, que podem ser convertidos em reais a qualquer momento.
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
                    <Star key={i} className="h-5 w-5 text-primary" />
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
                Ganhe créditos Lumpz por cada entrega aprovada. Converta em reais a qualquer momento.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button onClick={handleCadastroCTA} className="clipup-btn">
              Começar minha jornada
            </button>
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
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Gosta de aparecer em frente às câmeras</h3>
              <p className="text-muted-foreground text-center">
                Tem naturalidade e carisma para se expressar em vídeo, mesmo usando apenas seu smartphone.
              </p>
            </div>
            
            {/* Perfil 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Tem boa dicção e comunicação</h3>
              <p className="text-muted-foreground text-center">
                Consegue transmitir ideias de forma clara e envolvente, criando conexão com quem assiste.
              </p>
            </div>
            
            {/* Perfil 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Já grava vídeos para redes sociais</h3>
              <p className="text-muted-foreground text-center">
                Tem experiência criando conteúdo para plataformas digitais e quer monetizar sua habilidade.
              </p>
            </div>
            
            {/* Perfil 4 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Quer fazer uma grana extra no tempo livre</h3>
              <p className="text-muted-foreground text-center">
                Busca uma forma de complementar sua renda com flexibilidade de horários e sem compromisso fixo.
              </p>
            </div>
            
            {/* Perfil 5 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Quer trabalhar de casa</h3>
              <p className="text-muted-foreground text-center">
                Prefere a comodidade de produzir conteúdo no conforto do seu lar, sem precisar se deslocar.
              </p>
            </div>
            
            {/* Perfil 6 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Quer trabalhar de qualquer lugar do mundo</h3>
              <p className="text-muted-foreground text-center">
                Busca liberdade geográfica para criar conteúdo enquanto viaja ou mora em diferentes regiões.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button onClick={handleCadastroCTA} className="clipup-btn">
              Isso é para mim! Quero começar
            </button>
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
                <Video className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Depoimentos em vídeo</h3>
            </div>
            
            {/* Tipo 2 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Package className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Unboxings de produtos</h3>
            </div>
            
            {/* Tipo 3 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Reações e reviews</h3>
            </div>
            
            {/* Tipo 4 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <User className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Vídeos UGC</h3>
            </div>
            
            {/* Tipo 5 */}
            <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition text-center stagger-item">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                <MoreHorizontal className="h-7 w-7 text-primary" />
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
            <button onClick={handleCadastroCTA} className="clipup-btn-outline">
              Ver mais categorias e exemplos
            </button>
          </div>
        </div>
      </section>
      
      {/* Simulador de Ganhos */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FreelancerEarningsCalculator />
        </div>
      </section>
      
      {/* Sistema Lumpz */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/5">
              <div className="text-left fade-in-element">
                <h2 className="clipup-section-title mb-6">Conheça o sistema de créditos Lumpz</h2>
                <p className="text-lg text-muted-foreground mt-4 mb-6">
                  Um sistema de créditos simples e transparente que transforma seu trabalho em renda real, sem complicações ou intermediários.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Você recebe em créditos Lumpz a cada entrega aprovada</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Conversão transparente: 1 crédito Lumpz = R$ 2,00</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Saque seus créditos em reais quando quiser</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="ml-3 text-foreground">Suporte dedicado para resolver qualquer dúvida ou problema</p>
                  </div>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-4">Como funciona:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="ml-2 text-sm text-muted-foreground">Você entrega o vídeo e recebe seus créditos Lumpz instantaneamente após aprovação</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="ml-2 text-sm text-muted-foreground">Acumule seus créditos na carteira digital dentro da plataforma</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <p className="ml-2 text-sm text-muted-foreground">Saque em reais com mínimo de 100 créditos Lumpz acumulados, totalmente grátis</p>
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
                        <CreditCard className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-foreground">Créditos Lumpz</h3>
                        <p className="text-sm text-muted-foreground">Sistema de créditos transparente</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 px-3 py-2 rounded-lg">
                      <p className="text-xs font-semibold text-primary">1 crédito Lumpz = R$ 2,00</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <div className="flex-1 bg-card/50 rounded-xl p-5 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Saldo atual</p>
                      <p className="text-2xl font-bold text-foreground">500 <span className="text-primary">créditos Lumpz</span></p>
                      <p className="text-sm text-muted-foreground mt-1">= R$ 1.000,00</p>
                    </div>
                    
                    <div className="flex-1 bg-card/50 rounded-xl p-5 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Pendente</p>
                      <p className="text-2xl font-bold text-foreground">50 <span className="text-primary">créditos Lumpz</span></p>
                      <p className="text-sm text-muted-foreground mt-1">= R$ 100,00</p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 rounded-xl p-6 border border-primary/10 mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Completo controle e transparência</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Acompanhe cada crédito Lumpz que você ganha. Nenhuma taxa escondida, nada retido. Você controla seus ganhos 100%.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                      <p className="text-sm text-foreground">
                        Saque seus créditos em reais quando precisar
                      </p>
                      <div className="mt-3 sm:mt-0">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                          100% Seguro
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>+3200 creators cadastrados</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Avaliação 4.8/5</span>
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-4 w-4 mr-1 text-muted-foreground" />
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
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Invista em boa iluminação</h3>
              <p className="text-muted-foreground">
                Mesmo com equipamentos simples, uma boa iluminação faz toda diferença na qualidade final do vídeo.
              </p>
            </div>
            
            {/* Dica 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Grave em ambientes silenciosos</h3>
              <p className="text-muted-foreground">
                Um áudio limpo é tão importante quanto a imagem. Procure um lugar tranquilo para fazer suas gravações.
              </p>
            </div>
            
            {/* Dica 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
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
                  src={img06} 
                  alt="Pessoa fazendo depoimento para câmera"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Depoimentos</h3>
                <p className="text-muted-foreground mb-4">
                  Vídeos curtos falando sobre experiências positivas com produtos ou serviços.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">10-20 créditos Lumpz</span>
                  <span className="text-sm text-muted-foreground">Alta demanda</span>
                </div>
              </div>
            </div>
            
            {/* Tipo 2 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src={img05} 
                  alt="Pessoa fazendo unboxing de produto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Unboxings</h3>
                <p className="text-muted-foreground mb-4">
                  Abertura e primeira impressão de produtos, destacando características.
                </p>
                  <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">15-30 créditos Lumpz</span>
                  <span className="text-sm text-muted-foreground">Média demanda</span>
                </div>
              </div>
            </div>
            
            {/* Tipo 3 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src={img07} 
                  alt="Publicidade e campanha promocional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Promocionais</h3>
                <p className="text-muted-foreground mb-4">
                  Conteúdo persuasivo para campanhas publicitárias e lançamentos.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">20-50 créditos Lumpz</span>
                  <span className="text-sm text-muted-foreground">Alta demanda</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button onClick={handleCadastroCTA} className="clipup-btn-outline">
              Ver todos os tipos de vídeos
            </button>
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
            {/* Removed filter buttons for minimalista approach */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
            {/* Serviço 1 - Visível */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={img08} 
                  alt="Vídeo Depoimento Profissional"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <Heart className="h-4 w-4 text-muted-foreground" />
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
                      <Star key={i} className="h-4 w-4 text-primary" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">4.8 (32)</p>
                  <p className="text-xs text-muted-foreground ml-auto">32 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-base font-semibold text-primary">2.500 créditos Lumpz</p>
                    <p className="text-xs text-muted-foreground mt-0.5">R$ 5.000,00</p>
                  </div>
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
                  src={img09} 
                  alt="Unboxing de Produtos"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <Heart className="h-4 w-4 text-red-500 fill-red-500" />
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
                      <Star key={i} className="h-4 w-4 text-primary" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">5.0 (18)</p>
                  <p className="text-xs text-muted-foreground ml-auto">18 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-base font-semibold text-primary">3.200 créditos Lumpz</p>
                    <p className="text-xs text-muted-foreground mt-0.5">R$ 6.400,00</p>
                  </div>
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
                  src={img10} 
                  alt="Vídeo Promocional para Redes Sociais"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <Heart className="h-4 w-4 text-muted-foreground" />
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
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">4.0 (26)</p>
                  <p className="text-xs text-muted-foreground ml-auto">26 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-base font-semibold text-primary">4.000 créditos Lumpz</p>
                    <p className="text-xs text-muted-foreground mt-0.5">R$ 8.000,00</p>
                  </div>
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
                  src={img11} 
                  alt="Tutorial em Vídeo"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <Heart className="h-4 w-4 text-muted-foreground" />
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
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">4.1 (15)</p>
                  <p className="text-xs text-muted-foreground ml-auto">15 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-base font-semibold text-primary">2.800 créditos Lumpz</p>
                    <p className="text-xs text-muted-foreground mt-0.5">R$ 5.600,00</p>
                  </div>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
            
            
            {/* Serviço 6 - Conteúdo Exclusivo */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative">
              <div className="absolute inset-0 backdrop-blur-[8px] bg-gradient-to-br from-primary/5 to-primary/10 z-10 flex flex-col items-center justify-center">
                <Lock className="h-10 w-10 text-primary mb-4" />
                <p className="text-lg font-semibold text-foreground mb-2 text-center">Conteúdo Exclusivo</p>
                <p className="text-sm text-muted-foreground mb-6 px-6 text-center">Cadastre-se para acessar todos os serviços disponíveis</p>
                <button onClick={handleCadastroCTA} className="px-5 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition">
                  Criar conta grátis
                </button>
              </div>
              <div>
                <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50"></div>
                <div className="p-4">
                  <div className="h-4 w-32 bg-muted rounded mb-3"></div>
                  <div className="h-5 w-48 bg-muted rounded mb-2"></div>
                </div>
              </div>
            </div>
            
            {/* Serviço 7 - Vídeo UGC para Empresas */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={img12} 
                  alt="Vídeo UGC para Empresas"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary mr-2">V</div>
                  <p className="text-sm text-muted-foreground">Vitória Costa</p>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Vídeo UGC para Empresas</h3>
                <div className="flex mb-3">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground ml-1">5.0 (28)</p>
                  <p className="text-xs text-muted-foreground ml-auto">28 vendas</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-base font-semibold text-primary">3.800 créditos Lumpz</p>
                    <p className="text-xs text-muted-foreground mt-0.5">R$ 7.600,00</p>
                  </div>
                  <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
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
                    <Star key={i} className="h-5 w-5 text-primary" />
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
                    <Star key={i} className="h-5 w-5 text-primary" />
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
                    <Star key={i} className="h-5 w-5 text-primary" />
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
              <button onClick={handleCadastroCTA} className="clipup-btn">
                Começar agora - É grátis!
              </button>
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
      <Footer />
    </div>
  );
}