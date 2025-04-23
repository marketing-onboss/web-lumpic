import { Link } from "wouter";
import { useEffect } from "react";
import SharedNavbar from "@/components/SharedNavbar";
import VideoLightbox from "@/components/VideoLightbox";
import { 
  CameraIcon, PencilIcon, ClockIcon, TrendingUpIcon, HeartIcon, 
  CheckCircleIcon, VideoIcon, DollarSignIcon, UserIcon, LightbulbIcon,
  UsersIcon, CreditCardIcon, PackageIcon, MessageSquareIcon, FlameIcon,
  BeakerIcon, SmartphoneIcon, BarChartIcon, ShieldCheckIcon, EyeIcon,
  LifeBuoyIcon, TargetIcon, GiftIcon, StarIcon
} from "lucide-react";
import { initAnimations } from "@/scripts/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  // Inicializa as animações quando o componente montar
  useEffect(() => {
    initAnimations();
  }, []);
  
  // Hook de tradução
  const { t } = useLanguage();
  
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/freelancer">
                  <button className="clipup-btn flex items-center">
                    {t('hero.freelancer.button')}
                  </button>
                </Link>
                <Link href="/empresa">
                  <button className="clipup-btn-outline">
                    {t('hero.business.button')}
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <VideoLightbox
                thumbnailUrl="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Lumpic - A plataforma que conecta criadores reais a marcas autênticas"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Recursos Section - Baseado na imagem institucional.png */}
      <section className="py-16 bg-background">
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
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{t('features.feature1.title')}</h3>
              <p className="text-muted-foreground text-center">
                {t('features.feature1.description')}
              </p>
            </div>
            
            {/* Recurso 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSignIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{t('features.feature2.title')}</h3>
              <p className="text-muted-foreground text-center">
                {t('features.feature2.description')}
              </p>
            </div>
            
            {/* Recurso 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{t('features.feature3.title')}</h3>
              <p className="text-muted-foreground text-center">
                {t('features.feature3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona - Resumo para dois lados */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">{t('how.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              {t('how.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 stagger-container">
            {/* Para criadores */}
            <div className="bg-card border border-border/50 rounded-xl p-8 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSignIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground ml-4">{t('how.creators.title')}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">1</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step1.title')}</span> {t('how.step1.description')}
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">2</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step2.title')}</span> {t('how.step2.description')}
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">3</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step3.title')}</span> {t('how.step3.description')}
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">4</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step4.title')}</span> {t('how.step4.description')}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/freelancer">
                  <button className="clipup-btn w-full">
                    {t('how.creators.button')}
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Para empresas */}
            <div className="bg-card border border-border/50 rounded-xl p-8 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <PackageIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground ml-4">{t('how.business.title')}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">1</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step1.title')}</span> detalhando o tipo de vídeo que precisa
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">2</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step2.title')}</span> de criadores qualificados
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">3</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step3.title')}</span> os criadores ideais para seu projeto
                  </p>
                </div>
                
                <div className="flex">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <p className="text-primary text-xs font-bold">4</p>
                  </div>
                  <p className="text-muted-foreground ml-3">
                    <span className="text-foreground font-medium">{t('how.step4.title')}</span> vídeos autênticos que convertem
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/empresa">
                  <button className="clipup-btn-outline w-full">
                    {t('how.business.button')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Types Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Qual tipo de vídeo você precisa?</h2>
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
      <section className="py-16 bg-card">
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
                <h3 className="text-lg font-semibold text-foreground mb-1">Em Lumpz distribuídos</h3>
                <p className="text-3xl font-bold text-primary">842K+</p>
              </div>
            </div>
          </div>
          
          {/* Logotipos em movimento */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground">Empresas que confiam em nossos criadores</h3>
            </div>
            
            <div className="relative overflow-hidden py-6 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-background after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-background">
              <div className="flex animate-marquee space-x-12">
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
                </div>
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
                </div>
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
                </div>
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
                </div>
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
                </div>
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
                </div>
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
                </div>
                <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border/30 bg-card px-4 py-2">
                  <div className="h-6 w-24 rounded bg-muted/60"></div>
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
      <section className="py-16 bg-background">
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
                Seu dinheiro só é liberado após a entrega do vídeo aprovado e sua satisfação confirmada.
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
            <Link href="#">
              <button className="clipup-btn-outline mx-auto">
                Ver mais depoimentos
              </button>
            </Link>
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
              <h3 className="text-xl font-semibold text-foreground mb-2">Vídeos a partir de 10 Lumpz</h3>
              <p className="text-muted-foreground">Apenas R$ 20,00 para começar seus primeiros projetos. Investimento acessível com alto retorno.</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow flex flex-col items-center text-center stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Valores transparentes</h3>
              <p className="text-muted-foreground">Cada serviço mostra exatamente o que está incluso, sem cobranças extras ou surpresas desagradáveis.</p>
            </div>
          </div>
          
          <div className="mt-10 bg-card/50 p-8 rounded-xl shadow-md border border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Tabela comparativa de planos</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left">Tipo de vídeo</th>
                    <th className="py-4 px-6 text-center">Básico</th>
                    <th className="py-4 px-6 text-center">Padrão</th>
                    <th className="py-4 px-6 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6">Depoimento</td>
                    <td className="py-4 px-6 text-center">10 Lumpz</td>
                    <td className="py-4 px-6 text-center">20 Lumpz</td>
                    <td className="py-4 px-6 text-center">30 Lumpz</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">Unboxing</td>
                    <td className="py-4 px-6 text-center">15 Lumpz</td>
                    <td className="py-4 px-6 text-center">25 Lumpz</td>
                    <td className="py-4 px-6 text-center">40 Lumpz</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Promocional</td>
                    <td className="py-4 px-6 text-center">20 Lumpz</td>
                    <td className="py-4 px-6 text-center">35 Lumpz</td>
                    <td className="py-4 px-6 text-center">50 Lumpz</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="#">
              <button className="clipup-btn-outline mx-auto">
                Ver detalhes completos de preços
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Lumpz Currency Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Conheça o Lumpz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Nossa moeda digital exclusiva que simplifica transações e protege criadores e empresas
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
                    <p className="text-muted-foreground">Cada Lumpz equivale a aproximadamente R$ 2,00, facilitando a visualização de preços e o controle de orçamentos.</p>
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
                    <p className="text-muted-foreground">Criadores podem sacar seus ganhos em Lumpz para sua conta bancária a qualquer momento e sem burocracia.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <TrendingUpIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">Programa de recompensas</h3>
                    <p className="text-muted-foreground">Ganhe Lumpz extras por entregas antecipadas, avaliações positivas e indicações bem-sucedidas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-75 rounded-full blur-lg"></div>
                <div className="relative bg-card rounded-full p-8 w-72 h-72 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-6xl font-bold text-primary mb-2">Lumpz</div>
                  <div className="text-xl text-foreground mb-4">Moeda Digital</div>
                  <div className="flex items-center">
                    <span className="text-3xl font-semibold mr-2">1</span>
                    <span className="text-xl">Lumpz</span>
                    <span className="mx-2 text-muted-foreground">=</span>
                    <span className="text-3xl font-semibold mr-2">R$</span>
                    <span className="text-xl">2,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pronto para transformar - CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-element">
          <h2 className="clipup-section-title">Pronto para transformar suas ideias em vídeos incríveis?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 mb-10">
            Junte-se a uma comunidade crescente de criadores de vídeo e clientes que estão revolucionando o marketing digital.
          </p>
          <div className="flex justify-center">
            <Link href="/freelancer">
              <button className="clipup-btn flex items-center">
                Começar gratuitamente
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Escolha como entrar - Baseado na imagem institucional.png */}
      <section className="py-16 bg-card">
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
              <Link href="/freelancer">
                <button className="clipup-btn w-full">
                  Entrar como Freelancer
                </button>
              </Link>
            </div>
            
            {/* Opção Contratante */}
            <div className="bg-background rounded-xl p-8 shadow-md border border-border hover:border-primary transition stagger-item">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sou Contratante</h3>
              <p className="text-muted-foreground mb-6">
                Contrate profissionais talentosos para criar vídeos de qualidade para sua marca ou projeto.
              </p>
              <Link href="/empresa">
                <button className="clipup-btn w-full">
                  Entrar como Contratante
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Articles Preview - Placeholder */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Nosso blog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Dicas, tutoriais e cases de sucesso para criadores e empresas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Article 1 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-48 bg-muted/30"></div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">12 Abril, 2025</div>
                <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition">Como criar vídeos que convertem mais que anúncios tradicionais</h3>
                <p className="text-muted-foreground mb-4">
                  Aprenda técnicas para produzir conteúdo autêntico que gera mais engajamento e conversões.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">Ler mais</a>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-48 bg-muted/30"></div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">28 Março, 2025</div>
                <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition">5 dicas para fazer mais Lumpz como criador iniciante</h3>
                <p className="text-muted-foreground mb-4">
                  Estratégias testadas para maximizar seus ganhos na plataforma, mesmo começando agora.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">Ler mais</a>
              </div>
            </div>
            
            {/* Article 3 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-48 bg-muted/30"></div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">15 Março, 2025</div>
                <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition">Case: Como a Marca X triplicou conversões com vídeos da comunidade</h3>
                <p className="text-muted-foreground mb-4">
                  Estudo de caso detalhado sobre uma campanha que superou todas as expectativas com o Lumpic.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">Ler mais</a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a href="#" className="clipup-btn-outline inline-block">Ver todos os artigos</a>
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
                <span className="text-xl font-bold text-foreground">Lumpic</span>
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
              &copy; {new Date().getFullYear()} Lumpic. Todos os direitos reservados.
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