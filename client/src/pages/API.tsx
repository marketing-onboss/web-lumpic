import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { Code, Zap, FileText } from "lucide-react";

export default function API() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="api" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">API Lumpic</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Documentação e recursos para desenvolvedores
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Visão Geral
              </h2>
              <p className="text-muted-foreground mb-4">
                A API Lumpic permite que você integre nossos serviços diretamente em sua aplicação.
              </p>
              <p className="text-muted-foreground">
                Com a API você pode:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Criar e gerenciar projetos</li>
                <li>• Buscar criadores disponíveis</li>
                <li>• Acompanhar status de entregas</li>
                <li>• Processar pagamentos</li>
                <li>• Obter relatórios e analytics</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Começar
              </h2>
              <p className="text-muted-foreground mb-4">
                Para começar a usar a API:
              </p>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">1.</span>
                  <span>Criar uma conta no Lumpic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">2.</span>
                  <span>Acessar o painel de desenvolvedor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">3.</span>
                  <span>Gerar chaves de API</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">4.</span>
                  <span>Consultar documentação completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">5.</span>
                  <span>Testar com endpoints de sandbox</span>
                </li>
              </ol>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Recursos
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Autenticação:</strong> OAuth 2.0 para segurança máxima</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Formato:</strong> JSON para todas requisições e respostas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Webhooks:</strong> Receba notificações em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Rate Limiting:</strong> 10.000 requisições/hora para Enterprise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span><strong>Suporte:</strong> Equipe técnica disponível para desenvolvedor</span>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Documentação Completa</h2>
              <p className="text-muted-foreground mb-6">
                Para documentação técnica completa, endpoints, exemplos de código e guias de integração, visite o portal de desenvolvedores.
              </p>
              <a
                href="https://docs.lumpic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded hover:bg-primary/90 font-semibold"
              >
                Acessar Portal de Desenvolvedores
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
