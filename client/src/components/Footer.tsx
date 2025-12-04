import { Link } from "wouter";
import { useEffect, useState } from "react";
import logoSrc from "@/assets/lumpic-logo.png";
import logoLightSrc from "@/assets/lumpic-logo-light.png";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  return (
    <footer
      className="bg-background pt-12 pb-8 border-t border-muted"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 3.5rem)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16 mb-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4 w-full flex items-center justify-center md:justify-start">
              <img
                src={isDark ? logoSrc : logoLightSrc}
                alt="Lumpic"
                className="h-28 sm:h-32 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300"
              />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed max-w-sm">
              Juntamos quem tem demanda com quem tem talento.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p className="font-medium text-foreground mb-1">Contato</p>
              <p className="mb-1">
                <a href="mailto:suporte@lumpic.com" className="text-primary hover:text-primary/80">suporte@lumpic.com</a>
              </p>
              <p>
                <span className="text-muted-foreground text-sm">Parcerias:</span>{' '}
                <a href="mailto:parceiro@lumpic.com" className="text-primary hover:text-primary/80">parceiro@lumpic.com</a>
              </p>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <SocialLink icon={<InstagramIcon className="h-5 w-5" />} />
              <SocialLink icon={<YoutubeIcon className="h-5 w-5" />} />
              <SocialLink icon={<TiktokIcon className="h-5 w-5" />} />
              <SocialLink icon={<LinkedinIcon className="h-5 w-5" />} />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-foreground font-bold mb-6 text-lg tracking-tight">Para Freelancers</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <FooterLink href="/getting-started" text="Como Começar" target="_blank" />
              <FooterLink href="/video-tips" text="Dicas de Vídeo" target="_blank" />
              <FooterLink href="/payment-policy" text="Políticas de Pagamento" target="_blank" />
              <FooterLink href="/referral" text="Programa de Indicação" target="_blank" />
              <FooterLink href="/help" text="Central de Ajuda" target="_blank" />
              <FooterLink href="/community" text="Comunidade" target="_blank" />
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-foreground font-bold mb-6 text-lg tracking-tight">Para Contratantes</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <FooterLink href="/hiring" text="Como Contratar" target="_blank" />
              <FooterLink href="/benefits" text="Benefícios" target="_blank" />
              <FooterLink href="/quality" text="Garantia de Qualidade" target="_blank" />
              <FooterLink href="/enterprise" text="Empresas" target="_blank" />
              <FooterLink href="/contato" text="Suporte" target="_blank" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-12">
            <p className="text-muted-foreground text-sm order-2 md:order-1 text-center md:text-left">
              © 2026 Lumpic. Todos os direitos reservados.
            </p>
            <ul className="flex flex-wrap justify-center gap-4 order-1 md:order-2 list-none">
              <FooterLink href="/terms-of-use" text="Termos de Uso" target="_blank" className="text-sm" />
              <FooterLink href="/privacy-policy" text="Política de Privacidade" target="_blank" className="text-sm" />
              <FooterLink href="/cookies" text="Cookies" target="_blank" className="text-sm" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text, target, className = "" }: { href: string; text: string; target?: string; className?: string }) {
  return (
    <li>
      <a 
        href={href}
        target={target === "_blank" ? "_blank" : undefined}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`text-muted-foreground hover:text-primary ${className}`}
      >
        {text}
      </a>
    </li>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
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
