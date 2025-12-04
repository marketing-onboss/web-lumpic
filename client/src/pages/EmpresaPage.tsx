import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { 
  CheckCircle, Video, DollarSign, User, Lightbulb,
  Users, CreditCard, Star, BarChart, ShieldCheck, 
  LifeBuoy, Target, TrendingUp, MessageSquare, Package,
  Eye, Gift, ChevronUp, ChevronDown, Sliders, ShoppingBag
} from "lucide-react";
import { initAnimations } from "@/scripts/animations";
import logoSrc from "@/assets/lumpic-logo.png";

export default function EmpresaPage() {
  const [, setLocation] = useLocation();
  
  // Estados para o simulador
  const [numVideos, setNumVideos] = useState(10);
  const [avgLumpzPerVideo, setAvgLumpzPerVideo] = useState(80);
  const [orcamentoAds, setOrcamentoAds] = useState(5000); // Orçamento em ads
  
  // Cálculos do investimento em vídeos
  const totalLumpz = numVideos * avgLumpzPerVideo;
  const investimentoVideos = totalLumpz * 2; // 1 Lumpz = R$ 2
  const investimentoTotal = investimentoVideos + orcamentoAds;
  
  // MÉTRICAS REALISTAS DE TRÁFEGO PAGO COM VÍDEOS UGC vs IMAGENS/CRIATIVOS GENÉRICOS
  
  // CTR (Click-Through Rate): Vídeos UGC têm 3-5x mais CTR que imagens estáticas
  const ctrComVideo = 2.5; // 2.5% CTR (realista para vídeos UGC)
  const ctrSemVideo = 0.8; // 0.8% CTR (média do mercado com imagens)
  
  // CPC (Custo por Clique): Vídeos com bom engajamento = menor CPC
  const cpcComVideo = orcamentoAds / ((orcamentoAds * ctrComVideo) / 100); // CPC dinâmico baseado no CTR
  const cpcSemVideo = orcamentoAds / ((orcamentoAds * ctrSemVideo) / 100);
  
  // Impressões (alcance): Baseado no orçamento e CPM
  const cpmComVideo = 25; // CPM menor devido ao melhor engajamento
  const cpmSemVideo = 45; // CPM maior para criativos genéricos
  const impressoesComVideo = (orcamentoAds / cpmComVideo) * 1000;
  const impressoesSemVideo = (orcamentoAds / cpmSemVideo) * 1000;
  
  // Cliques: Baseado nas impressões e CTR
  const cliquesComVideo = Math.round((impressoesComVideo * ctrComVideo) / 100);
  const cliquesSemVideo = Math.round((impressoesSemVideo * ctrSemVideo) / 100);
  
  // Custo real por clique
  const cpcRealComVideo = (orcamentoAds / cliquesComVideo).toFixed(2);
  const cpcRealSemVideo = (orcamentoAds / cliquesSemVideo).toFixed(2);
  
  // Taxa de conversão: Vídeos UGC convertem melhor (mais confiança)
  const taxaConversaoComVideo = 3.5; // 3.5% de conversão (vídeos autênticos)
  const taxaConversaoSemVideo = 1.8; // 1.8% de conversão (imagens genéricas)
  
  // Conversões (vendas)
  const conversoesComVideo = Math.round((cliquesComVideo * taxaConversaoComVideo) / 100);
  const conversoesSemVideo = Math.round((cliquesSemVideo * taxaConversaoSemVideo) / 100);
  
  // Custo por aquisição (CPA)
  const cpaComVideo = (orcamentoAds / conversoesComVideo).toFixed(2);
  const cpaSemVideo = (orcamentoAds / conversoesSemVideo).toFixed(2);
  
  // Economia e ganhos
  const economiaCliques = cliquesComVideo - cliquesSemVideo;
  const ganhoConversoes = conversoesComVideo - conversoesSemVideo;
  const economiaPercentual = Math.round(((parseFloat(cpcRealSemVideo) - parseFloat(cpcRealComVideo)) / parseFloat(cpcRealSemVideo)) * 100);
  const ganhoConversaoPercentual = Math.round(((conversoesComVideo - conversoesSemVideo) / conversoesSemVideo) * 100);
  
  // Handlers para CTAs com captura de lead
  const handleContratarCTA = useLeadCapture(() => setLocation('/criar-projeto'));
  const handleCadastroCTA = useLeadCapture(() => setLocation('/cadastro'));
  const handleComoFuncionaCTA = useLeadCapture(() => {
    const el = document.getElementById('como-funciona');
    el?.scrollIntoView({ behavior: 'smooth' });
  });
  
  // ROI considerando ticket médio de R$ 150
  const ticketMedio = 150;
  const receitaComVideo = conversoesComVideo * ticketMedio;
  const receitaSemVideo = conversoesSemVideo * ticketMedio;
  const roiComVideo = Math.round(((receitaComVideo - investimentoTotal) / investimentoTotal) * 100);
  const roiSemVideo = Math.round(((receitaSemVideo - orcamentoAds) / orcamentoAds) * 100);
  
  // Formatar números
  const formatNumero = (valor: number) => {
    if (valor >= 1000000) {
      return (valor / 1000000).toFixed(1) + 'M';
    } else if (valor >= 1000) {
      return (valor / 1000).toFixed(0) + 'k';
    }
    return valor.toLocaleString('pt-BR');
  };
  
  const formatReceita = (valor: number) => {
    if (valor >= 1000000) {
      return (valor / 1000000).toFixed(1) + 'M';
    } else if (valor >= 1000) {
      return 'R$ ' + (valor / 1000).toFixed(1) + 'k';
    }
    return 'R$ ' + valor.toLocaleString('pt-BR');
  };
  
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
                Pare de Publicar Vídeos Genéricos em suas campanhas que só Queimam o Seu Orçamento de Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Acesse instantaneamente a Elite dos Criadores de Conteúdo validados. Não contrate apenas um "freelancer"; contrate um especialista em alta performance que entrega vídeos originais prontos para converter — sem a dor de cabeça de gerenciar amadores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleContratarCTA} className="clipup-btn flex items-center">
                  Contratar agora
                </button>
                <button onClick={handleComoFuncionaCTA} className="clipup-btn-outline">
                  Como funciona
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="gradient-border bg-card rounded-lg shadow-xl overflow-hidden parallax-card h-[320px] sm:h-[400px] md:h-[500px] bg-muted/10">
                <img 
                  src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Vídeo promocional em produção" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end pointer-events-none">
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
            <button onClick={handleContratarCTA} className="clipup-btn">
              Iniciar meu projeto
            </button>
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
            <button onClick={handleCadastroCTA} className="clipup-btn-outline">
              Ver todas as categorias
            </button>
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
                Contratos flexíveis sem compromisso de longo prazo. Você contrata quando precisa e paga conforme acordado.
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
            <button onClick={handleContratarCTA} className="clipup-btn">
              Explorar o catálogo completo
            </button>
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
                  <p className="text-xs font-medium text-accent-foreground">42 créditos Lumpz</p>
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
                  <p className="text-xs font-medium text-accent-foreground">35 créditos Lumpz</p>
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
                  <p className="text-xs font-medium text-accent-foreground">38 créditos Lumpz</p>
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
                <button onClick={handleCadastroCTA} className="clipup-btn-sm">
                  Criar conta grátis
                </button>
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
                  <p className="text-xs font-medium text-accent-foreground">45 créditos Lumpz</p>
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
                <button onClick={handleCadastroCTA} className="clipup-btn-sm">
                  Criar conta grátis
                </button>
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
                  <p className="text-xs font-medium text-accent-foreground">52 créditos Lumpz</p>
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
                <button onClick={handleCadastroCTA} className="clipup-btn-sm">
                  Criar conta grátis
                </button>
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
                  <p className="text-xs font-medium text-accent-foreground">40 créditos Lumpz</p>
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
            <button onClick={handleCadastroCTA} className="clipup-btn">
              Criar conta gratuita
            </button>
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
      
      {/* Simulador de Resultados */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 fade-in-element">
            <h2 className="clipup-section-title">Compare: Vídeos UGC vs Criativos Genéricos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              Veja como vídeos autênticos reduzem custo por clique e aumentam conversões
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg border border-border">
            {/* Configuração do Orçamento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Orçamento em Ads</label>
                  <span className="text-2xl font-bold text-primary">R$ {formatNumero(orcamentoAds)}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500"
                  value={orcamentoAds}
                  onChange={(e) => setOrcamentoAds(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <p className="text-xs text-muted-foreground mt-2">Este é o orçamento que você investirá em tráfego pago (Facebook, TikTok, etc)</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Vídeos + Criativos</label>
                  <span className="text-2xl font-bold text-primary">{numVideos}</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="30" 
                  value={numVideos}
                  onChange={(e) => setNumVideos(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <p className="text-xs text-muted-foreground mt-2">Investimento complementar: {totalLumpz} créditos Lumpz ≈ R$ {investimentoVideos.toLocaleString('pt-BR')}</p>
              </div>
            </div>
            
            {/* Comparação Lado a Lado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Com Vídeos UGC */}
              <div className="border-2 border-primary/30 rounded-lg p-5 bg-primary/5">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground ml-3">Com Vídeos UGC</h3>
                  <span className="ml-auto text-xs font-bold text-primary bg-primary/20 px-2 py-1 rounded-full">RECOMENDADO</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-background rounded p-3">
                    <p className="text-xs text-muted-foreground">Impressões</p>
                    <p className="text-xl font-bold text-foreground">{formatNumero(Math.round(impressoesComVideo))}</p>
                    <p className="text-xs text-muted-foreground mt-1">CPM: R$ {cpmComVideo}</p>
                  </div>
                  
                  <div className="bg-background rounded p-3">
                    <p className="text-xs text-muted-foreground">CTR (Taxa de Clique)</p>
                    <p className="text-xl font-bold text-primary">{ctrComVideo}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Cliques: {formatNumero(cliquesComVideo)}</p>
                  </div>
                  
                  <div className="bg-background rounded p-3">
                    <p className="text-xs text-muted-foreground">Custo por Clique (CPC)</p>
                    <p className="text-xl font-bold text-green-500">R$ {cpcRealComVideo}</p>
                    <p className="text-xs text-muted-foreground mt-1">{economiaPercentual}% mais barato</p>
                  </div>
                  
                  <div className="bg-background rounded p-3">
                    <p className="text-xs text-muted-foreground">Taxa de Conversão</p>
                    <p className="text-xl font-bold text-foreground">{taxaConversaoComVideo}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Vendas: {conversoesComVideo}</p>
                  </div>
                  
                  <div className="bg-background rounded p-3">
                    <p className="text-xs text-muted-foreground">Custo por Venda (CPA)</p>
                    <p className="text-xl font-bold text-green-500">R$ {cpaComVideo}</p>
                    <p className="text-xs text-muted-foreground mt-1">Mais eficiente</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-green-500/10 rounded p-3 border border-green-500/30">
                    <p className="text-xs text-muted-foreground">Receita Bruta</p>
                    <p className="text-2xl font-bold text-green-500">{formatReceita(receitaComVideo)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Lucro: {formatReceita(receitaComVideo - investimentoTotal)}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded p-3 border border-blue-500/30">
                    <p className="text-xs text-muted-foreground">ROI Estimado</p>
                    <p className="text-2xl font-bold text-blue-500">{roiComVideo}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Em 90 dias</p>
                  </div>
                </div>
              </div>
              
              {/* Sem Vídeos - Criativos Genéricos */}
              <div className="border-2 border-muted rounded-lg p-5 bg-muted/30">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-muted/40 rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-muted-foreground ml-3">Sem Vídeos UGC</h3>
                  <span className="ml-auto text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-full">TRADICIONAL</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-card rounded p-3">
                    <p className="text-xs text-muted-foreground">Impressões</p>
                    <p className="text-xl font-bold text-foreground">{formatNumero(Math.round(impressoesSemVideo))}</p>
                    <p className="text-xs text-muted-foreground mt-1">CPM: R$ {cpmSemVideo}</p>
                  </div>
                  
                  <div className="bg-card rounded p-3">
                    <p className="text-xs text-muted-foreground">CTR (Taxa de Clique)</p>
                    <p className="text-xl font-bold text-muted-foreground">{ctrSemVideo}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Cliques: {formatNumero(cliquesSemVideo)}</p>
                  </div>
                  
                  <div className="bg-card rounded p-3">
                    <p className="text-xs text-muted-foreground">Custo por Clique (CPC)</p>
                    <p className="text-xl font-bold text-muted-foreground">R$ {cpcRealSemVideo}</p>
                    <p className="text-xs text-muted-foreground mt-1">Mais caro</p>
                  </div>
                  
                  <div className="bg-card rounded p-3">
                    <p className="text-xs text-muted-foreground">Taxa de Conversão</p>
                    <p className="text-xl font-bold text-muted-foreground">{taxaConversaoSemVideo}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Vendas: {conversoesSemVideo}</p>
                  </div>
                  
                  <div className="bg-card rounded p-3">
                    <p className="text-xs text-muted-foreground">Custo por Venda (CPA)</p>
                    <p className="text-xl font-bold text-muted-foreground">R$ {cpaSemVideo}</p>
                    <p className="text-xs text-muted-foreground mt-1">Menos eficiente</p>
                  </div>
                  
                  <div className="bg-muted/50 rounded p-3">
                    <p className="text-xs text-muted-foreground">Receita Bruta</p>
                    <p className="text-2xl font-bold text-foreground">{formatReceita(receitaSemVideo)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Lucro: {formatReceita(receitaSemVideo - orcamentoAds)}</p>
                  </div>
                  
                  <div className="bg-muted/50 rounded p-3">
                    <p className="text-xs text-muted-foreground">ROI Estimado</p>
                    <p className="text-2xl font-bold text-muted-foreground">{roiSemVideo}%</p>
                    <p className="text-xs text-muted-foreground mt-1">Em 90 dias</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resumo de Ganhos */}
            <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Economia em Cliques</p>
                <p className="text-3xl font-bold text-green-500">{economiaPercentual}%</p>
                <p className="text-xs text-muted-foreground mt-2">{economiaCliques.toLocaleString('pt-BR')} cliques a mais</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Ganho em Conversões</p>
                <p className="text-3xl font-bold text-green-500">+{ganhoConversaoPercentual}%</p>
                <p className="text-xs text-muted-foreground mt-2">{ganhoConversoes} vendas a mais</p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Diferença de ROI</p>
                <p className="text-3xl font-bold text-blue-500">+{roiComVideo - roiSemVideo}%</p>
                <p className="text-xs text-muted-foreground mt-2">Maior rentabilidade</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleContratarCTA} className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold">
                Começar campanha com vídeos
              </button>
            </div>
          </div>
        </div>
      </section>      {/* Mini Guia de Briefing + ROI Estimado */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mini Guia removido a pedido do usuário */}
            
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
              <h3 className="text-lg font-semibold text-foreground mb-2">O que são créditos Lumpz e como funcionam?</h3>
              <p className="text-muted-foreground">
                Créditos Lumpz são os créditos virtuais da plataforma. 1 crédito Lumpz equivale a R$ 5. Você adquire créditos Lumpz para contratar criadores, garantindo segurança nas transações.
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
            <Link href="/help">
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
              <button onClick={handleContratarCTA} className="clipup-btn">
                Criar meu primeiro projeto
              </button>
              <button onClick={handleContratarCTA} className="clipup-btn-outline">
                Agendar demonstração
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