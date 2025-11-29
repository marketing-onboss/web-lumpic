import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="cookies" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Cookies</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">O que são Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies são pequenos arquivos de texto armazenados no seu navegador que permitem que um site lembre informações sobre você. Eles são essenciais para tornar sites mais úteis e personalizados.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Como Usamos Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies Essenciais</h3>
                  <p className="text-muted-foreground">
                    Necessários para funcionamento básico do site, autenticação e segurança
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies de Desempenho</h3>
                  <p className="text-muted-foreground">
                    Nos ajudam a entender como você usa o site para melhorar nossos serviços
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies de Preferência</h3>
                  <p className="text-muted-foreground">
                    Lembram suas preferências, como tema escuro/claro e idioma
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies de Marketing</h3>
                  <p className="text-muted-foreground">
                    Rastreiam sua atividade para anúncios mais relevantes (apenas com seu consentimento)
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Controle de Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Você pode controlar cookies através das configurações do seu navegador:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
                <li>• <strong>Firefox:</strong> Preferências → Privacidade → Cookies</li>
                <li>• <strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                <li>• <strong>Edge:</strong> Configurações → Privacidade → Cookies</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies de Terceiros</h2>
              <p className="text-muted-foreground">
                Usamos alguns serviços de terceiros que podem definir seus próprios cookies, incluindo analytics e provedores de pagamento. Você pode desativar cookies de terceiros em seu navegador.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Alterações a esta Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar esta política de cookies periodicamente. Notificaremos você sobre mudanças significativas publicando a nova política nesta página.
              </p>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Entre em Contato</h2>
              <p className="text-muted-foreground mb-4">
                Se você tiver dúvidas sobre nossa política de cookies, entre em contato conosco:
              </p>
              <Link href="/contato">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90">
                  Fale Conosco
                </button>
              </Link>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
