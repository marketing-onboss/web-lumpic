import { Link } from "wouter";
import { useEffect } from "react";
import SharedNavbar from "@/components/SharedNavbar";
import { 
  CheckCircle, Video, DollarSign, User, Lightbulb,
  Users, CreditCard, Star, BarChart, ShieldCheck, 
  LifeBuoy, Target, TrendingUp, MessageSquare, Package,
  Eye, Gift, ChevronUp, ChevronDown, Sliders, ShoppingBag
} from "lucide-react";
import { initAnimations } from "@/scripts/animations";

export default function EmpresaPage() {
  // Inicializa as animações quando o componente montar
  useEffect(() => {
    initAnimations();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SharedNavbar currentPage="empresa" />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 hero-gradient relative">
        <div className="particles-container"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 fade-in-element">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Vídeos autênticos que convertem muito mais que campanhas genéricas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Contrate criadores reais para produzir vídeos genuínos que geram maior engajamento, confiança e vendas para sua marca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/criar-projeto">
                  <button className="clipup-btn flex items-center">
                    Contratar agora
                  </button>
                </Link>
                <Link href="#como-funciona">
                  <button className="clipup-btn-outline">
                    Como funciona
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="gradient-border bg-card rounded-lg shadow-xl overflow-hidden parallax-card">
                <img 
                  src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Vídeo promocional em produção" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                          <Video className="h-5 w-5 text-black" />
                        </div>
                        <div className="ml-3">
                          <p className="text-white text-sm font-medium">+3.200 criadores</p>
                          <p className="text-white/70 text-xs">Prontos para sua marca</p>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-white text-sm font-medium">Contrate hoje</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Por que vídeos autênticos? */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Por que vídeos autênticos vendem mais?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Dados comprovam que conteúdos genuínos e personalizados geram resultados superiores às campanhas tradicionais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 stagger-container">
            {/* Razão 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Maior taxa de conversão</h3>
              <p className="text-muted-foreground text-center">
                Vídeos autênticos convertem até 3x mais que anúncios tradicionais, gerando melhor ROI para suas campanhas.
              </p>
            </div>
            
            {/* Razão 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Maior engajamento</h3>
              <p className="text-muted-foreground text-center">
                Conteúdo gerado por usuários reais obtém 2.7x mais engajamento e é compartilhado com mais frequência.
              </p>
            </div>
            
            {/* Razão 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition card-glow stagger-item">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Maior credibilidade</h3>
              <p className="text-muted-foreground text-center">
                92% dos consumidores confiam mais em recomendações de pessoas reais do que em publicidade tradicional.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Como contratar é simples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Do briefing à entrega final em poucos passos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-container">
            {/* Passo 1 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  1
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-card"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Descreva seu projeto</h3>
              <p className="text-muted-foreground text-center">
                Explique o que você procura: tipo de vídeo, tom, duração e objetivos da sua campanha.
              </p>
            </div>
            
            {/* Passo 2 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  2
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-card"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Receba propostas</h3>
              <p className="text-muted-foreground text-center">
                Criadores interessados enviam ideias e preços para seu projeto em até 24 horas.
              </p>
            </div>
            
            {/* Passo 3 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  3
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-card"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Selecione os favoritos</h3>
              <p className="text-muted-foreground text-center">
                Escolha os criadores ideais para o seu projeto baseado em perfil, portfólio e orçamento.
              </p>
            </div>
            
            {/* Passo 4 */}
            <div className="flex flex-col items-center stagger-item">
              <div className="relative mb-8">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  4
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-accent rounded-full border-2 border-card"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Receba e aprove</h3>
              <p className="text-muted-foreground text-center">
                Vídeos são entregues dentro do prazo. Você só paga quando aprovar o resultado final.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/criar-projeto">
              <button className="clipup-btn">
                Iniciar meu projeto
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categorias de vídeos */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">O que você pode criar conosco</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Diversos formatos para atender diferentes objetivos de marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Categoria 1 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Depoimento de cliente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Depoimentos de usuários</h3>
                <p className="text-muted-foreground mb-4">
                  Histórias reais de pessoas que usaram seu produto e tiveram resultados positivos.
                </p>
                <p className="text-sm text-primary font-medium">
                  Ideal para: Aumentar credibilidade e confiança
                </p>
              </div>
            </div>
            
            {/* Categoria 2 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                  alt="Unboxing de produto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Unboxings e demonstrações</h3>
                <p className="text-muted-foreground mb-4">
                  Vídeos mostrando a primeira impressão, abertura e uso do produto.
                </p>
                <p className="text-sm text-primary font-medium">
                  Ideal para: Lançamentos e produtos físicos
                </p>
              </div>
            </div>
            
            {/* Categoria 3 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-40 bg-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Vídeo social media"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Conteúdo para redes sociais</h3>
                <p className="text-muted-foreground mb-4">
                  Vídeos curtos e dinâmicos, otimizados para diferentes plataformas.
                </p>
                <p className="text-sm text-primary font-medium">
                  Ideal para: Engajamento e presença digital
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/categorias">
              <button className="clipup-btn-outline">
                Ver todas as categorias
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Porque escolher Lumpic */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Por que escolher a Lumpic</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Diferenciais que tornam nossa plataforma a escolha ideal para suas campanhas de vídeo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
            {/* Diferencial 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Público-alvo específico</h3>
              <p className="text-muted-foreground">
                Conectamos você a criadores que têm o perfil ideal do seu cliente, tornando o conteúdo mais relevante.
              </p>
            </div>
            
            {/* Diferencial 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Preços transparentes</h3>
              <p className="text-muted-foreground">
                Sem taxas escondidas ou contratos longos. Você paga apenas pelo que contrata.
              </p>
            </div>
            
            {/* Diferencial 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Garantia de qualidade</h3>
              <p className="text-muted-foreground">
                Todos os criadores são avaliados e só recebem se você aprovar o trabalho final.
              </p>
            </div>
            
            {/* Diferencial 4 */}
            <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LifeBuoy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Suporte especializado</h3>
              <p className="text-muted-foreground">
                Nossa equipe ajuda em todas as etapas, desde a definição do briefing até a entrega final.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Showcase do talento */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Nossos melhores talentos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Conheça alguns dos criadores disponíveis para seu próximo projeto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 stagger-container">
            {/* Criador 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">M</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Marcos Silva</p>
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary" />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">4.9</span>
                  </div>
                </div>
                <div className="ml-auto bg-primary/10 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-primary">Top 10</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Especialista em vídeos de tecnologia e apps, com foco em demonstrações e tutoriais.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Tecnologia</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Tutorial</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Explicativo</span>
              </div>
              <button className="w-full py-2 border border-primary text-primary text-sm rounded-md hover:bg-primary/10 transition">
                Ver portfólio
              </button>
            </div>
            
            {/* Criador 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">L</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Luana Santos</p>
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary" />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">4.8</span>
                  </div>
                </div>
                <div className="ml-auto bg-primary/10 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-primary">Top 5</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Especialista em lifestyle e moda, cria unboxings e reviews com alto engajamento.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Moda</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Lifestyle</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Unboxing</span>
              </div>
              <button className="w-full py-2 border border-primary text-primary text-sm rounded-md hover:bg-primary/10 transition">
                Ver portfólio
              </button>
            </div>
            
            {/* Criador 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">F</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Felipe Costa</p>
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary" />
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">4.9</span>
                  </div>
                </div>
                <div className="ml-auto bg-primary/10 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-primary">Top 3</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Especialista em fitness e suplementos, com alta capacidade de conversão em vídeos.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Fitness</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Saúde</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">Depoimento</span>
              </div>
              <button className="w-full py-2 border border-primary text-primary text-sm rounded-md hover:bg-primary/10 transition">
                Ver portfólio
              </button>
            </div>
          </div>
          
          <div className="bg-card/40 rounded-xl p-8 text-center shadow-md border border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Mais de 3.200 criadores disponíveis para sua marca</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nosso marketplace conta com talentos em diversas áreas, categorias e nichos. Encontre o profissional ideal para transmitir sua mensagem.
            </p>
            <Link href="/catalogo">
              <button className="clipup-btn">
                Explorar o catálogo completo
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">O que dizem nossos clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Depoimentos de empresas que transformaram suas estratégias com a Lumpic
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
              <p className="text-foreground text-lg italic mb-6">
                "Nossa taxa de conversão aumentou 217% após substituirmos os anúncios tradicionais por vídeos dos criadores da plataforma."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">T</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Thiago Mendes</p>
                  <p className="text-sm text-muted-foreground">E-commerce de eletrônicos</p>
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
              <p className="text-foreground text-lg italic mb-6">
                "A facilidade de encontrar criadores que realmente entendem do nosso nicho foi o diferencial. Resultados impressionantes já na primeira campanha."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">C</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Carolina Alves</p>
                  <p className="text-sm text-muted-foreground">Marca de cosméticos naturais</p>
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
              <p className="text-foreground text-lg italic mb-6">
                "Estamos economizando 60% em custos de produção e obtendo resultados 3x melhores. A Lumpic revolucionou nossa estratégia de marketing."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">P</div>
                <div className="ml-4">
                  <p className="font-medium text-foreground">Pedro Oliveira</p>
                  <p className="text-sm text-muted-foreground">Startup de tecnologia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Marketplace de Serviços */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">O que empresas estão contratando</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Explore os serviços mais requisitados por marcas como a sua
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 stagger-container">
            {/* Serviço 1 - visível */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition border border-border hover:border-primary stagger-item">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-foreground">Unboxing de Produto</p>
                    <p className="text-sm text-muted-foreground">Alta demanda</p>
                  </div>
                </div>
                <div className="bg-accent/20 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-accent-foreground">42 Lumpz</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Vídeos de desembalagem e primeira impressão do produto, ideal para lançamentos.
              </p>
              <Link href="/servico/unboxing">
                <button className="w-full py-2 border border-primary text-primary text-sm rounded-md hover:bg-primary/10 transition">
                  Ver detalhes
                </button>
              </Link>
            </div>
            
            {/* Serviço 2 - visível */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition border border-border hover:border-primary stagger-item">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-foreground">Depoimento de Cliente</p>
                    <p className="text-sm text-muted-foreground">Sempre em alta</p>
                  </div>
                </div>
                <div className="bg-accent/20 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-accent-foreground">35 Lumpz</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Depoimentos gravados por usuários reais do seu produto ou serviço.
              </p>
              <Link href="/servico/depoimento">
                <button className="w-full py-2 border border-primary text-primary text-sm rounded-md hover:bg-primary/10 transition">
                  Ver detalhes
                </button>
              </Link>
            </div>
            
            {/* Serviço 3 - visível */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition border border-border hover:border-primary stagger-item">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-foreground">Tutorial de Uso</p>
                    <p className="text-sm text-muted-foreground">Popular</p>
                  </div>
                </div>
                <div className="bg-accent/20 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-accent-foreground">38 Lumpz</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Demonstrações passo a passo de como usar seu produto e aproveitar todos os recursos.
              </p>
              <Link href="/servico/tutorial">
                <button className="w-full py-2 border border-primary text-primary text-sm rounded-md hover:bg-primary/10 transition">
                  Ver detalhes
                </button>
              </Link>
            </div>
            
            {/* Serviços 4-6 borrados */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition border border-border hover:border-primary stagger-item relative overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-md bg-background/70 z-10 flex flex-col items-center justify-center">
                <p className="font-semibold text-foreground mb-2">Conteúdo exclusivo</p>
                <p className="text-sm text-muted-foreground mb-4 text-center px-6">Cadastre-se para ver todos os serviços disponíveis</p>
                <Link href="/cadastro">
                  <button className="clipup-btn-sm">
                    Criar conta grátis
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-between mb-4 blur-sm">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-foreground">Review Comparativo</p>
                    <p className="text-sm text-muted-foreground">Tendência</p>
                  </div>
                </div>
                <div className="bg-accent/20 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-accent-foreground">45 Lumpz</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 blur-sm">
                Comparação do seu produto com concorrentes, destacando vantagens e benefícios exclusivos.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition border border-border hover:border-primary stagger-item relative overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-md bg-background/70 z-10 flex flex-col items-center justify-center">
                <p className="font-semibold text-foreground mb-2">Conteúdo exclusivo</p>
                <p className="text-sm text-muted-foreground mb-4 text-center px-6">Cadastre-se para ver todos os serviços disponíveis</p>
                <Link href="/cadastro">
                  <button className="clipup-btn-sm">
                    Criar conta grátis
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-between mb-4 blur-sm">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-foreground">Q&A Especialista</p>
                    <p className="text-sm text-muted-foreground">Exclusivo</p>
                  </div>
                </div>
                <div className="bg-accent/20 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-accent-foreground">52 Lumpz</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 blur-sm">
                Perguntas e respostas sobre seu produto com experts da área que utilizam regularmente.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition border border-border hover:border-primary stagger-item relative overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-md bg-background/70 z-10 flex flex-col items-center justify-center">
                <p className="font-semibold text-foreground mb-2">Conteúdo exclusivo</p>
                <p className="text-sm text-muted-foreground mb-4 text-center px-6">Cadastre-se para ver todos os serviços disponíveis</p>
                <Link href="/cadastro">
                  <button className="clipup-btn-sm">
                    Criar conta grátis
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-between mb-4 blur-sm">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-foreground">Dicas e Hacks</p>
                    <p className="text-sm text-muted-foreground">Em crescimento</p>
                  </div>
                </div>
                <div className="bg-accent/20 px-3 py-1 rounded-full">
                  <p className="text-xs font-medium text-accent-foreground">40 Lumpz</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 blur-sm">
                Conteúdo criativo mostrando usos alternativos e dicas exclusivas para aproveitar melhor seu produto.
              </p>
            </div>
          </div>
          
          <div className="bg-card/40 rounded-xl p-8 text-center shadow-md border border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">+24 tipos de conteúdo disponíveis para sua marca</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cadastre-se hoje e acesse nosso catálogo completo de serviços e criadores verificados.
            </p>
            <Link href="/cadastro">
              <button className="clipup-btn">
                Criar conta gratuita
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Casos de Uso por Segmento */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Casos de sucesso por segmento</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Resultados reais obtidos por marcas que utilizam nossos criadores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 stagger-container">
            {/* Caso 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-foreground">E-commerce</h3>
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                Vídeos de unboxing aumentaram o tempo médio na página em 36%
              </p>
              <p className="text-muted-foreground mb-4">
                Uma loja de eletrônicos substituiu fotos por vídeos de unboxing e a taxa de devolução caiu 28%, enquanto o tempo de permanência na página e conversão aumentaram significativamente.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <p className="bg-primary/10 px-2 py-1 rounded-full text-primary text-xs font-medium">+217% em conversão</p>
              </div>
            </div>
            
            {/* Caso 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-foreground">Infoprodutos</h3>
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                Depoimentos reais geraram +185% em vendas no último lançamento
              </p>
              <p className="text-muted-foreground mb-4">
                Um curso online utilizou depoimentos de alunos reais em vez de atores, resultando em um aumento expressivo nas conversões e redução no custo de aquisição de clientes.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <p className="bg-primary/10 px-2 py-1 rounded-full text-primary text-xs font-medium">-32% no custo por lead</p>
              </div>
            </div>
            
            {/* Caso 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-4">
                <Package className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-foreground">Marcas D2C</h3>
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                Criadores com perfis alinhados geraram CAC 40% menor
              </p>
              <p className="text-muted-foreground mb-4">
                Uma marca de cosméticos naturais contratou criadores com perfil demográfico idêntico ao seu público-alvo, resultando em campanhas muito mais eficientes e autênticas.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <p className="bg-primary/10 px-2 py-1 rounded-full text-primary text-xs font-medium">+94% em engajamento</p>
              </div>
            </div>
            
            {/* Caso 4 */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition stagger-item">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-foreground">SaaS B2B</h3>
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                Vídeos de casos de uso reduziram ciclo de vendas em 47%
              </p>
              <p className="text-muted-foreground mb-4">
                Uma empresa de software B2B utilizou vídeos demonstrativos criados por usuários experientes, facilitando o entendimento do produto e acelerando decisões de compra.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <p className="bg-primary/10 px-2 py-1 rounded-full text-primary text-xs font-medium">+68% em trial-to-paid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simulador de Orçamento */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Simule seu investimento</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Calcule quanto você precisará investir para suas campanhas de vídeo
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-md border border-border mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-foreground mb-6">Selecione os tipos de vídeo que você precisa</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Package className="h-5 w-5 text-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-foreground">Unboxing de produto</p>
                        <p className="text-sm text-muted-foreground">Vídeo de desembalagem</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-primary font-medium mr-3">35 Lumpz</p>
                      <select className="bg-background border border-border rounded-md py-1 px-2 text-sm">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-foreground">Depoimento de cliente</p>
                        <p className="text-sm text-muted-foreground">Usuário real falando sobre o produto</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-primary font-medium mr-3">42 Lumpz</p>
                      <select className="bg-background border border-border rounded-md py-1 px-2 text-sm">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Video className="h-5 w-5 text-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-foreground">Tutorial de uso</p>
                        <p className="text-sm text-muted-foreground">Como usar o produto passo a passo</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-primary font-medium mr-3">38 Lumpz</p>
                      <select className="bg-background border border-border rounded-md py-1 px-2 text-sm">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-primary text-sm flex items-center">
                    <ChevronDown className="h-4 w-4 mr-1" /> Ver mais opções de vídeo
                  </button>
                  <button className="text-primary text-sm flex items-center">
                    <Sliders className="h-4 w-4 mr-1" /> Mais opções de personalização
                  </button>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Resumo do orçamento</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Unboxing (x1)</span>
                    <span>35 Lumpz</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Depoimento (x2)</span>
                    <span>84 Lumpz</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tutoriais (x1)</span>
                    <span>38 Lumpz</span>
                  </div>
                  <div className="h-px bg-border my-2"></div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-primary">157 Lumpz</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Valor aproximado: R$ 314</p>
                </div>
                <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition mb-3">
                  Solicitar orçamento detalhado
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Sem compromisso ou assinatura. Pague apenas pelos vídeos que aprovar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mini Guia de Briefing + ROI Estimado */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mini Guia */}
            <div>
              <div className="mb-8 fade-in-element">
                <h2 className="clipup-section-title mb-4">Mini guia de briefing eficaz</h2>
                <p className="text-lg text-muted-foreground">
                  Pontos-chave para preparar seu briefing e obter os melhores resultados
                </p>
              </div>
              
              <div className="space-y-6 stagger-container">
                <div className="flex stagger-item">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Defina seu objetivo principal</h3>
                    <p className="text-muted-foreground">
                      Quer gerar vendas ou reconhecimento? Deseja educar sobre o produto ou apenas engajar? Defina um objetivo claro e mensurável.
                    </p>
                  </div>
                </div>
                
                <div className="flex stagger-item">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Conheça sua audiência</h3>
                    <p className="text-muted-foreground">
                      Seu público é jovem, técnico ou aspiracional? Entender quem assitirá ao vídeo ajuda a definir o tom e a abordagem.
                    </p>
                  </div>
                </div>
                
                <div className="flex stagger-item">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Estabeleça o tom de voz</h3>
                    <p className="text-muted-foreground">
                      Descontraído e autêntico ou formal e técnico? Divertido ou sério? O tom deve refletir a personalidade de sua marca.
                    </p>
                  </div>
                </div>
                
                <div className="flex stagger-item">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Especifique pontos-chave</h3>
                    <p className="text-muted-foreground">
                      Liste até 3 características ou benefícios essenciais que devem ser destacados no vídeo para maior impacto.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/guia-briefing">
                  <button className="clipup-btn-outline">
                    Baixar template de briefing completo
                  </button>
                </Link>
              </div>
            </div>
            
            {/* ROI Estimado */}
            <div>
              <div className="mb-8 fade-in-element">
                <h2 className="clipup-section-title mb-4">ROI estimado com Lumpic</h2>
                <p className="text-lg text-muted-foreground">
                  Resultados médios obtidos por empresas que utilizam nossa plataforma
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-md border border-border mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center stagger-container">
                  <div className="stagger-item">
                    <h3 className="text-primary text-4xl font-bold mb-1">+217%</h3>
                    <p className="text-sm text-muted-foreground">em conversão</p>
                    <div className="h-1 w-1/2 bg-primary/20 rounded-full mx-auto mt-2 overflow-hidden">
                      <div className="h-full w-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="stagger-item">
                    <h3 className="text-primary text-4xl font-bold mb-1">-60%</h3>
                    <p className="text-sm text-muted-foreground">no custo de produção</p>
                    <div className="h-1 w-1/2 bg-primary/20 rounded-full mx-auto mt-2 overflow-hidden">
                      <div className="h-full w-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="stagger-item">
                    <h3 className="text-primary text-4xl font-bold mb-1">+2.7x</h3>
                    <p className="text-sm text-muted-foreground">de engajamento</p>
                    <div className="h-1 w-1/2 bg-primary/20 rounded-full mx-auto mt-2 overflow-hidden">
                      <div className="h-full w-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-primary/20">
                <div className="flex">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Calcule seu próprio ROI</h3>
                    <p className="text-muted-foreground mb-4">
                      Nossa calculadora avançada utiliza dados de campanhas reais para estimar o retorno específico para seu setor e tipo de campanha.
                    </p>
                    <Link href="/calculadora-roi">
                      <button className="clipup-btn-sm">
                        Acessar calculadora de ROI
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-element">
            <h2 className="clipup-section-title">Perguntas frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Tire suas dúvidas sobre como contratar nossos serviços
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 stagger-container">
            {/* Pergunta 1 */}
            <div className="bg-background rounded-xl p-6 shadow-md stagger-item">
              <h3 className="text-lg font-semibold text-foreground mb-2">Como sei se os criadores são confiáveis?</h3>
              <p className="text-muted-foreground">
                Todos os criadores passam por um processo de verificação e são avaliados constantemente. Além disso, você pode ver avaliações de outros clientes e exemplos de trabalhos anteriores.
              </p>
            </div>
            
            {/* Pergunta 2 */}
            <div className="bg-background rounded-xl p-6 shadow-md stagger-item">
              <h3 className="text-lg font-semibold text-foreground mb-2">Posso solicitar ajustes nos vídeos?</h3>
              <p className="text-muted-foreground">
                Sim, você tem direito a solicitar revisões conforme o plano contratado. Os criadores farão os ajustes necessários para atender às suas expectativas.
              </p>
            </div>
            
            {/* Pergunta 3 */}
            <div className="bg-background rounded-xl p-6 shadow-md stagger-item">
              <h3 className="text-lg font-semibold text-foreground mb-2">Quanto tempo leva para receber os vídeos?</h3>
              <p className="text-muted-foreground">
                O prazo médio é de 3 a 7 dias, dependendo da complexidade do projeto. Você pode definir prazos específicos ao criar seu projeto.
              </p>
            </div>
            
            {/* Pergunta 4 */}
            <div className="bg-background rounded-xl p-6 shadow-md stagger-item">
              <h3 className="text-lg font-semibold text-foreground mb-2">De quem são os direitos autorais dos vídeos?</h3>
              <p className="text-muted-foreground">
                Ao aprovar e pagar pelo vídeo, você adquire os direitos de uso comercial do conteúdo conforme os termos definidos no projeto.
              </p>
            </div>
            
            {/* Pergunta 5 */}
            <div className="bg-background rounded-xl p-6 shadow-md stagger-item">
              <h3 className="text-lg font-semibold text-foreground mb-2">O que é Lumpz e como funciona?</h3>
              <p className="text-muted-foreground">
                Lumpz é a moeda virtual da plataforma. 1 Lumpz equivale a R$ 5. Você adquire Lumpz para contratar criadores, garantindo segurança nas transações.
              </p>
            </div>
            
            {/* Pergunta 6 */}
            <div className="bg-background rounded-xl p-6 shadow-md stagger-item">
              <h3 className="text-lg font-semibold text-foreground mb-2">Posso cancelar um projeto em andamento?</h3>
              <p className="text-muted-foreground">
                Sim, mas as políticas de cancelamento variam de acordo com o estágio do projeto. Consulte nossos termos para detalhes completos.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/faq-completo">
              <button className="clipup-btn-outline">
                Ver todas as perguntas
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-primary/10 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Pronto para humanizar suas campanhas com vídeos autênticos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Junte-se a milhares de empresas que já transformaram sua estratégia de marketing com conteúdo gerado por pessoas reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/criar-projeto">
                <button className="clipup-btn">
                  Criar meu primeiro projeto
                </button>
              </Link>
              <Link href="/agendar-demo">
                <button className="clipup-btn-outline">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}