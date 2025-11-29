import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="privacy" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <Link href="/">
              <button className="text-primary hover:text-primary/80 mb-6 flex items-center">
                ← Voltar para Início
              </button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
              <p>
                A ClipUp ("nós", "nosso" ou "a Empresa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nossa plataforma de vídeos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Informações Fornecidas Diretamente</h3>
                  <p>
                    Quando você se registra ou usa nossa plataforma, podemos coletar:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Nome completo e e-mail</li>
                    <li>Informações de perfil (foto, bio, especialidades)</li>
                    <li>Dados bancários para pagamento</li>
                    <li>Documento de identidade (para verificação)</li>
                    <li>Informações de contato adicionais</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2.2 Informações Coletadas Automaticamente</h3>
                  <p>
                    Coletamos informações automaticamente quando você acessa nossa plataforma:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Endereço IP</li>
                    <li>Tipo de dispositivo e navegador</li>
                    <li>Dados de navegação e uso</li>
                    <li>Cookies e similares</li>
                    <li>Localização geográfica (se autorizado)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Usamos Suas Informações</h2>
              <p>Usamos as informações coletadas para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Fornecer, manter e melhorar nossa plataforma</li>
                <li>Processar transações e pagamentos</li>
                <li>Verificar sua identidade e prevenir fraudes</li>
                <li>Comunicar atualizações e ofertas</li>
                <li>Personalizar sua experiência</li>
                <li>Cumprir obrigações legais</li>
                <li>Melhorar segurança e performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos suas informações. Podemos compartilhar dados apenas com:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Processadores de pagamento (para transações seguras)</li>
                <li>Provedores de hospedagem (com proteção adequada)</li>
                <li>Autoridades legais (quando legalmente obrigado)</li>
                <li>Parceiros de marketing (apenas com consentimento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança das Informações</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Criptografia SSL/TLS</li>
                <li>Senhas com hash seguro</li>
                <li>Autenticação de dois fatores</li>
                <li>Firewalls e sistemas de detecção</li>
                <li>Auditorias de segurança regulares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Retenção de Dados</h2>
              <p>
                Retemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Você pode solicitar a exclusão de seus dados a qualquer momento, sujeito a obrigações legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar exclusão de dados</li>
                <li>Optar por não receber comunicações de marketing</li>
                <li>Portar seus dados</li>
                <li>Revogar consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
              <p>
                Usamos cookies para melhorar sua experiência. Você pode controlar cookies através de suas configurações de navegador. Alguns recursos podem não funcionar se os cookies estiverem desativados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações à Política</h2>
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de destaque na plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
              <p>
                Para dúvidas sobre privacidade, entre em contato:
              </p>
              <div className="bg-card rounded-lg p-6 mt-4 space-y-2">
                <p><strong className="text-foreground">E-mail:</strong> suporte@lumpic.com</p>
                <p><strong className="text-foreground">Telefone:</strong> +55 (11) 3000-0000</p>
                <p><strong className="text-foreground">Endereço:</strong> São Paulo, SP - Brasil</p>
              </div>
            </section>

          </div>

          {/* CTA Button */}
          <div className="mt-16 flex gap-4">
            <Link href="/">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                Voltar para Início
              </button>
            </Link>
            <Link href="/contato">
              <button className="px-8 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition">
                Entre em Contato
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
