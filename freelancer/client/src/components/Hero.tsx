import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
              <span className="text-primary">Sua marca</span> merece ser contada por quem inspira confiança
            </h1>
            <p className="text-xl text-card-foreground mb-8">
              Conecte-se com criadores profissionais e leve sua empresa até o seu público com vídeos autênticos, diretos e que convertem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/20">
                  Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Como Funciona <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            
            {/* Novo banner de confiança */}
            <motion.div 
              className="mt-8 flex items-center gap-2 bg-card/50 backdrop-blur-sm p-3 rounded-lg inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/40?img=${i + 10}`} 
                      alt="Creator" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm text-card-foreground">
                <span className="font-medium">250+ empresas</span> ampliaram alcance com vídeos
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Efeitos de fundo animados */}
              <motion.div 
                className="absolute -top-4 -left-4 w-60 h-60 rounded-full bg-primary/20 filter blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-60 h-60 rounded-full bg-secondary/20 filter blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=800&fit=crop" 
                alt="Pessoa gravando um vídeo com smartphone" 
                className="relative z-10 rounded-xl object-cover shadow-2xl w-full"
              />
              
              {/* Floating earnings card animado */}
              <motion.div 
                className="absolute top-8 -right-12 z-20 bg-card p-4 rounded-lg shadow-xl border border-muted transform rotate-6"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ 
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-card-foreground text-sm">Impacto em vendas</p>
                <p className="text-primary font-bold text-xl">+27,8%</p>
              </motion.div>
              
              {/* Floating video icon animado */}
              <motion.div 
                className="absolute -bottom-6 -left-6 z-20 bg-card p-3 rounded-full shadow-lg border border-muted"
                initial={{ rotate: 0 }}
                animate={{ rotate: 5 }}
                transition={{ 
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                  <VideoIcon className="h-6 w-6 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats com animação de número crescente */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div 
            className="bg-card rounded-lg p-4 border border-muted hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <p className="text-muted-foreground text-sm">Conversão em Páginas</p>
            <p className="text-foreground font-bold text-2xl">+70%</p>
          </motion.div>
          <motion.div 
            className="bg-card rounded-lg p-4 border border-muted hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <p className="text-muted-foreground text-sm">Aumento no ROI</p>
            <p className="text-foreground font-bold text-2xl">+43%</p>
          </motion.div>
          <motion.div 
            className="bg-card rounded-lg p-4 border border-muted hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <p className="text-muted-foreground text-sm">Engajamento nas Redes</p>
            <p className="text-foreground font-bold text-2xl">3x maior</p>
          </motion.div>
          <motion.div 
            className="bg-card rounded-lg p-4 border border-muted hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <p className="text-muted-foreground text-sm">Redução de Devoluções</p>
            <p className="text-foreground font-bold text-2xl">-42%</p>
          </motion.div>
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
