import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso ter equipamento profissional?",
    answer: "Não. Um celular com boa câmera e som já é o suficiente para começar. O mais importante é a qualidade do seu conteúdo e sua comunicação. Conforme você for crescendo na plataforma, pode investir em equipamentos melhores."
  },
  {
    question: "Posso trabalhar de qualquer lugar?",
    answer: "Sim! Basta ter acesso à internet e um ambiente para gravar. Você pode trabalhar de casa, de um coworking ou até mesmo durante uma viagem. A plataforma funciona 24/7, então você decide quando e onde trabalhar."
  },
  {
    question: "Como recebo o pagamento?",
    answer: "Você acumula Blinks por cada trabalho concluído e pode convertê-los em reais a qualquer momento. Os saques são processados de forma semanal e transferidos diretamente para sua conta bancária ou via PIX, sem taxas adicionais."
  },
  {
    question: "Quanto tempo leva para aprovar meu cadastro?",
    answer: "Normalmente, a aprovação leva entre 24 e 48 horas úteis. Pedimos que você grave um vídeo de apresentação curto durante o cadastro, o que ajuda a agilizar o processo e já demonstra suas habilidades."
  },
  {
    question: "É necessário ter CNPJ?",
    answer: "Não é obrigatório. Você pode se cadastrar como pessoa física com CPF. No entanto, se você já tem um CNPJ como MEI ou outro tipo de empresa, pode utilizá-lo para questões fiscais se preferir."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background" id="perguntas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa saber para começar a criar e ganhar na plataforma.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-muted">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button 
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium text-foreground">{faq.question}</h3>
                <ChevronDown 
                  className={`text-muted-foreground transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`} 
                />
              </button>
              <div 
                className={`mt-3 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="text-primary hover:text-primary/80 flex items-center font-medium">
            Ver todas as perguntas
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
