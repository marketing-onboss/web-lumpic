import { Link } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Zap, Users, Award, DollarSign } from "lucide-react";

export default function Benefits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="benefits" />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <button className="text-primary hover:text-primary/80 mb-6">
              ← Voltar para Início
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">Benefícios do Lumpic</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Por que escolher Lumpic para seus projetos de vídeo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Segurança Garantida</h3>
              <p className="text-muted-foreground">
                Plataforma segura com pagamento protegido. Seu dinheiro está seguro conosco.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Privacidade Total</h3>
              <p className="text-muted-foreground">
                Seus dados e conteúdo são protegidos por criptografia de ponta.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Rápido e Eficiente</h3>
              <p className="text-muted-foreground">
                Plataforma intuitiva com pagamento automatizado toda segunda-feira.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Comunidade Vibrante</h3>
              <p className="text-muted-foreground">
                Conecte-se com milhares de criadores e empresas em crescimento.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Suporte Profissional</h3>
              <p className="text-muted-foreground">
                Equipe dedicada pronta para ajudar com suas dúvidas e problemas.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Ganhos Reais</h3>
              <p className="text-muted-foreground">
                Receba pagamentos semanais por seu trabalho criativo.
              </p>
            </div>
          </div>

          <section className="bg-card rounded-lg p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Para Freelancers</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Ganhe regularmente:</strong> Pagamentos automáticos toda segunda-feira</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Trabalhe com flexibilidade:</strong> Escolha seus próprios projetos e horários</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Cresça sua reputação:</strong> Ganhe avaliações e resenhas de clientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Acesso a recursos:</strong> Tutoriais, dicas e ferramentas para criadores</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Sem compromisso:</strong> Sem contratos de longo prazo, cancele quando quiser</span>
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Para Contratantes</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Talentos variados:</strong> Milhares de criadores com diferentes estilos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Qualidade garantida:</strong> Criadores avaliados pela comunidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Processos claros:</strong> Contrato seguro e suporte em cada etapa</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Preços competitivos:</strong> Diversidade de orçamentos para qualquer projeto</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">✓</span>
                <span><strong>Entrega confiável:</strong> Criadores comprometidos com prazos</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
