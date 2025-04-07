export default function TargetAudience() {
  const audienceCards = [
    {
      icon: <VideoIcon className="h-8 w-8" />,
      title: "Gosta de aparecer em frente às câmeras",
      description: "Você tem carisma e não tem medo de se expressar? Aqui você transforma esse talento em renda.",
      color: "text-primary"
    },
    {
      icon: <MicrophoneIcon className="h-8 w-8" />,
      title: "Tem boa dicção e comunicação",
      description: "Sua voz e clareza na comunicação são seus diferenciais? Use-os para criar conteúdo valioso.",
      color: "text-primary"
    },
    {
      icon: <MobileIcon className="h-8 w-8" />,
      title: "Já grava vídeos para redes sociais",
      description: "Você já está criando conteúdo? Monetize ainda mais seu talento com nossa plataforma.",
      color: "text-primary"
    },
    {
      icon: <CoinsIcon className="h-8 w-8" />,
      title: "Quer ganhar uma grana extra no seu tempo livre",
      description: "Trabalhe quando quiser e aumente sua renda com projetos flexíveis que se encaixam na sua rotina.",
      color: "text-secondary"
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Quer trabalhar de casa",
      description: "Monte seu mini estúdio em casa e produza conteúdo profissional sem sair do conforto do seu lar.",
      color: "text-secondary"
    },
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      title: "Quer trabalhar de qualquer lugar do mundo",
      description: "Liberdade geográfica real. Tudo que você precisa é de um smartphone e conexão com internet.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 bg-background" id="para-voce">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">É para você...</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você se identifica com um ou mais destes perfis, o ClipUp é a plataforma perfeita para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 transition-all duration-300 card-glow hover:translate-y-[-5px]"
            >
              <div className={`mb-4 ${card.color} text-3xl`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
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
