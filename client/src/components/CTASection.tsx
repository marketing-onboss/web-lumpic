import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -left-64 top-1/4 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute -right-64 bottom-1/4 w-96 h-96 rounded-full bg-secondary/10 filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Pronto para transformar seu talento em renda real?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se aos milhares de criadores que já estão ganhando dinheiro com seus vídeos na plataforma.
          </p>
          
          <div className="mb-8">
            <Button className="font-bold rounded-xl text-lg px-10 py-7 shadow-lg shadow-primary/20">
              Começar Agora — É Grátis!
            </Button>
            <p className="text-muted-foreground mt-3 text-sm">Não é necessário cartão de crédito</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <div className="flex items-center">
              <div className="bg-background rounded-full p-2 mr-3">
                <ShieldIcon className="text-primary h-4 w-4" />
              </div>
              <p className="text-card-foreground text-sm">100% Seguro</p>
            </div>
            <div className="flex items-center">
              <div className="bg-background rounded-full p-2 mr-3">
                <UsersIcon className="text-primary h-4 w-4" />
              </div>
              <p className="text-card-foreground text-sm">+5.000 Freelancers Ativos</p>
            </div>
            <div className="flex items-center">
              <div className="bg-background rounded-full p-2 mr-3">
                <StarIcon className="text-primary h-4 w-4" />
              </div>
              <p className="text-card-foreground text-sm">4.8/5 Estrelas (1204 avaliações)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
