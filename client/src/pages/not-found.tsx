import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-5xl font-extrabold text-primary">404</h1>
          <h2 className="mt-2 text-3xl font-bold text-foreground">Página não encontrada</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/">
            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Voltar para a página inicial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}