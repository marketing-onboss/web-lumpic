import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Eye, FileCheck } from "lucide-react";

export default function Quality() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="quality" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Padrões de Qualidade</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Como garantimos a qualidade dos vídeos no Lumpic
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Critérios de Qualidade Mínima
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Resolução:</strong> Mínimo 720p (HD). Recomendado 1080p (Full HD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Áudio:</strong> Claro e sem ruído de fundo excessivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Iluminação:</strong> Adequada para visualização confortável</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Enquadramento:</strong> Estável e profissional</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Processo de Revisão
              </h2>
              <p className="text-muted-foreground mb-4">
                Todos os vídeos passam por um processo de revisão para garantir qualidade:
              </p>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">1.</span>
                  <span>Upload do vídeo pelo criador</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">2.</span>
                  <span>Verificação automática de requisitos técnicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">3.</span>
                  <span>Revisão manual por especialista</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">4.</span>
                  <span>Feedback para o criador (se necessário ajustes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">5.</span>
                  <span>Aprovação e entrega ao contratante</span>
                </li>
              </ol>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-primary" />
                Motivos para Rejeição
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Qualidade de áudio muito baixa (ruído excessivo, impossível entender)</li>
                <li>• Vídeo muito pixelado ou com problemas técnicos graves</li>
                <li>• Conteúdo diferente do solicitado</li>
                <li>• Comportamento ou linguagem inadequados</li>
                <li>• Duração significativamente diferente do acordado</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileCheck className="w-6 h-6 text-primary" />
                Sistema de Avaliação
              </h2>
              <p className="text-muted-foreground mb-4">
                Após entrega, o contratante pode avaliar o criador:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ⭐ 5 Estrelas: Excelente, recomendo fortemente</li>
                <li>• ⭐⭐⭐⭐ 4 Estrelas: Muito bom, pequenas observações</li>
                <li>• ⭐⭐⭐ 3 Estrelas: Adequado, atendeu o esperado</li>
                <li>• ⭐⭐ 2 Estrelas: Abaixo do esperado, mas utilizável</li>
                <li>• ⭐ 1 Estrela: Inaceitável, não atendeu requisitos</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dicas para Garantir Qualidade</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Teste seu equipamento antes de gravar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Grave em ambiente bem iluminado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Use microfone externo quando possível</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Revise o vídeo antes de enviar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Siga as instruções do contratante exatamente</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
