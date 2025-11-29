import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="terms" />
      
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
              Termos de Uso
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar a plataforma ClipUp, você aceita estar vinculado por estes Termos de Uso. Se não concorda com qualquer parte destes termos, não use nossa plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
              <p>
                A ClipUp é uma plataforma que conecta criadores de conteúdo em vídeo com empresas e indivíduos que buscam serviços de vídeo. Nossa plataforma facilita:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Postagem de oportunidades de trabalho</li>
                <li>Busca e contratação de criadores</li>
                <li>Troca de mensagens entre partes</li>
                <li>Processamento de pagamentos</li>
                <li>Avaliações e feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Requisitos de Uso</h2>
              <p>Para usar nossa plataforma, você deve:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Ter pelo menos 18 anos de idade</li>
                <li>Ter autoridade legal para fazer este acordo</li>
                <li>Fornecer informações precisas e completas</li>
                <li>Manter a confidencialidade de sua senha</li>
                <li>Cumprir todas as leis e regulamentos aplicáveis</li>
                <li>Não violar direitos de terceiros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Responsabilidades do Usuário</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Para Criadores</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Entregar conteúdo de alta qualidade conforme especificado</li>
                    <li>Cumprir prazos acordados</li>
                    <li>Ter direitos autorais ou licenças necessárias</li>
                    <li>Não plagiar ou violar propriedade intelectual</li>
                    <li>Manter profissionalismo na comunicação</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Para Contratantes</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fornecer briefing claro e detalhado</li>
                    <li>Efetuar pagamentos conforme acordado</li>
                    <li>Respeitar direitos autorais do criador</li>
                    <li>Não usar conteúdo além do escopo acordado</li>
                    <li>Fornecer feedback construtivo</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Sistema de Pagamento</h2>
              <p>
                Todos os pagamentos são processados através de nossa plataforma. Você concorda que:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>As transações usam nossos créditos Lumpz (1 crédito Lumpz = R$ 2,00)</li>
                <li>A ClipUp retém 20% como comissão de serviço</li>
                <li>Saques mínimos de 100 créditos Lumpz</li>
                <li>Processamento de pagamento em até 5 dias úteis</li>
                <li>Reembolsos não são garantidos após entrega aprovada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
              <p>
                Ao enviar conteúdo para nossa plataforma:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Você retém a propriedade de seu conteúdo original</li>
                <li>Você concede ao contratante uma licença de uso conforme acordado</li>
                <li>Você garante ter direitos sobre o conteúdo</li>
                <li>Você não pode copiar ou violar direitos de terceiros</li>
                <li>A ClipUp pode usar seu conteúdo para fins promocionais (com permissão)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Condutas Proibidas</h2>
              <p>Você concorda em não:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Violar qualquer lei ou regulamento</li>
                <li>Enviar conteúdo ofensivo, ilegal ou prejudicial</li>
                <li>Assediar, ameaçar ou abusar de outros usuários</li>
                <li>Fraudar ou enganar a plataforma ou usuários</li>
                <li>Usar bots ou automação não autorizada</li>
                <li>Acessar sistemas ou dados não autorizados</li>
                <li>Violar direitos de propriedade intelectual</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Resolução de Disputas</h2>
              <p>
                Em caso de disputa entre usuários, a ClipUp pode:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Revisar evidências de ambas as partes</li>
                <li>Solicitar revisões ou correções</li>
                <li>Colocar fundos em custódia durante a investigação</li>
                <li>Mediar entre as partes</li>
                <li>Tomar decisão final em disputas de pagamento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Suspensão e Cancelamento</h2>
              <p>
                A ClipUp pode suspender ou cancelar sua conta se você:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Violar estes termos</li>
                <li>Engajar-se em fraude ou atividade prejudicial</li>
                <li>Não cumprir requisitos de verificação</li>
                <li>Receber múltiplas reclamações justificadas</li>
                <li>Optar por deletar sua conta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Isenção de Responsabilidade</h2>
              <p>
                A ClipUp fornece a plataforma "no estado em que se encontra" sem garantias. Não somos responsáveis por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Qualidade do trabalho entre usuários</li>
                <li>Violações de prazos ou especificações</li>
                <li>Problemas de comunicação</li>
                <li>Perda de dados ou dados corrompidos</li>
                <li>Danos indiretos ou consequentes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Alterações aos Termos</h2>
              <p>
                A ClipUp reserva-se o direito de modificar estes termos a qualquer momento. Notificaremos usuários sobre mudanças significativas. O uso contínuo implica aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Lei e Jurisdição</h2>
              <p>
                Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida nos tribunais competentes de São Paulo, SP.
              </p>
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
