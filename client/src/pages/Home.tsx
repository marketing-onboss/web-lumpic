import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import VideoLightbox from "@/components/VideoLightbox";
import ImageCarousel from "@/components/ImageCarousel";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { 
  CameraIcon, PencilIcon, ClockIcon, TrendingUpIcon, HeartIcon, 
  CheckCircleIcon, VideoIcon, DollarSignIcon, UserIcon, LightbulbIcon,
  UsersIcon, CreditCardIcon, PackageIcon, MessageSquareIcon, FlameIcon,
  BeakerIcon, SmartphoneIcon, BarChartIcon, ShieldCheckIcon, EyeIcon,
  LifeBuoyIcon, TargetIcon, GiftIcon, StarIcon
} from "lucide-react";
import { initAnimations } from "@/scripts/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSrc from "@/assets/lumpic-logo.png";
import img01 from "@/assets/01.png";
import img02 from "@/assets/02.jpg";
import img03 from "@/assets/03.png";
import img04 from "@/assets/04.png";

export default function Home() {
  const [, setLocation] = useLocation();
  
  // Inicializa as animações quando o componente montar
  useEffect(() => {
    initAnimations();
  }, []);
  
  // Hook de tradução
  const { t } = useLanguage();
  
  // Hook de captura de leads para CTAs
  const handleFreelancerCTA = useLeadCapture(() => setLocation('/freelancer'));
  const handleEmpresaCTA = useLeadCapture(() => setLocation('/empresa'));
  
  return (
    <div className="min-h-screen flex flex-col">
      <SharedNavbar currentPage="institucional" />
      
      {/* Hero Section - Nova versão */}
      <section className="pt-24 pb-12 hero-gradient relative">
        <div className="particles-container"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 fade-in-element">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Crie ou contrate vídeos originais com agilidade, confiança e retorno real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
                <button onClick={handleFreelancerCTA} className="clipup-btn flex items-center justify-center flex-1 w-full gap-2">
                  <span>✨</span>
                  {t('hero.freelancer.button')}
                </button>
                <button onClick={handleEmpresaCTA} className="clipup-btn-outline flex items-center justify-center flex-1 w-full gap-2">
                  <span>🚀</span>
                  {t('hero.business.button')}
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative max-h-[350px] sm:max-h-[400px] md:max-h-[500px]">
              <ImageCarousel 
                images={[
                  { src: img01, alt: 'Lumpic - Imagem 1' },
                  { src: img02, alt: 'Lumpic - Imagem 2' },
                  { src: img03, alt: 'Lumpic - Imagem 3' },
                  { src: img04, alt: 'Lumpic - Imagem 4' },
                ]}
                autoPlayInterval={5000}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Recursos Section - Baseado na imagem institucional.png */}
      <section className="py-16 bg-background bg-section-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">{t('features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 stagger-container">
            {/* Recurso 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <VideoIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Portfólio Profissional</h3>
              <p className="text-muted-foreground text-center">
                Exiba seus melhores trabalhos e destaque suas habilidades, compartilhando um perfil personalizado, que impressiona os clientes.
              </p>
            </div>
            
            {/* Recurso 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSignIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Pagamentos Seguros</h3>
              <p className="text-muted-foreground text-center">
                Sistema de pagamento protegido com os créditos Lumpz, garantindo segurança para freelancers e clientes em todas as transações.
              </p>
            </div>
            
            {/* Recurso 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Matchmaking Inteligente</h3>
              <p className="text-muted-foreground text-center">
                Encontre os clientes perfeitos para seu perfil através do nosso algoritmo baseado em habilidades e preferências.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona - Resumo para dois lados */}
      <section className="py-16 bg-card bg-section-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Como Funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Transforme seu talento em renda em apenas 4 passos simples
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 stagger-container">
            {/* Para criadores */}
            <div className="bg-card border border-border/50 rounded-xl p-8 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSignIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground ml-4">Para criadores</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">1</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Cadastre-se</span> na plataforma em poucos minutos
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">2</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Crie seu perfil</span> e defina suas habilidades
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">3</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Receba propostas</span> de trabalho personalizadas
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">4</p>
                  </div>
                    <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Receba em créditos Lumpz</span> e converta em reais facilmente
                    </p>
                </div>
              </div>
              
              <div className="mt-8">
                <button onClick={handleFreelancerCTA} className="clipup-btn w-full">
                  Quero ser um criador
                </button>
              </div>
            </div>
            
            {/* Para empresas */}
            <div className="bg-card border border-border/50 rounded-xl p-8 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <PackageIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground ml-4">Para empresas</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">1</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Cadastre-se</span> detalhando o tipo de vídeo que precisa
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">2</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Visualize portfólios</span> de criadores qualificados
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">3</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Selecione</span> os criadores ideais para seu projeto
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">4</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">Receba</span> vídeos autênticos que convertem
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <button onClick={handleEmpresaCTA} className="clipup-btn-outline w-full">
                  Quero contratar criadores
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Types Section */}
      <section className="py-16 bg-background bg-section-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Podemos te ajudar com tudo isso e muito mais!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Diversas categorias de conteúdo para atender às necessidades específicas do seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {/* Video Type 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PackageIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Unboxings com pessoas reais</h3>
              <p className="text-muted-foreground">
                Demonstrações genuínas de produtos que geram confiança e interesse nos consumidores.
              </p>
            </div>
            
            {/* Video Type 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquareIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Depoimentos que geram empatia</h3>
              <p className="text-muted-foreground">
                Histórias reais de usuários que amplificam a credibilidade da sua marca e aumentam conversões.
              </p>
            </div>
            
            {/* Video Type 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FlameIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Vídeos promocionais</h3>
              <p className="text-muted-foreground">
                Conteúdo otimizado para tráfego pago, com alto potencial de conversão e retorno sobre investimento.
              </p>
            </div>
            
            {/* Video Type 4 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BeakerIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Conteúdo UGC que performa</h3>
              <p className="text-muted-foreground">
                Vídeos no estilo User Generated Content, com aparência natural e alta taxa de engajamento.
              </p>
            </div>
            
            {/* Video Type 5 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <SmartphoneIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reviews naturais</h3>
              <p className="text-muted-foreground">
                Análises genuínas de produtos feitas especificamente para redes sociais e plataformas de vídeo.
              </p>
            </div>
            
            {/* Video Type 6 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Conteúdo para engajamento</h3>
              <p className="text-muted-foreground">
                Material pensado para conquistar audiências nas redes sociais e manter suas páginas ativas.
              </p>
            </div>
            
            {/* Video Type 7 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TargetIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Vídeos para nichos específicos</h3>
              <p className="text-muted-foreground">
                Conteúdo customizado para mercados especializados que demandam conhecimento técnico.
              </p>
            </div>
            
            {/* Video Type 8 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GiftIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lançamentos de produtos</h3>
              <p className="text-muted-foreground">
                Apresentações impactantes de novos produtos para gerar expectativa e primeiras vendas.
              </p>
            </div>
            
            {/* Video Type 9 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LifeBuoyIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tutoriais e instruções</h3>
              <p className="text-muted-foreground">
                Demonstrações claras de como usar produtos e serviços, reduzindo dúvidas e suporte.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof - Nova versão com estatísticas e marcas */}
      <section className="py-16 bg-card bg-section-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Resultados comprovados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Milhares de criadores e empresas já estão conectados pela nossa plataforma
            </p>
          </div>
          
          {/* Métricas principais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-container mb-16">
            {/* Metric 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex flex-col items-center">
                <VideoIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Vídeos entregues</h3>
                <p className="text-3xl font-bold text-primary">12.540+</p>
              </div>
            </div>
            
            {/* Metric 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex flex-col items-center">
                <UsersIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Criadores ativos</h3>
                <p className="text-3xl font-bold text-primary">3.200+</p>
              </div>
            </div>
            
            {/* Metric 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex flex-col items-center">
                <HeartIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Empresas satisfeitas</h3>
                <p className="text-3xl font-bold text-primary">1.870+</p>
              </div>
            </div>
            
            {/* Metric 4 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex flex-col items-center">
                <DollarSignIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Em créditos Lumpz distribuídos</h3>
                <p className="text-3xl font-bold text-primary">842K+</p>
              </div>
            </div>
          </div>
          
          {/* Logotipos em movimento */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground">Empresas que confiam em nossos criadores</h3>
              <p className="text-muted-foreground mt-2">Grandes marcas usam nossa plataforma para criar conteúdo viral</p>
            </div>
            
            <div className="relative overflow-hidden py-8 marquee-container">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 z-20 h-full w-12 left-overlay pointer-events-none"></div>
              <div className="absolute right-0 top-0 z-20 h-full w-12 right-overlay pointer-events-none"></div>

              <div className="marquee-track animate-marquee">
                <div className="marquee-group flex items-center space-x-8">
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Samsung</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Apple</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Google</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Meta</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Amazon</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Microsoft</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Coca-Cola</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Netflix</span>
                  </div>
                </div>

                {/* duplicate for seamless looping */}
                <div aria-hidden className="marquee-group flex items-center space-x-8">
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Samsung</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Apple</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Google</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Meta</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Amazon</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Microsoft</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Coca-Cola</span>
                  </div>
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border/40 bg-gradient-to-br from-card to-card/80 px-6 py-4 hover:border-primary/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="text-base font-bold text-foreground tracking-wide">Netflix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success rates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-border/30 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">dos clientes relatam aumento nas conversões com nossos vídeos</p>
            </div>
            
            <div className="bg-background border border-border/30 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="mb-2 text-4xl font-bold text-primary">92%</div>
              <p className="text-muted-foreground">das campanhas são aprovadas na primeira entrega</p>
            </div>
            
            <div className="bg-background border border-border/30 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="mb-2 text-4xl font-bold text-primary">3.8x</div>
              <p className="text-muted-foreground">é o aumento médio de ROI após usar nossa plataforma</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Section */}
      <section className="py-16 bg-background bg-section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Contrate com tranquilidade</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Sistema de proteção para garantir a qualidade das entregas e segurança para ambas as partes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
            {/* Security 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Dinheiro protegido</h3>
              <p className="text-muted-foreground text-center">
                Seu dinheiro só é liberado após a entrega do projeto ser aprovado e sua satisfação confirmada.
              </p>
            </div>
            
            {/* Security 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ClockIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Período de revisão</h3>
              <p className="text-muted-foreground text-center">
                Você tem até 7 dias para revisar e solicitar ajustes nos vídeos entregues.
              </p>
            </div>
            
            {/* Security 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Suporte dedicado</h3>
              <p className="text-muted-foreground text-center">
                Equipe disponível para ajudar em qualquer etapa do seu projeto, desde a contratação até a entrega.
              </p>
            </div>
            
            {/* Security 4 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <VideoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Total transparência</h3>
              <p className="text-muted-foreground text-center">
                Acompanhe cada etapa do processo em tempo real, com atualizações de status automatizadas.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-card/50 rounded-xl p-8 shadow-md border border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Garantia de qualidade Lumpic</h3>
            <p className="text-muted-foreground text-center">
              Se você não ficar satisfeito com a entrega, devolvemos 100% do seu investimento ou encontramos outro profissional sem custo adicional.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Depoimentos de clientes satisfeitos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Histórias reais de quem experimentou nossos serviços e obteve resultados tangíveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Testimonial 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="mb-6">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-lg italic mb-4">
                "Usei para criar uma campanha de Dia das Mães. Pedi 2 vídeos, recebi 4. Resultado? Dobrei o faturamento em uma semana."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">P</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Patrícia Mendes</p>
                  <p className="text-sm text-muted-foreground">Loja de presentes personalizados</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="mb-6">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-lg italic mb-4">
                "Fui atendido em 2 horas por um criador que parecia ler meus pensamentos. Já virou meu parceiro fixo para todas as campanhas."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">R</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Rafael Torres</p>
                  <p className="text-sm text-muted-foreground">Agência de tráfego digital</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="mb-6">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-lg italic mb-4">
                "A qualidade dos vídeos superou minhas expectativas. Conseguimos uma taxa de conversão 3x maior que nossa média anterior."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">M</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Mariana Costa</p>
                  <p className="text-sm text-muted-foreground">E-commerce de moda</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
              <button onClick={handleFreelancerCTA} className="clipup-btn-outline mx-auto">
                Ver mais depoimentos
              </button>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Planos simples, sem surpresas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Estrutura de preços transparente e acessível para qualquer orçamento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 stagger-container">
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow flex flex-col items-center text-center stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSignIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Pague por projeto</h3>
              <p className="text-muted-foreground">Sem mensalidades ou taxas escondidas. Você só paga pelo que usar, quando usar.</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow flex flex-col items-center text-center stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PackageIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Projetos com base em seu perfil</h3>
              <p className="text-muted-foreground">Começe seus primeiros projetos com Investimento acessível e alto retorno com sistema de "matching". ou seja o profissional com as qualidades que você deseja!</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow flex flex-col items-center text-center stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Valores transparentes</h3>
              <p className="text-muted-foreground">Cada serviço mostra exatamente o que está incluso, com total transparência no processo.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lumpz Currency Section */}
      <section className="py-16 bg-card bg-section-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Conheça os créditos Lumpz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Nosso sistema de créditos que simplifica transações e protege criadores e empresas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <DollarSignIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">Equivalência simples</h3>
                    <p className="text-muted-foreground">Cada crédito Lumpz equivale a aproximadamente R$ 2,00, facilitando a visualização de preços e o controle de orçamentos.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">Sistema de garantia</h3>
                    <p className="text-muted-foreground">O pagamento só é liberado para o criador após a aprovação do trabalho, garantindo segurança para ambas as partes.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CreditCardIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">Retiradas flexíveis</h3>
                    <p className="text-muted-foreground">Criadores podem sacar seus ganhos em créditos Lumpz para sua conta bancária a qualquer momento e sem burocracia.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <TrendingUpIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">Programa de recompensas</h3>
                    <p className="text-muted-foreground">Ganhe créditos Lumpz extras por entregas antecipadas, avaliações positivas e indicações bem-sucedidas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center px-4">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-75 rounded-3xl blur-lg"></div>
                <div className="relative bg-card rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Crédito Digital</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">1</span>
                    <span className="text-lg text-muted-foreground">Lumpz</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">R$ 2,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pronto para transformar - CTA */}
      <section className="py-16 bg-background bg-section-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-element">
          <h2 className="clipup-section-title">Pronto para transformar suas ideias em trabalhos incríveis?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 mb-10">
            Junte-se a uma comunidade crescente de criadores de vídeo e clientes que estão revolucionando o marketing digital.
          </p>
          <div className="flex justify-center">
              <button onClick={handleFreelancerCTA} className="clipup-btn flex items-center">
                Começar gratuitamente
              </button>
          </div>
        </div>
      </section>
      
      {/* Escolha como entrar - Baseado na imagem institucional.png */}
      <section className="py-16 bg-card bg-section-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Escolha como entrar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Selecione o tipo de conta para acessar a plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-container">
            {/* Opção Freelancer */}
            <div className="bg-background rounded-xl p-8 shadow-md border border-border hover:border-primary transition stagger-item">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sou Freelancer</h3>
              <p className="text-muted-foreground mb-6">
                Encontre novos clientes, expanda seu portfólio e aumente seus ganhos produzindo vídeos.
              </p>
              <button onClick={handleFreelancerCTA} className="clipup-btn w-full">
                Entrar como Freelancer
              </button>
            </div>
            
            {/* Opção Contratante */}
            <div className="bg-background rounded-xl p-8 shadow-md border border-border hover:border-primary transition stagger-item">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sou Contratante</h3>
              <p className="text-muted-foreground mb-6">
                Contrate profissionais talentosos para criar vídeos de qualidade para sua marca ou projeto.
              </p>
              <button onClick={handleEmpresaCTA} className="clipup-btn w-full">
                Entrar como Contratante
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}