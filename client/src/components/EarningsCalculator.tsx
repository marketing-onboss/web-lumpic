import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function EarningsCalculator() {
  const [videoCount, setVideoCount] = useState(10);
  const [selectedVideoType, setSelectedVideoType] = useState("Depoimentos");
  
  const videoTypes = {
    "Depoimentos": 50,
    "Unboxing": 70,
    "Review": 60,
    "Promocional": 90,
    "Institucional": 100,
    "Mix de Vídeos": 75 // Average
  };
  
  const blinksPerVideo = videoTypes[selectedVideoType];
  const totalBlinks = blinksPerVideo * videoCount;
  const valueInReais = totalBlinks;
  
  return (
    <section className="py-16 bg-background" id="earnings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Quanto você pode ganhar?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calcule seu potencial de ganhos com base no número de vídeos que você pode criar por mês.
          </p>
        </div>

        <div className="bg-card rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="bg-muted p-6">
            <h3 className="text-xl font-bold text-foreground">Simulador de Ganhos</h3>
          </div>
          
          <div className="p-6">
            {/* Slider for videos per month */}
            <div className="mb-6">
              <label htmlFor="video-slider" className="block text-card-foreground mb-2">
                Quantidade de vídeos por mês:
              </label>
              <div className="flex items-center gap-4">
                <Slider
                  id="video-slider"
                  min={1}
                  max={30}
                  step={1}
                  value={[videoCount]}
                  onValueChange={(value) => setVideoCount(value[0])}
                  className="w-full"
                />
                <span className="text-foreground text-lg font-bold">{videoCount}</span>
              </div>
            </div>
            
            {/* Video type selection */}
            <div className="mb-6">
              <label className="block text-card-foreground mb-2">Tipo de vídeo:</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(videoTypes).map(([type, blinks]) => (
                  <Button
                    key={type}
                    variant={selectedVideoType === type ? "default" : "outline"}
                    onClick={() => setSelectedVideoType(type)}
                    className="h-auto py-3"
                  >
                    {type} ({blinks} Blinks)
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-muted p-4 rounded-lg border border-muted">
                <p className="text-muted-foreground text-sm">Blinks por vídeo</p>
                <p className="text-primary font-bold text-2xl">{blinksPerVideo}</p>
              </div>
              <div className="bg-muted p-4 rounded-lg border border-muted">
                <p className="text-muted-foreground text-sm">Total de Blinks</p>
                <p className="text-primary font-bold text-2xl">{totalBlinks}</p>
              </div>
              <div className="bg-muted p-4 rounded-lg border border-muted">
                <p className="text-muted-foreground text-sm">Valor em Reais</p>
                <p className="text-primary font-bold text-2xl">R$ {valueInReais.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-muted border-t border-muted">
            <p className="text-muted-foreground mb-4">
              <InfoIcon className="inline-block mr-2 h-4 w-4" /> 
              Este é apenas um cálculo estimado com base nos valores médios. O valor real pode variar 
              de acordo com a demanda e especificações de cada projeto.
            </p>
            <Button className="w-full">Começar a ganhar agora</Button>
          </div>
        </div>
        
        {/* Earnings testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">O que nossos criadores dizem</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop"
              name="Laura Santos"
              role="Design de Interiores"
              testimonial="Comecei gravando 5 depoimentos por semana. Em 3 meses, já estava fazendo disso minha renda principal. A plataforma conecta você com clientes que realmente valorizam qualidade."
              rating={5}
            />
            
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop"
              name="Carlos Mendes"
              role="Professor"
              testimonial="Faço unboxings e reviews nos finais de semana. No primeiro mês já faturei mais de R$ 1.200. O melhor é a flexibilidade e o pagamento pontual, sem complicações."
              rating={5}
            />
            
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
              name="Marina Costa"
              role="Estudante"
              testimonial="Consigo conciliar os estudos com a criação de conteúdo. Gravo entre 10-15 vídeos por mês e isso me ajuda a pagar as contas e ainda sobra para investir. Plataforma incrível!"
              rating={4.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ image, name, role, testimonial, rating }) {
  return (
    <div className="bg-card rounded-xl p-6 relative gradient-border">
      <div className="flex items-start mb-4">
        <img 
          src={image} 
          alt={`Avatar de ${name}`} 
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="text-foreground font-bold">{name}</h4>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-card-foreground mb-4">{testimonial}</p>
      <div className="flex items-center text-primary">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 fill-current" />
        ))}
        {rating % 1 !== 0 && (
          <StarHalfIcon className="h-5 w-5 fill-current" />
        )}
      </div>
    </div>
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
