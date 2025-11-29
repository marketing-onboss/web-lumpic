import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { Users, Heart, Zap, Shield } from "lucide-react";

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="community" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Comunidade Lumpic</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Faça parte de uma comunidade crescente de criadores de conteúdo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Conecte-se</h3>
              <p className="text-muted-foreground">
                Compartilhe experiências e dicas com outros criadores de conteúdo
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Colabore</h3>
              <p className="text-muted-foreground">
                Encontre parcerias e oportunidades para crescer junto
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Aprenda</h3>
              <p className="text-muted-foreground">
                Acesse recursos, tutoriais e melhores práticas do setor
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Segurança</h3>
              <p className="text-muted-foreground">
                Comunidade moderad com políticas de respeito e segurança
              </p>
            </div>
          </div>

          <section className="bg-card rounded-lg p-8 mb-12 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Diretrizes da Comunidade</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Respeitar todos os membros, independentemente de origem ou background</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Não compartilhar conteúdo discriminatório ou ofensivo</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Promover feedback construtivo e ajuda mútua</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Não fazer spam ou promoção excessiva de serviços externos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Proteger dados e informações pessoais de outros membros</span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Por que Participar?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Rede profissional com milhares de criadores</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Dicas e truques de criadores experientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Oportunidades de colaboração e parcerias</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Acesso a recursos e ferramentas exclusivas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Suporte direto da equipe Lumpic</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
