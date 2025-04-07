import { ArrowRight } from "lucide-react";

export default function ServicesShowcase() {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=600&h=400&fit=crop",
      title: "Depoimentos em vídeo",
      description: "Dê seu testemunho sobre produtos e serviços de forma autêntica e profissional.",
      price: "A partir de 500 Blinks",
      duration: "~5 min"
    },
    {
      image: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=600&h=400&fit=crop",
      title: "Unboxings de produtos",
      description: "Abra, explore e apresente produtos de forma envolvente e informativa.",
      price: "A partir de 700 Blinks",
      duration: "~8 min"
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
      duration: "~10 min"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
      title: "Apresentações institucionais",
      description: "Represente empresas com profissionalismo e comunique seus valores de forma clara.",
      price: "A partir de 1000 Blinks",
      duration: "~15 min"
    }
  ];

  return (
    <section className="py-16 bg-card" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">O que você pode oferecer na plataforma?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diversos formatos de vídeo são requisitados diariamente. Encontre os que combinam com seu perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
            />
          ))}

          {/* Add More Card */}
          <div className="bg-muted rounded-xl flex flex-col items-center justify-center p-6 h-64 border border-muted transition-all duration-300 hover:border-primary">
            <div className="text-5xl text-primary mb-4">
              <PlusCircleIcon className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">E muito mais!</h3>
            <p className="text-muted-foreground text-center">
              Descubra outras oportunidades para monetizar seu talento na plataforma.
            </p>
            <button className="mt-4 text-primary font-medium flex items-center">
              Ver todos os serviços
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ image, title, description, price, duration }) {
  return (
    <div className="relative overflow-hidden rounded-xl group">
      <img 
        src={image}
        alt={title} 
        className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-card-foreground">{description}</p>
        <div className="mt-4 flex items-center">
          <span className="text-primary font-medium">{price}</span>
          <span className="mx-2 text-muted-foreground">|</span>
          <span className="text-muted-foreground">{duration}</span>
        </div>
      </div>
    </div>
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
