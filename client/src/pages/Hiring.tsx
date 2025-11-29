import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Briefcase, TrendingUp } from "lucide-react";

export default function Hiring() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="hiring" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Como Contratar Criadores</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Guia completo para encontrar os melhores criadores de conteúdo
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Passo 1: Encontre Criadores Qualificados
              </h2>
              <p className="text-muted-foreground mb-4">
                Use nossos filtros avançados para encontrar criadores que se adequam ao seu projeto:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Filtre por tipo de conteúdo (depoimento, unboxing, tutorial, etc)</li>
                <li>• Avalie portfólios e histórico de trabalhos</li>
                <li>• Verifique avaliações de clientes anteriores</li>
                <li>• Analise taxa cobrada por cada criador</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Passo 2: Faça uma Proposta Clara
              </h2>
              <p className="text-muted-foreground mb-4">
                Descreva seu projeto com detalhes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Qual é o objetivo do vídeo?</li>
                <li>• Qual é o público-alvo?</li>
                <li>• Qual é o tom desejado?</li>
                <li>• Quais são os requisitos técnicos?</li>
                <li>• Qual é o prazo?</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Passo 3: Negocie e Chegue a um Acordo
              </h2>
              <p className="text-muted-foreground mb-4">
                Comunique-se diretamente com o criador:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Discuta preço e cronograma</li>
                <li>• Esclareça expectativas e entregáveis</li>
                <li>• Defina revisões e ajustes permitidos</li>
                <li>• Confirme tecnicamente de entrega</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Passo 4: Acompanhe e Forneça Feedback
              </h2>
              <p className="text-muted-foreground mb-4">
                Mantenha comunicação aberta durante o processo:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Revise versões preliminares</li>
                <li>• Forneça feedback construtivo</li>
                <li>• Solucione dúvidas rapidamente</li>
                <li>• Aprove final ou solicite ajustes</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dicas para Melhor Experiência</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>Seja específico nas requisições - quanto mais claro, melhor o resultado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>Respeite prazos acordados - criadores precisam planejar seu tempo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>Deixe review positivo para bons trabalhos - ajuda a comunidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>Comunique-se respeitosamente - criadores são profissionais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>Considere relacionamento de longo prazo - criadores consistentes são valiosos</span>
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
