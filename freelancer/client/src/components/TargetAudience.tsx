import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function TargetAudience() {
  const audienceCards = [
    {
      icon: <VideoIcon className="h-8 w-8" />,
      title: "Conversão em Vendas",
      description: "Vídeos de depoimento aumentam em até 70% a conversão de páginas de vendas e formulários de contato.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      icon: <MicrophoneIcon className="h-8 w-8" />,
      title: "Mais Engajamento",
      description: "Unboxings geram até 3x mais engajamento que fotos estáticas nas redes, aumentando alcance orgânico.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      icon: <MobileIcon className="h-8 w-8" />,
      title: "Conexão Humana",
      description: "Pessoas confiam em rostos mais do que em logos. Use o poder da conexão humana a favor da sua marca.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      icon: <CoinsIcon className="h-8 w-8" />,
      title: "Custo-Benefício",
      description: "Produção profissional sem os custos de uma agência. Você define o orçamento e mantém controle total.",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20"
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Casos de Uso Reais",
      description: "E-commerces aumentam vendas com depoimentos autênticos. Startups validam confiança com vídeos de criadores.",
      color: "text-secondary",
      bgColor: "bg-secondary/5", 
      borderColor: "border-secondary/20"
    },
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      title: "Escala Global",
      description: "Acesse criadores em diferentes regiões e idiomas para expandir o alcance de sua marca em novos mercados.",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20"
    }
  ];

  // Efeito de stagger para os cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden" id="para-voce">
      {/* Elementos decorativos de fundo */}
      <motion.div 
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-secondary/5 filter blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <CheckCircle className="h-4 w-4" />
            <span>Para empresas de todos os tamanhos</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Você investe em tráfego, design e produto...</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Mas sem um vídeo real, com rosto humano, sua mensagem não gera conexão.<br />
            <span className="font-medium text-primary">A confiança é o que faz vender. E vídeos criam isso em segundos.</span>
          </p>
          
          <motion.div 
            className="bg-card border border-border p-6 rounded-xl max-w-2xl mx-auto mb-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Na nossa plataforma, você encontra talentos prontos para gravar:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2">
                <span className="text-primary">📹</span>
                <span>Depoimentos reais</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📦</span>
                <span>Unboxings autênticos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📢</span>
                <span>Campanhas de impacto</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✨</span>
                <span>Reações genuínas</span>
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Tudo com produção ágil, custos acessíveis e entrega garantida.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {audienceCards.map((card, index) => (
            <motion.div 
              key={index} 
              className={`${card.bgColor} border ${card.borderColor} rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]`}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className={`mb-4 ${card.color} text-3xl inline-flex p-3 rounded-full ${card.bgColor}`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
              
              <motion.div 
                className="mt-4 pt-4 border-t border-border flex justify-between items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-sm text-muted-foreground">
                  {index % 2 === 0 ? 'Recomendado para PMEs' : 'Perfeito para grandes marcas'}
                </span>
                <motion.button
                  className={`${card.color} text-sm`}
                  whileHover={{ x: 5 }}
                >
                  Saiba mais <ArrowRight className="ml-1 h-3 w-3 inline" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Como funciona */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Como funciona</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-card border border-border rounded-xl p-6 text-center relative"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Publique o tipo de vídeo</h4>
              <p className="text-muted-foreground text-sm">Defina o tipo de conteúdo que sua empresa precisa</p>
            </motion.div>
            
            <motion.div 
              className="bg-card border border-border rounded-xl p-6 text-center relative"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <VideoIcon className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Receba propostas</h4>
              <p className="text-muted-foreground text-sm">Compare e escolha entre criadores verificados</p>
            </motion.div>
            
            <motion.div 
              className="bg-card border border-border rounded-xl p-6 text-center relative"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MicrophoneIcon className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Aprove e receba</h4>
              <p className="text-muted-foreground text-sm">Vídeo finalizado em poucos dias</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-8 bg-primary/5 p-4 rounded-lg">
            <p className="text-muted-foreground text-sm font-medium">
              Sem contratos complexos. Sem agência. Sem enrolação.
            </p>
          </div>
        </motion.div>
        
        {/* Credibilidade */}
        <motion.div 
          className="mt-16 bg-card border border-muted rounded-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <blockquote className="text-lg italic mb-4">
                "Conseguimos aumentar o ROI das campanhas em 43% usando vídeos da plataforma."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Gerente de Marketing, Loja Alpha</p>
            </div>
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <p className="text-sm">Todos os criadores passam por curadoria.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <CoinsIcon className="h-4 w-4" />
                </div>
                <p className="text-sm">A entrega é protegida por contrato. Você só paga quando aprova o resultado.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Seção de convite para começar */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-5">
            <span className="text-primary font-bold">🚀 Pronto para ver sua marca decolar com vídeos autênticos?</span>
          </p>
          <motion.button 
            className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-lg font-medium shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Impulsionar minha marca
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M18 7c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3" />
      <path d="m16 5 4 4-4 4" />
    </svg>
  );
}

function MicrophoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function MobileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  );
}

function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
