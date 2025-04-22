import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import { 
  CameraIcon, PencilIcon, ClockIcon, TrendingUpIcon, HeartIcon, 
  CheckCircleIcon, VideoIcon, DollarSignIcon, UserIcon, LightbulbIcon,
  UsersIcon, CreditCardIcon, PackageIcon, MessageSquareIcon, FlameIcon,
  BeakerIcon, SmartphoneIcon, BarChartIcon, ShieldCheckIcon, EyeIcon,
  LifeBuoyIcon, TargetIcon, GiftIcon
} from "lucide-react";

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
                Chega de campanhas frias com conteúdo genérico! Contrate criadores reais, com histórias verdadeiras, que conectam sua marca com pessoas de verdade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/empresa">
                  <button className="clipup-btn flex items-center">
                    <span className="mr-2">👉</span> Quero contratar agora
                  </button>
                </Link>
                <Link href="/freelancer">
                  <button className="clipup-btn-outline">
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
                            <VideoIcon className="h-5 w-5 text-black" />
                          </div>
                          <div className="ml-3">
                            <p className="text-white text-sm font-medium">Encontre talentos</p>
                            <p className="text-white/70 text-xs">+ de 3200 criadores</p>
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
      
      {/* The Pain Point Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">😣 Nós sabemos como é difícil…</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Você já gastou tempo e dinheiro com:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Pain 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <UserIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Criadores que somem</h3>
              <p className="text-muted-foreground">
                Aqueles que desaparecem logo depois do briefing, deixando seu projeto no ar.
              </p>
            </div>
            
            {/* Pain 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <VideoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Vídeos sem emoção</h3>
              <p className="text-muted-foreground">
                Conteúdos que não capturam a essência da sua marca nem conectam com seu público.
              </p>
            </div>
            
            {/* Pain 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSignIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Agências caras</h3>
              <p className="text-muted-foreground">
                Que cobram um valor alto e entregam algo sem alma, distante do que você precisava.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-card rounded-xl p-8 shadow-md">
            <p className="text-lg text-foreground mb-4">
              A gente também já passou por isso. <br />
              Por isso criamos uma plataforma simples, rápida e feita pra quem precisa
            </p>
            <p className="text-xl font-bold text-primary"> de vídeo com verdade, sem enrolação.</p>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">⚙️ Em poucos cliques, o vídeo que você precisa</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition relative">
              <div className="clipup-icon-container mx-auto">
                <LightbulbIcon className="clipup-feature-icon" />
              </div>
              <div className="absolute -top-3 -right-3 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Você diz o que precisa</h3>
            </div>
            
            {/* Step 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition relative">
              <div className="clipup-icon-container mx-auto">
                <UsersIcon className="clipup-feature-icon" />
              </div>
              <div className="absolute -top-3 -right-3 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Recebe propostas</h3>
            </div>
            
            {/* Step 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition relative">
              <div className="clipup-icon-container mx-auto">
                <CheckCircleIcon className="clipup-feature-icon" />
              </div>
              <div className="absolute -top-3 -right-3 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Escolhe e aprova</h3>
            </div>
            
            {/* Step 4 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition relative">
              <div className="clipup-icon-container mx-auto">
                <CreditCardIcon className="clipup-feature-icon" />
              </div>
              <div className="absolute -top-3 -right-3 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">4</div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Só paga quando aprovar</h3>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-foreground">
              Tudo num só lugar. Sem sair da plataforma. Sem correr riscos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Video Types Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">🎥 Qual tipo de vídeo você precisa?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Type 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PackageIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">📦 Unboxings com pessoas reais</h3>
              <p className="text-muted-foreground">
                Demonstrações genuínas de produtos que geram confiança e interesse.
              </p>
            </div>
            
            {/* Video Type 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquareIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">🗣 Depoimentos que geram empatia</h3>
              <p className="text-muted-foreground">
                Histórias reais de usuários que amplificam a credibilidade da sua marca.
              </p>
            </div>
            
            {/* Video Type 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FlameIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">🔥 Vídeos promocionais</h3>
              <p className="text-muted-foreground">
                Conteúdo otimizado para tráfego pago, com alto potencial de conversão.
              </p>
            </div>
            
            {/* Video Type 4 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BeakerIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">🧪 Conteúdo UGC que performa</h3>
              <p className="text-muted-foreground">
                Vídeos no estilo User Generated Content, com aparência natural e alta conversão.
              </p>
            </div>
            
            {/* Video Type 5 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <SmartphoneIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">📲 Reviews naturais</h3>
              <p className="text-muted-foreground">
                Análises genuínas de produtos feitas especificamente para redes sociais.
              </p>
            </div>
            
            {/* Platform Feature 6 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">❤️ Para todos os objetivos</h3>
              <p className="text-muted-foreground">
                Seja para vender mais, gerar confiança ou humanizar sua marca — temos o criador certo para você.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">📊 Prova de que funciona</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Metric 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                <VideoIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Vídeos entregues</h3>
                <p className="text-3xl font-bold text-primary">12.540+</p>
              </div>
            </div>
            
            {/* Metric 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                <UsersIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Freelancers ativos</h3>
                <p className="text-3xl font-bold text-primary">3.200+</p>
              </div>
            </div>
            
            {/* Metric 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                <HeartIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Clientes satisfeitos</h3>
                <p className="text-3xl font-bold text-primary">1.870+</p>
              </div>
            </div>
            
            {/* Metric 4 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                <DollarSignIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Pagos com segurança</h3>
                <p className="text-3xl font-bold text-primary">R$ 842.000+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">🔒 Contrate com tranquilidade</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Security 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Dinheiro protegido</h3>
              <p className="text-muted-foreground text-center">
                Seu dinheiro só é liberado após a entrega do vídeo aprovado.
              </p>
            </div>
            
            {/* Security 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ClockIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Período de revisão</h3>
              <p className="text-muted-foreground text-center">
                Você tem até 7 dias para revisar e pedir ajustes.
              </p>
            </div>
            
            {/* Security 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Suporte dedicado</h3>
              <p className="text-muted-foreground text-center">
                Ajuda em qualquer etapa do seu projeto.
              </p>
            </div>
            
            {/* Security 4 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <VideoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Total transparência</h3>
              <p className="text-muted-foreground text-center">
                Acompanhe cada etapa do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">💬 Quem contratou, recomenda:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md">
              <p className="text-foreground text-lg italic mb-4">
                "Usei pra criar uma campanha de Dia das Mães. Pedi 2 vídeos, recebi 4. Resultado? Dobrei o faturamento em uma semana."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">P</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Patrícia</p>
                  <p className="text-sm text-muted-foreground">Loja de presentes personalizados</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md">
              <p className="text-foreground text-lg italic mb-4">
                "Fui atendido em 2h por um criador que parecia ler meus pensamentos. Já virou meu parceiro fixo."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">R</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Rafael</p>
                  <p className="text-sm text-muted-foreground">Agência de tráfego</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">💸 Planos simples, sem surpresas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSignIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Pague por projeto</h3>
              <p className="text-muted-foreground">Sem mensalidades ou taxas escondidas</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PackageIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Vídeos a partir de 10 Lumpz</h3>
              <p className="text-muted-foreground">Apenas R$ 49 para começar</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Valores transparentes</h3>
              <p className="text-muted-foreground">Cada serviço mostra exatamente o que está incluso</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="#">
              <button className="clipup-btn-outline flex items-center mx-auto">
                <span className="mr-2">📖</span> Ver exemplos e preços
              </button>
            </Link>
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
                  <div className="h-28 w-28 bg-primary rounded-full flex items-center justify-center text-black font-bold text-3xl shadow-lg">
                    Lumpz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">🧲 Seu próximo vídeo pode mudar sua campanha</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            🎥 Já pensou em lançar aquela campanha com um vídeo incrível feito por alguém que entende seu público?<br />
            🤝 Aqui tem criadores prontos pra transformar sua ideia em vídeo — <span className="font-bold text-primary">ainda hoje.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/empresa">
              <button className="clipup-btn flex items-center">
                <span className="mr-2">👉</span> Quero contratar agora
              </button>
            </Link>
            <Link href="/freelancer">
              <button className="clipup-btn-outline flex items-center">
                <span className="mr-2">📂</span> Ver portfólios
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