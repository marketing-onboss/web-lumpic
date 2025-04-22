import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function TargetAudience() {
  const audienceCards = [
    {
      icon: <VideoIcon className="h-8 w-8" />,
      title: "Autenticidade Garantida",
      description: "Depoimentos reais feitos por pessoas reais geram confiança e credibilidade que anúncios tradicionais não conseguem.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      icon: <MicrophoneIcon className="h-8 w-8" />,
      title: "Maior Engajamento",
      description: "Vídeos de criadores autênticos são 2,2x mais memoráveis e geram 28% mais engajamento que conteúdo tradicional.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      icon: <MobileIcon className="h-8 w-8" />,
      title: "Conversão Comprovada",
      description: "Empresas que usam vídeos de depoimentos reais reportam aumento médio de 34% nas taxas de conversão.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    },
    {
      icon: <CoinsIcon className="h-8 w-8" />,
      title: "Conteúdo Multiformato",
      description: "Cada vídeo pode ser adaptado para diferentes canais, maximizando seu investimento nas redes sociais.",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20"
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Economia de Recursos",
      description: "Reduza custos com produção interna e agências tradicionais acessando nossa rede de criadores certificados.",
      color: "text-secondary",
      bgColor: "bg-secondary/5", 
      borderColor: "border-secondary/20"
    },
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      title: "Alcance Específico",
      description: "Escolha criadores com perfil alinhado ao seu público-alvo, garantindo maior ressonância com sua audiência ideal.",
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Benefícios para sua Empresa</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as vantagens de ter criadores de vídeo profissionais promovendo sua marca e produtos.
          </p>
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
        
        {/* Seção de convite para começar */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-5">
            Mais de <span className="text-primary font-bold">3.200 criadores</span> já estão transformando seu talento em renda recorrente. Junte-se a eles!
          </p>
          <motion.button 
            className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-lg font-medium shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero começar agora
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
