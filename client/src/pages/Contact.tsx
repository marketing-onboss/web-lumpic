import { Link, useLocation } from "wouter";
import SharedNavbar from "@/components/SharedNavbar";
import Footer from "@/components/Footer";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [, setLocation] = useLocation();
  
  // Handler para CTA com captura de lead
  const handleCadastroCTA = useLeadCapture(() => setLocation('/cadastro'));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SharedNavbar currentPage="contact" />
      
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <Link href="/">
              <button className="text-primary hover:text-primary/80 mb-6 mt-8 flex items-center">
                ← Voltar para Início
              </button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tem dúvidas? Estamos aqui para ajudar! Entre em contato através do formulário abaixo ou direto em um de nossos canais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">E-mail</h3>
              </div>
              <p className="text-muted-foreground mb-2">Envie suas dúvidas por e-mail</p>
              <a href="mailto:suporte@lumpic.com" className="text-primary hover:text-primary/80 font-medium">
                suporte@lumpic.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">Responderemos em até 24 horas</p>
              <div className="mt-3">
                <p className="text-muted-foreground mb-1 text-sm font-medium">Parcerias e contato comercial</p>
                <a href="mailto:parceiro@lumpic.com" className="text-primary hover:text-primary/80 font-medium">parceiro@lumpic.com</a>
              </div>
            </div>

            {/* Telefone removido conforme solicitado */}

            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Localização</h3>
              </div>
              <p className="text-muted-foreground mb-2">Visite nossos escritórios</p>
              <div className="text-foreground font-medium space-y-1">
                <p>
                  Rio Branco - AC
                </p>
                <p>
                  Santa Catarina - FLN
                </p>
                <p className="text-sm text-muted-foreground mt-2">Brasil <span className="ml-2">🇧🇷</span></p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Segunda a Sexta:</strong> 9h às 18h</p>
                <p><strong className="text-foreground">Sábado:</strong> 10h às 14h</p>
                <p><strong className="text-foreground">Domingo:</strong> Fechado</p>
                <p className="text-sm mt-4">Resposta de e-mails em até 24 horas úteis</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-md">
              <h3 className="text-lg font-semibold text-foreground mb-4">Perguntas Frequentes</h3>
              <p className="text-muted-foreground mb-4">
                Antes de nos contatar, confira nossas respostas para as perguntas mais frequentes.
              </p>
              <Link href="/help">
                <button className="px-6 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition">
                  Ver FAQ
                </button>
              </Link>
            </div>

            <div className="bg-primary/10 border border-primary rounded-lg p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Está pronto para começar?</h3>
              <p className="text-muted-foreground mb-4">
                Cadastre-se agora e comece a ganhar com seus vídeos!
              </p>
              <button onClick={handleCadastroCTA} className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                Criar Conta Grátis
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
