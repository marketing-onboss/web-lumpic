import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { Briefcase, Users, Zap, BarChart3 } from "lucide-react";

export default function Enterprise() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="enterprise" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Soluções Enterprise</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Planos personalizados para empresas que precisam de conteúdo em escala
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Acesso Dedicado</h3>
              <p className="text-muted-foreground">
                Gerente de conta dedicado para ajudar com seus projetos e necessidades
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Equipe de Criadores</h3>
              <p className="text-muted-foreground">
                Acesso prioritário aos melhores criadores e equipes especializadas
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Processamento Rápido</h3>
              <p className="text-muted-foreground">
                Prioridade em todas as etapas de entrega e suporte acelerado
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Relatórios Detalhados</h3>
              <p className="text-muted-foreground">
                Analytics completos e relatórios personalizados de desempenho
              </p>
            </div>
          </div>

          <section className="bg-card rounded-lg p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Serviços Enterprise</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Contratação em volume com descontos especiais</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Criadores pré-selecionados para sua categoria</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Suporte técnico 24/7</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>API de integração com seus sistemas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Gestão de campanhas em larga escala</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Relatórios de ROI e analytics avançados</span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Comece Agora</h2>
            <p className="text-muted-foreground mb-6">
              Interessado em uma solução enterprise personalizadas? Entre em contato com nosso time de vendas.
            </p>
            <Link href="/contato">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded hover:bg-primary/90 font-semibold">
                Solicitar Demonstração
              </button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
