import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";

export default function PaymentPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="payment-policy" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Pagamento</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Tudo o que você precisa saber sobre como funciona o sistema de pagamento no Lumpic
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Moeda: créditos Lumpz</h2>
              <p className="text-muted-foreground mb-4">
                Todos os ganhos são convertidos para créditos Lumpz, nossa unidade virtual na plataforma.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 1 crédito Lumpz = R$ 2,00</li>
                <li>• Conversão automática de cada venda</li>
                <li>• Sem taxas de conversão adicional</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Saldo Mínimo para Saque</h2>
              <p className="text-muted-foreground mb-4">
                Você precisa atingir o saldo mínimo antes de poder sacar seus ganhos.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mínimo: 100 créditos Lumpz (R$ 200,00)</li>
                <li>• Você pode acompanhar seu saldo em tempo real no painel</li>
                <li>• Progresso automático com cada venda</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Frequência de Pagamento</h2>
              <p className="text-muted-foreground mb-4">
                Pagamentos regulares e automáticos transferem seus ganhos ao banco.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pagamentos semanais todas as segundas-feiras</li>
                <li>• Transferência direta para sua conta bancária</li>
                <li>• Sem agendamento necessário - automático</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Taxa da Plataforma</h2>
              <p className="text-muted-foreground mb-4">
                A Lumpic cobra uma taxa para cobrir custos operacionais, segurança e suporte.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Taxa: 20% sobre cada venda</li>
                <li>• Você recebe 80% do valor acordado com o contratante</li>
                <li>• Transparente e sem surpresas</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Como Funciona</h2>
              <p className="text-muted-foreground mb-4">Exemplo de uma venda:</p>
              <div className="bg-background p-4 rounded mb-4">
                <p className="text-muted-foreground">• Contrato: R$ 1.000,00 (500 créditos Lumpz)</p>
                <p className="text-muted-foreground">• Taxa Lumpic (20%): R$ 200,00 (100 créditos Lumpz)</p>
                <p className="text-foreground font-semibold">• Seu Ganho: R$ 800,00 (400 créditos Lumpz)</p>
              </div>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Métodos de Saque</h2>
              <p className="text-muted-foreground mb-4">
                Você pode sacar seus ganhos de várias formas:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Transferência bancária (TED/DOC)</li>
                <li>• Pix - Instantâneo</li>
                <li>• Sem taxa de saque</li>
              </ul>
            </section>

            <section className="bg-card rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Disputas de Pagamento</h2>
              <p className="text-muted-foreground mb-4">
                Se houver problemas com o pagamento, entre em contato conosco:
              </p>
              <Link href="/contato">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90">
                  Fale com Suporte
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
