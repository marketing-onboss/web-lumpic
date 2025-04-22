import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-primary font-bold text-2xl">Clip</span>
              <span className="text-foreground font-bold text-2xl">Up</span>
            </div>
            <p className="text-muted-foreground mb-4">
              A plataforma que conecta freelancers de vídeo com oportunidades reais de renda.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<InstagramIcon className="h-5 w-5" />} />
              <SocialLink icon={<YoutubeIcon className="h-5 w-5" />} />
              <SocialLink icon={<TiktokIcon className="h-5 w-5" />} />
              <SocialLink icon={<LinkedinIcon className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <FooterLink href="/" text="Início" />
              <FooterLink href="#para-voce" text="Para Você" />
              <FooterLink href="#servicos" text="Serviços" />
              <FooterLink href="#earnings" text="Ganhos" />
              <FooterLink href="#blink" text="Sobre Blinks" />
              <FooterLink href="#perguntas" text="Perguntas Frequentes" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-6">Para Freelancers</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Como Começar" />
              <FooterLink href="#" text="Dicas de Vídeo" />
              <FooterLink href="#" text="Políticas de Pagamento" />
              <FooterLink href="#" text="Programa de Indicação" />
              <FooterLink href="#" text="Central de Ajuda" />
              <FooterLink href="#" text="Comunidade" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-6">Para Contratantes</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Como Contratar" />
              <FooterLink href="#" text="Benefícios" />
              <FooterLink href="#" text="Garantia de Qualidade" />
              <FooterLink href="#" text="Empresas" />
              <FooterLink href="#" text="API de Integração" />
              <FooterLink href="#" text="Suporte" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2023 ClipUp. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="#" text="Termos de Uso" className="text-sm" />
              <FooterLink href="#" text="Política de Privacidade" className="text-sm" />
              <FooterLink href="#" text="Cookies" className="text-sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text, className = "" }) {
  return (
    <li>
      <a 
        href={href} 
        className={`text-muted-foreground hover:text-primary ${className}`}
      >
        {text}
      </a>
    </li>
  );
}

function SocialLink({ icon }) {
  return (
    <a href="#" className="text-muted-foreground hover:text-primary">
      {icon}
    </a>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M15 2v20" />
      <path d="M9 16v6" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
