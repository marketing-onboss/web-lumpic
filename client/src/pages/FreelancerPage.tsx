import SharedNavbar from "@/components/SharedNavbar";

export default function FreelancerPage() {
  return (
    <div className="bg-background min-h-screen">
      <SharedNavbar currentPage="freelancer" />
      
      {/* Hero Section - Freelancer */}
      <section className="pt-20 pb-16 md:pb-24 bg-background" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Use apenas seu smartphone para gravar vídeos e ganhar dinheiro online
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                ClipUp conecta freelancers com empresas que precisam de vídeos reais. Receba pedidos, grave vídeos simples e ganhe Lumpz.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Começar Agora
                </button>
                <button className="border border-muted-foreground text-foreground hover:bg-muted px-6 py-3 rounded-lg font-medium transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full filter blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pessoa gravando vídeo com smartphone" 
                className="rounded-xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-card border-y border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">12.540</h3>
              <p className="text-muted-foreground">Criadores ativos</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">1.300+</h3>
              <p className="text-muted-foreground">Empresas contratando</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">R$ 5,6 mi</h3>
              <p className="text-muted-foreground">Pagos aos criadores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-muted py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 ClipUp. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}