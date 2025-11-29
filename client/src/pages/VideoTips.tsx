import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";

export default function VideoTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="video-tips" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Dicas de Vídeo</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Aprenda as melhores práticas para criar vídeos de alta qualidade
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">🎬 Iluminação</h2>
              <p className="text-muted-foreground">
                A iluminação é fundamental. Use luz natural quando possível, ou invista em softboxes. Evite luz traseira que cause sombras no rosto.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">🎙️ Áudio</h2>
              <p className="text-muted-foreground">
                O áudio é tão importante quanto a imagem. Grave em local silencioso e considere usar um microfone externo para melhor qualidade.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">📱 Enquadrament</h2>
              <p className="text-muted-foreground">
                Mantenha a câmera estável. Use tripé para vídeos profissionais. Deixe espaço negativo acima da cabeça e coloque-se no terço do frame.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">✂️ Edição</h2>
              <p className="text-muted-foreground">
                Edite removendo pausas longas, momentos incômodos e erros. Use transições simples e mantém o ritmo do vídeo.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">🎯 Foco</h2>
              <p className="text-muted-foreground">
                Faça o vídeo parecer natural. Olhe para a câmera, fale com convicção e mantenha o tom consistente do começo ao fim.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">📐 Proporção</h2>
              <p className="text-muted-foreground">
                Verifique a proporção solicitada (vertical, horizontal, quadrado). Diferentes plataformas têm diferentes requisitos.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
