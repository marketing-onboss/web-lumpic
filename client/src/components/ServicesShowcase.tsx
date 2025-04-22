import { ArrowRight, Clock, DollarSign, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesShowcase() {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=600&h=400&fit=crop",
      title: "Depoimentos em vídeo",
      description: "Dê seu testemunho sobre produtos e serviços de forma autêntica e profissional.",
      price: "A partir de 500 Blinks",
      duration: "~5 min",
      badge: "Popular",
      badgeColor: "bg-purple-500"
    },
    {
      image: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=600&h=400&fit=crop",
      title: "Unboxings de produtos",
      description: "Abra, explore e apresente produtos de forma envolvente e informativa.",
      price: "A partir de 700 Blinks",
      duration: "~8 min",
      badge: "Alta demanda",
      badgeColor: "bg-green-500"
    },
    {
      image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=600&h=400&fit=crop",
      title: "Reações e reviews",
      description: "Compartilhe suas reações e opiniões honestas sobre diversos produtos e serviços.",
      price: "A partir de 600 Blinks",
      duration: "~7 min"
    },
    {
      image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=600&h=400&fit=crop",
      title: "Vídeos promocionais para marcas",
      description: "Crie conteúdo atrativo que conecta marcas com seu público-alvo.",
      price: "A partir de 900 Blinks",
      duration: "~10 min",
      badge: "Bem pago",
      badgeColor: "bg-amber-500"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
      title: "Apresentações institucionais",
      description: "Represente empresas com profissionalismo e comunique seus valores de forma clara.",
      price: "A partir de 1000 Blinks",
      duration: "~15 min"
    }
  ];

  // Efeito de fade in para os cards
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
    <section className="py-16 bg-card" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Oportunidades de vídeo em alta</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">O que você pode oferecer na plataforma?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diversos formatos de vídeo são requisitados diariamente. Encontre os que combinam com seu perfil.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <ServiceCard 
                image={service.image}
                title={service.title}
                description={service.description}
                price={service.price}
                duration={service.duration}
                badge={service.badge}
                badgeColor={service.badgeColor}
              />
            </motion.div>
          ))}

          {/* Add More Card */}
          <motion.div 
            className="relative bg-muted rounded-xl flex flex-col items-center justify-center p-6 h-64 border border-muted transition-all duration-300 hover:border-primary overflow-hidden"
            variants={item}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="text-5xl text-primary mb-4 z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PlusCircleIcon className="h-16 w-16" />
            </motion.div>
            <h3 className="text-xl font-bold text-foreground mb-2 z-10">E muito mais!</h3>
            <p className="text-muted-foreground text-center z-10">
              Descubra outras oportunidades para monetizar seu talento na plataforma.
            </p>
            <motion.button 
              className="mt-4 text-primary font-medium flex items-center z-10"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Ver todos os serviços
              <ArrowRight className="h-4 w-4 ml-1" />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Indicadores de categoria (novo) */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-background rounded-full px-6 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm">Popular</span>
          </div>
          <div className="bg-background rounded-full px-6 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Alta demanda</span>
          </div>
          <div className="bg-background rounded-full px-6 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-sm">Bem pago</span>
          </div>
          <div className="bg-background rounded-full px-6 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm">Ideal para iniciantes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  badge?: string;
  badgeColor?: string;
}

function ServiceCard({ image, title, description, price, duration, badge, badgeColor }: ServiceCardProps) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl group h-full bg-background shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={title} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        {badge && (
          <div className={`absolute top-3 right-3 ${badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full z-10`}>
            {badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-0 bg-primary/30 backdrop-blur-sm transition-all duration-300"
          whileHover={{ opacity: 1 }}
        >
          <motion.div 
            className="bg-white rounded-full p-3"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Play className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 text-primary mr-1" />
            <span className="text-primary font-medium">{price}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-muted-foreground">{duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PlusCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}
