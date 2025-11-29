import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, ChevronDown, ChevronUp, Sparkles, Clock, DollarSign, CalendarClock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoType {
  name: string;
  blinks: number;
  difficulty: "easy" | "medium" | "hard";
  time: string;
  demand: "high" | "medium" | "low";
}

export default function EarningsCalculator() {
  const [videoCount, setVideoCount] = useState(10);
  const [selectedVideoType, setSelectedVideoType] = useState("Depoimentos");
  const [showCalculator, setShowCalculator] = useState(true);
  const [isCalculated, setIsCalculated] = useState(false);
  
  const videoTypes: Record<string, VideoType> = {
    "Depoimentos": {
      name: "Depoimentos",
      blinks: 50,
      difficulty: "easy",
      time: "5-10 min",
      demand: "high"
    },
    "Unboxing": {
      name: "Unboxing",
      blinks: 70,
      difficulty: "medium",
      time: "10-15 min",
      demand: "medium"
    },
    "Review": {
      name: "Review",
      blinks: 60,
      difficulty: "medium",
      time: "7-12 min",
      demand: "high"
    },
    "Promocional": {
      name: "Promocional",
      blinks: 90,
      difficulty: "hard",
      time: "10-20 min",
      demand: "high"
    },
    "Institucional": {
      name: "Institucional",
      blinks: 100,
      difficulty: "hard",
      time: "15-25 min",
      demand: "medium"
    },
    "Mix de Vídeos": {
      name: "Mix de Vídeos",
      blinks: 75,
      difficulty: "medium",
      time: "10-15 min",
      demand: "medium"
    },
  };
  
  // Convertendo de Blinks para créditos Lumpz (consideramos que 1 blink = 1 crédito Lumpz)
  const blinksPerVideo = videoTypes[selectedVideoType].blinks;
  const totalLumpz = blinksPerVideo * videoCount;
  // Conversão para Reais (1 crédito Lumpz = R$ 2)
  const valueInReais = totalLumpz * 2;
  
  // Para animação do contador
  const [animatedValue, setAnimatedValue] = useState(valueInReais);
  
  useEffect(() => {
    if (isCalculated) {
      const duration = 1000; // 1 segundo para a animação
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.floor(progress * valueInReais);
        
        if (frame === totalFrames) {
          clearInterval(timer);
          setAnimatedValue(valueInReais);
        } else {
          setAnimatedValue(currentValue);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [isCalculated, valueInReais]);
  
  const handleCalculate = () => {
    setIsCalculated(true);
  };
  
  return (
    <section className="py-16 bg-background relative overflow-hidden" id="earnings">
      {/* Elementos decorativos de fundo */}
      <motion.div 
        className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 20,
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
            <Calculator className="h-4 w-4" />
            <span>Calculadora de resultados</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Quanto sua marca pode crescer?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calcule o impacto potencial que vídeos autênticos podem ter no engajamento e conversões da sua marca.
          </p>
        </motion.div>

        <motion.div 
          className="bg-card rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-muted p-6 flex justify-between items-center">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="text-primary" /> 
              Simulador de Resultados
            </h3>
            <button 
              onClick={() => setShowCalculator(!showCalculator)}
              className="text-muted-foreground hover:text-foreground"
            >
              {showCalculator ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
          
          <AnimatePresence>
            {showCalculator && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  {/* Slider for videos per month */}
                  <div className="mb-6">
                    <label htmlFor="video-slider" className="block text-card-foreground mb-2 font-medium">
                      Quantidade de vídeos por mês:
                    </label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="video-slider"
                        min={1}
                        max={30}
                        step={1}
                        value={[videoCount]}
                        onValueChange={(value) => {
                          setVideoCount(value[0]);
                          setIsCalculated(false);
                        }}
                        className="w-full"
                      />
                      <motion.span 
                        className="text-foreground text-lg font-bold bg-muted px-3 py-1 rounded-md min-w-[3rem] text-center"
                        key={videoCount}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.3 }}
                      >
                        {videoCount}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Video type selection */}
                  <div className="mb-6">
                    <label className="block text-card-foreground mb-2 font-medium">Tipo de vídeo:</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(videoTypes).map(([type, data]) => (
                        <motion.div key={type} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant={selectedVideoType === type ? "default" : "outline"}
                            onClick={() => {
                              setSelectedVideoType(type);
                              setIsCalculated(false);
                            }}
                            className="h-auto py-3 w-full relative overflow-hidden"
                          >
                            {selectedVideoType === type && (
                              <motion.span 
                                className="absolute inset-0 bg-primary/10"
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                            <span className="relative z-10">
                              {type} ({data.blinks} créditos Lumpz)
                            </span>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="w-full sm:w-auto">
                      <motion.button
                        className="bg-primary text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center w-full sm:w-auto"
                        onClick={handleCalculate}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Calcular Impacto
                        <Calculator className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 inline-block mr-1"></span>
                        Fácil
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block mr-1"></span>
                        Médio
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-1"></span>
                        Avançado
                      </div>
                    </div>
                  </div>
                  
                  {/* Detalhes do tipo de vídeo selecionado */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-muted">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Sparkles className="h-4 w-4 text-primary mr-2" />
                      Detalhes do {selectedVideoType}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-muted-foreground">Duração média: </span>
                        <span className="ml-1 font-medium">{videoTypes[selectedVideoType].time}</span>
                      </div>
                      <div className="flex items-center">
                        <span 
                          className={`w-3 h-3 rounded-full mr-1 ${
                            videoTypes[selectedVideoType].difficulty === 'easy' ? 'bg-green-500' : 
                            videoTypes[selectedVideoType].difficulty === 'medium' ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}
                        ></span>
                        <span className="text-muted-foreground">Dificuldade: </span>
                        <span className="ml-1 font-medium capitalize">{videoTypes[selectedVideoType].difficulty}</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-muted-foreground">Demanda: </span>
                        <span className="ml-1 font-medium capitalize">{videoTypes[selectedVideoType].demand}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <AnimatePresence>
                    {isCalculated && (
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div 
                          className="bg-muted p-4 rounded-lg border border-muted shadow-sm"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                          <div className="flex items-center mb-1">
                            <Sparkles className="h-4 w-4 text-primary mr-2" />
                            <p className="text-muted-foreground text-sm">créditos Lumpz por vídeo</p>
                          </div>
                          <p className="text-primary font-bold text-2xl">{blinksPerVideo} créditos Lumpz</p>
                        </motion.div>
                        <motion.div 
                          className="bg-muted p-4 rounded-lg border border-muted shadow-sm"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                          <div className="flex items-center mb-1">
                            <CalendarClock className="h-4 w-4 text-primary mr-2" />
                            <p className="text-muted-foreground text-sm">Alcance potencial</p>
                          </div>
                            <p className="text-primary font-bold text-2xl">{totalLumpz * 150}+ pessoas</p>
                        </motion.div>
                        <motion.div 
                          className="bg-muted p-4 rounded-lg border border-muted shadow-sm"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                          <div className="flex items-center mb-1">
                            <DollarSign className="h-4 w-4 text-primary mr-2" />
                            <p className="text-muted-foreground text-sm">Retorno estimado</p>
                          </div>
                            <p className="text-primary font-bold text-2xl">
                            R$ {(animatedValue * 1.75).toFixed(2)} 
                            <span className="text-sm font-normal ml-1 text-muted-foreground">({totalLumpz} créditos Lumpz × R$2 × 1.75)</span>
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="p-6 bg-muted border-t border-muted">
                  <p className="text-muted-foreground mb-4 text-sm">
                    <InfoIcon className="inline-block mr-2 h-4 w-4" /> 
                    Este é apenas um cálculo estimado com base nos resultados médios observados. O impacto real pode variar 
                    de acordo com o setor, público-alvo e objetivos específicos da sua empresa.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="w-full shadow-lg shadow-primary/20 font-medium">
                      Impulsionar minha marca agora <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Earnings testimonials */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">O que nossas empresas parceiras dizem</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
                name: "Carolina Mendonça",
                role: "Diretora de Marketing, TechSoft",
                testimonial: "Após 3 meses usando vídeos de depoimentos reais, aumentamos nossa taxa de conversão em 37%. Os consumidores confiam muito mais em opiniões autênticas do que em nossa própria publicidade.",
                rating: 5
              },
              {
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop",
                name: "Roberto Almeida",
                role: "CEO, Móveis Design",
                testimonial: "Os unboxings geraram um impacto imenso nas nossas vendas online. Clientes podem ver o produto sendo desembalado e usado por pessoas reais, diminuindo nossas devoluções em 42%.",
                rating: 5
              },
              {
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
                name: "Fernanda Torres",
                role: "Gerente de Produto, BeautyCosmetics",
                testimonial: "Contratamos 5 vídeos para redes sociais e o ROI foi impressionante. O engajamento aumentou 3x comparado aos nossos anúncios tradicionais e o custo por aquisição caiu pela metade.",
                rating: 4.5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <TestimonialCard 
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}

function TestimonialCard({ image, name, role, testimonial, rating }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 relative shadow-sm border border-muted hover:border-primary/20 overflow-hidden"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full opacity-50"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      <div className="flex items-start mb-4 relative z-10">
        <motion.img 
          src={image} 
          alt={`Avatar de ${name}`} 
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-primary/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
        <div>
          <h4 className="text-foreground font-bold">{name}</h4>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-card-foreground mb-4 relative z-10">{testimonial}</p>
      <div className="flex items-center text-primary relative z-10">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <StarIcon className="h-5 w-5 fill-current" />
          </motion.div>
        ))}
        {rating % 1 !== 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.floor(rating) * 0.1 }}
          >
            <StarHalfIcon className="h-5 w-5 fill-current" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarHalfIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
      <path d="M12 2v15.8" />
    </svg>
  );
}
