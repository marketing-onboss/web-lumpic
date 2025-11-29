import { Link, useLocation } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { useLeadCapture } from "@/hooks/useLeadCapture";

export default function GettingStarted() {
  const [, setLocation] = useLocation();
  
  // Handler para CTA com captura de lead
  const handleCadastroCTA = useLeadCapture(() => setLocation('/cadastro'));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="getting-started" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Como Começar</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Um guia completo para iniciantes na plataforma ClipUp
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Crie sua Conta</h2>
              <p className="text-muted-foreground mb-4">
                Cadastre-se gratuitamente em menos de 2 minutos. Você só precisa de um e-mail válido.
              </p>
              <button onClick={handleCadastroCTA} className="px-6 py-2 bg-primary text-primary-foreground rounded-lg">
                Cadastrar Agora
              </button>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Complete seu Perfil</h2>
              <p className="text-muted-foreground">
                Adicione uma foto, descreva suas habilidades e escolha os tipos de vídeos que você pode criar.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Procure por Projetos</h2>
              <p className="text-muted-foreground">
                Navegue pelos projetos disponíveis e escolha aqueles que combinam com seu perfil.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Envie suas Propostas</h2>
              <p className="text-muted-foreground">
                Faça uma proposta personalizada para o projeto. Mostre por que você é o melhor escolha.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Entregue o Conteúdo</h2>
              <p className="text-muted-foreground">
                Após aceitar o projeto, grave o vídeo e envie conforme o briefing fornecido.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Ganhe seus créditos Lumpz</h2>
              <p className="text-muted-foreground">
                Receba seus ganhos em créditos Lumpz após aprovação. Converta para reais e retire quando quiser.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
