import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como faço para criar uma conta?",
      answer: "Clique em 'Cadastre-se' no topo da página, escolha se é freelancer ou contratante, preencha seus dados e confirme seu email. É rápido e gratuito!"
    },
    {
      question: "Como completo meu perfil?",
      answer: "Após criar sua conta, vá para configurações de perfil. Adicione foto, descrição, portfólio (freelancers) ou informações da empresa (contratantes)."
    },
    {
      question: "Qual é a taxa da plataforma?",
      answer: "A Lumpic cobra 20% sobre cada venda. Isso cobre custos de operação, segurança, suporte e manutenção da plataforma."
    },
    {
      question: "Quando recebo meu pagamento?",
      answer: "Os pagamentos são processados todas as segundas-feiras. Você precisa ter pelo menos 100 créditos Lumpz (R$ 200) na sua conta."
    },
    {
      question: "Qual é o valor mínimo para saque?",
      answer: "O mínimo é 100 créditos Lumpz, que equivale a R$ 200. Assim que atingir esse valor, você pode sacar automaticamente."
    },
    {
      question: "Posso fazer saques parciais?",
      answer: "Sim, você pode sacar a qualquer momento que tiver o saldo mínimo. O saque é automático todas as segundas-feiras."
    },
    {
      question: "Qual é a taxa de saque?",
      answer: "Não há taxa de saque. Todo o seu saldo disponível é transferido sem descontos adicionais."
    },
    {
      question: "Como sou pago? (PIX, TED, etc)",
      answer: "Você pode escolher entre PIX (instantâneo) ou transferência bancária. Ambos estão disponíveis sem custo."
    },
    {
      question: "Como cancelo minha conta?",
      answer: "Você pode solicitar cancelamento em configurações da conta. Seu saldo disponível será pago antes do cancelamento."
    },
    {
      question: "Preciso de qual equipamento para começar?",
      answer: "Você precisa de um smartphone ou câmera. Não é necessário equipamento profissional - qualidade decente com boa iluminação é suficiente."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="help" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6 mt-8 flex items-center">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Central de Ajuda</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Encontre respostas para as perguntas mais frequentes
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-background/50 transition"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-background/30 border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Não encontrou sua resposta?</h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato com nosso time de suporte. Estamos disponíveis de segunda a sexta-feira, das 9h às 18h, e sábados das 10h às 14h.
            </p>
            <Link href="/contato">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded hover:bg-primary/90 font-semibold">
                Fale com Suporte
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
