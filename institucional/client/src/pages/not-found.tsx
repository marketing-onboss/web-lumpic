export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Página não encontrada</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          A página que você está procurando não existe ou foi movida para outro lugar.
        </p>
        <a 
          href="/"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}