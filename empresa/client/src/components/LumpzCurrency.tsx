export default function LumpzCurrency() {
  return (
    <section className="py-16 lumpz-section" id="lumpz">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Lumpz: Contrate com agilidade, controle e segurança</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Carregue sua carteira com Lumpz e contrate freelancers sem complicação.
            Experiência sem taxas surpresas, sem burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-muted mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Como Funciona:</h3>
              <ul className="space-y-4">
                <FeatureItem 
                  icon={<CoinsIcon className="h-5 w-5" />}
                  title="1 Lumpz = R$ 5,00"
                  description="Valor transparente durante a recarga"
                />
                <FeatureItem 
                  icon={<CheckIcon className="h-5 w-5" />}
                  title="Criar pedidos e pagar com apenas 1 clique 🧾"
                  description="Sem burocracia ou atrasos, tudo simplificado"
                />
                <FeatureItem 
                  icon={<WalletIcon className="h-5 w-5" />}
                  title="Aproveitar bônus e descontos em recargas 🎁"
                  description="Quanto mais Lumpz você compra, maiores os benefícios"
                />
                <FeatureItem 
                  icon={<BarChartIcon className="h-5 w-5" />}
                  title="Monitorar seu saldo e histórico com clareza 📊"
                  description="Controle total sobre seus gastos e contratações"
                />
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-muted">
              <h3 className="text-xl font-bold text-foreground mb-4">Por que usar Lumpz na sua empresa?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BenefitItem 
                  icon={<ZapIcon className="h-5 w-5" />}
                  text="Aprovações e contratos digitais simplificados"
                />
                <BenefitItem 
                  icon={<BanIcon className="h-5 w-5" />}
                  text="Elimina burocracia com freelancers"
                />
                <BenefitItem 
                  icon={<LockIcon className="h-5 w-5" />}
                  text="Previsibilidade de custos em campanhas"
                />
                <BenefitItem 
                  icon={<RefreshIcon className="h-5 w-5" />}
                  text="Flexibilidade para ajustes em tempo real"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full filter blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=800&fit=crop" 
                alt="Executivo analisando dados" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
              />
              
              {/* Dashboard mockup overlayed */}
              <div className="absolute -bottom-8 -right-8 bg-card p-4 rounded-xl shadow-xl border border-muted w-3/4 z-20">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-foreground font-bold">Carteira Empresarial</h4>
                  <span className="text-primary font-bold">500 Lumpz</span>
                </div>
                <div className="bg-muted p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-card-foreground text-sm">Equivalente a</p>
                      <p className="text-foreground font-bold">R$ 2.500,00</p>
                    </div>
                    <button className="bg-primary text-white px-3 py-1 rounded-lg text-sm">Recarregar</button>
                  </div>
                </div>
                <div className="text-muted-foreground text-xs">Última atualização: hoje às 15:45</div>
              </div>
            </div>

            <div className="mt-16 bg-card rounded-xl p-8 shadow-lg border border-muted">
              <h3 className="text-xl font-bold text-foreground mb-4">Simplicidade e transparência</h3>
              <p className="text-card-foreground mb-6">
                Carregue sua carteira uma vez e faça múltiplas contratações.
                Sem necessidade de aprovações financeiras a cada projeto.
              </p>
              
              <h3 className="text-xl font-bold text-foreground mb-4">Pacotes Empresariais Exclusivos</h3>
              <p className="text-card-foreground mb-6">
                Para empresas que desejam produzir conteúdo em escala, oferecemos pacotes especiais 
                com descontos progressivos e acesso a criadores premium.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="text-foreground font-bold mb-2">Faturamento Simplificado (PJ)</h4>
                <p className="text-muted-foreground">
                  Emitimos nota fiscal para sua empresa e facilitamos a gestão fiscal.
                  Centralize todas as contratações de criadores em um único fornecedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <li className="flex items-start">
      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
        <span className="text-white">{icon}</span>
      </div>
      <div>
        <p className="text-foreground font-medium">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </li>
  );
}

interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
}

function BenefitItem({ icon, text }: BenefitItemProps) {
  return (
    <div className="flex items-start">
      <div className="text-secondary text-lg mr-3 mt-1">
        {icon}
      </div>
      <p className="text-card-foreground">{text}</p>
    </div>
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

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

function RefreshIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 2v6h6" />
      <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
      <path d="M21 22v-6h-6" />
      <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    </svg>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function BanIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m4.9 4.9 14.2 14.2" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}