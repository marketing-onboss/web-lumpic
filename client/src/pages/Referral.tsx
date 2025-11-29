import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { Gift, Users, Zap, TrendingUp } from "lucide-react";

export default function Referral() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="referral" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Programa de Referência</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Ganhe bonificações ao indicar amigos para o Lumpic
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <Gift className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Bônus por Referência</h3>
              <p className="text-muted-foreground">
                Receba 100 créditos Lumpz quando um amigo se cadastra usando seu código
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Referências Ilimitadas</h3>
              <p className="text-muted-foreground">
                Não há limite de quantas pessoas você pode indicar
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Saque Imediato</h3>
              <p className="text-muted-foreground">
                Saque seus ganhos de referências como qualquer outro ganho
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Ganho Passivo</h3>
              <p className="text-muted-foreground">
                Continue ganhando enquanto seus referidos usam a plataforma
              </p>
            </div>
          </div>

          <section className="bg-card rounded-lg p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Como Funciona</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Obtenha seu código</h3>
                  <p className="text-muted-foreground">
                    Acesse seu painel e copie seu código de referência único
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Compartilhe</h3>
                  <p className="text-muted-foreground">
                    Envie o link para amigos, redes sociais ou onde você quiser
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ganhe</h3>
                  <p className="text-muted-foreground">
                    Receba 100 créditos Lumpz quando eles se cadastram e fazem a primeira venda
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Saque</h3>
                  <p className="text-muted-foreground">
                    Seus ganhos são adicionados ao saldo e podem ser sacados normalmente
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Estrutura de Ganhos</h2>
            <div className="bg-background p-4 rounded mb-4">
              <p className="text-muted-foreground mb-2">
                <strong>Primeira referência confirmada:</strong> 100 créditos Lumpz
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Equivalente em reais:</strong> R$ 200,00
              </p>
              <p className="text-muted-foreground">
                <strong>Sem limite de referências:</strong> Ganhe quantas quiser!
              </p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Dicas para Mais Referências</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Compartilhe em redes sociais e grupos de interesse</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Conte sua experiência positiva com a plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Indique para criadores ou empresas que você conhece</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Use seu link de referência em blogs ou comunidades</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span>Destaque os benefícios: facilidade, segurança, pagamentos rápidos</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
