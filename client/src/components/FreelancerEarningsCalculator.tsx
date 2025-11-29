import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, ChevronDown, ChevronUp, Sparkles, Clock, DollarSign, CalendarClock, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoType {
  name: string;
  lumpz: number;
  difficulty: "easy" | "medium" | "hard";
  time: string;
  demand: "high" | "medium" | "low";
}

export default function FreelancerEarningsCalculator() {
  const [videoCount, setVideoCount] = useState(10);
  const [selectedVideoType, setSelectedVideoType] = useState("Depoimentos");
  const [showCalculator, setShowCalculator] = useState(true);
  const [isCalculated, setIsCalculated] = useState(false);
  
  const videoTypes: Record<string, VideoType> = {
    "Depoimentos": {
      name: "Depoimentos",
      lumpz: 50,
      difficulty: "easy",
      time: "5-10 min",
      demand: "high"
    },
    "Unboxing": {
      name: "Unboxing",
      lumpz: 70,
      difficulty: "medium",
      time: "10-15 min",
      demand: "medium"
    },
    "Review": {
      name: "Review",
      lumpz: 60,
      difficulty: "medium",
      time: "7-12 min",
      demand: "high"
    },
    "Promocional": {
      name: "Promocional",
      lumpz: 90,
      difficulty: "hard",
      time: "10-20 min",
      demand: "high"
    },
    "Institucional": {
      name: "Institucional",
      lumpz: 100,
      difficulty: "hard",
      time: "15-25 min",
      demand: "medium"
    },
    "Mix de Vídeos": {
      name: "Mix de Vídeos",
      lumpz: 75,
      difficulty: "medium",
      time: "10-15 min",
      demand: "medium"
    },
  };
  
  // Cálculo de ganhos do freelancer
  const lumpzPerVideo = videoTypes[selectedVideoType].lumpz;
  const totalLumpzMonth = lumpzPerVideo * videoCount;
  // Conversão para Reais (1 crédito Lumpz = R$ 2)
  const totalReaisMonth = totalLumpzMonth * 2;
  // Cálculo anual
  const totalReaisYear = totalReaisMonth * 12;
  
  // Para animação do contador
  const [animatedValue, setAnimatedValue] = useState(totalReaisMonth);
  
  useEffect(() => {
    if (isCalculated) {
      const duration = 1000; // 1 segundo para a animação
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.floor(progress * totalReaisMonth);
        
        if (frame === totalFrames) {
          clearInterval(timer);
          setAnimatedValue(totalReaisMonth);
        } else {
          setAnimatedValue(currentValue);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [isCalculated, totalReaisMonth]);
  
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
            <span>Simulador de ganhos</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Quanto você pode ganhar?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calcule seus ganhos mensais e anuais baseado na quantidade e tipo de vídeos que você criar.
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
              Seu Simulador de Ganhos
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
                              {type} ({data.lumpz} créditos Lumpz)
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
                        Calcular meus ganhos
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
                          <p className="text-primary font-bold text-2xl">{lumpzPerVideo} créditos Lumpz</p>
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
                            <p className="text-muted-foreground text-sm">Ganho mensal</p>
                          </div>
                          <p className="text-primary font-bold text-2xl">R$ {totalReaisMonth.toLocaleString('pt-BR')}</p>
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
                            <p className="text-muted-foreground text-sm">Ganho anual</p>
                          </div>
                          <p className="text-primary font-bold text-2xl">
                            R$ {totalReaisYear.toLocaleString('pt-BR')}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="p-6 bg-muted border-t border-muted">
                  <p className="text-muted-foreground mb-4 text-sm">
                    <Info className="inline-block mr-2 h-4 w-4" /> 
                    Estes são cálculos estimados com base nos valores de mercado. Seus ganhos reais podem variar de acordo 
                    com a qualidade do conteúdo, facilidade de produção, disponibilidade e demanda por seu tipo de vídeo.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="w-full shadow-lg shadow-primary/20 font-medium">
                      Começar a ganhar agora <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
