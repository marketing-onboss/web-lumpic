import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircleQuestion, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "Preciso ter equipamento profissional?",
    answer: "Não. Um celular com boa câmera e som já é o suficiente para começar. O mais importante é a qualidade do seu conteúdo e sua comunicação. Conforme você for crescendo na plataforma, pode investir em equipamentos melhores.",
    category: "Equipamentos"
  },
  {
    question: "Posso trabalhar de qualquer lugar?",
    answer: "Sim! Basta ter acesso à internet e um ambiente para gravar. Você pode trabalhar de casa, de um coworking ou até mesmo durante uma viagem. A plataforma funciona 24/7, então você decide quando e onde trabalhar.",
    category: "Flexibilidade"
  },
  {
    question: "Como recebo o pagamento?",
    answer: "Você acumula créditos Lumpz por cada trabalho concluído e pode convertê-los em reais quando atingir o mínimo de 100 créditos Lumpz. Os saques são processados semanalmente e transferidos diretamente para sua conta bancária ou via PIX com segurança e rapidez.",
    category: "Pagamentos"
  },
  {
    question: "Quanto tempo leva para aprovar meu cadastro?",
    answer: "Normalmente, a aprovação leva entre 24 e 48 horas úteis. Pedimos que você grave um vídeo de apresentação curto durante o cadastro, o que ajuda a agilizar o processo e já demonstra suas habilidades.",
    category: "Cadastro"
  },
  {
    question: "É necessário ter CNPJ?",
    answer: "Não é obrigatório. Você pode se cadastrar como pessoa física com CPF. No entanto, se você já tem um CNPJ como MEI ou outro tipo de empresa, pode utilizá-lo para questões fiscais se preferir.",
    category: "Documentação"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Extrair categorias únicas
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  
  // Filtrar FAQs com base na pesquisa e categoria
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-background relative overflow-hidden" id="perguntas">
      {/* Elementos decorativos de fundo */}
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MessageCircleQuestion className="h-4 w-4" />
            <span>Tire suas dúvidas</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa saber para começar a criar e ganhar na plataforma.
          </p>
        </motion.div>
        
        {/* Barra de busca */}
        <motion.div 
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-muted bg-card rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              placeholder="Buscar uma pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
        
        {/* Filtros de categoria */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              activeCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-card text-muted-foreground hover:bg-muted'
            }`}
            onClick={() => setActiveCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todas
          </motion.button>
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto divide-y divide-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="py-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button 
                  className="flex justify-between items-center w-full text-left group"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <h3 className="text-xl font-medium text-foreground group-hover:text-primary">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-muted-foreground" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 overflow-hidden"
                    >
                      <div className="text-muted-foreground bg-muted/30 p-4 rounded-lg">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                          {faq.category}
                        </span>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="py-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground">Nenhuma pergunta encontrada com esses critérios.</p>
              <button 
                className="mt-4 text-primary hover:underline"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory(null);
                }}
              >
                Limpar filtros
              </button>
            </motion.div>
          )}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button 
            className="text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-medium inline-flex items-center shadow-md shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todas as perguntas
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.div>
        
        {/* Novo componente de suporte direto */}
        <motion.div 
          className="mt-16 bg-card rounded-xl p-8 border border-muted max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MessageCircleQuestion className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Não encontrou o que procurava?</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Nossa equipe de suporte está pronta para ajudar com qualquer dúvida que você tenha sobre a plataforma.
          </p>
          <motion.button 
            className="text-primary font-medium flex items-center"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Fale com nosso suporte
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.div>
        
      </div>
    </section>
  );
}
