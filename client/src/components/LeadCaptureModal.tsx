import { useState } from 'react';
import { X } from 'lucide-react';
import { checkEmailInList } from '@/lib/brevo';
import { useToast } from '@/hooks/use-toast';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: any) => void;
}

export default function LeadCaptureModal({ isOpen, onClose, onSuccess }: LeadCaptureModalProps) {
  const [step, setStep] = useState<'role' | 'form' | 'success'>('role');
  const [userRole, setUserRole] = useState<'freelancer' | 'empresa' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
    genero: '',
    cidade: '',
    areaAtuacao: '',
    portfolio: '',
    conviteAntecipado: 'sim',
    // Campos de empresa
    nomeEmpresa: '',
    cnpj: '',
    siteEmpresa: '',
    instagramEmpresa: '',
    telefoneEmpresa: '',
    segmentoEmpresa: '',
    tamanhoEmpresa: '',
    cidadeEmpresa: ''
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setEmailError('');
  };

  const handleRoleSelect = (role: 'freelancer' | 'empresa') => {
    setUserRole(role);
    setStep('form');
  };

  const handleSubmit = async () => {
    setEmailError('');
    
    if (userRole === 'freelancer') {
      if (formData.nome && formData.email && formData.idade && formData.genero && formData.cidade && formData.areaAtuacao) {
        setIsSubmitting(true);
        
        // Verificar se email já existe como freelancer
        const emailExists = await checkEmailInList(formData.email, 'freelancer');
        
        if (emailExists) {
          const msg = 'Este e-mail já está cadastrado como freelancer em nossa plataforma.';
          setEmailError(msg);
          toast({ title: 'E-mail já cadastrado', description: msg });
          setIsSubmitting(false);
          return;
        }
        
        const leadData = {
          type: 'freelancer',
          ...formData
        };
        
        setStep('success');
        await onSuccess(leadData);
        setIsSubmitting(false);
      } else {
        alert('Por favor, preencha todos os campos obrigatórios!');
      }
    } else if (userRole === 'empresa') {
      if (formData.nomeEmpresa && formData.email && formData.cnpj && formData.cidadeEmpresa && formData.segmentoEmpresa) {
        setIsSubmitting(true);
        
        // Verificar se email já existe como empresa
        const emailExists = await checkEmailInList(formData.email, 'empresa');
        
        if (emailExists) {
          const msg = 'Este e-mail já está cadastrado como empresa em nossa plataforma.';
          setEmailError(msg);
          toast({ title: 'E-mail já cadastrado', description: msg });
          setIsSubmitting(false);
          return;
        }
        
        const leadData = {
          type: 'empresa',
          ...formData
        };
        
        setStep('success');
        await onSuccess(leadData);
        setIsSubmitting(false);
      } else {
        alert('Por favor, preencha todos os campos obrigatórios!');
      }
    }
  };

  const handleBackToRole = () => {
    setStep('role');
    setUserRole(null);
    setFormData({
      nome: '',
      email: '',
      idade: '',
      genero: '',
      cidade: '',
      areaAtuacao: '',
      portfolio: '',
      conviteAntecipado: 'sim',
      nomeEmpresa: '',
      cnpj: '',
      siteEmpresa: '',
      instagramEmpresa: '',
      telefoneEmpresa: '',
      segmentoEmpresa: '',
      tamanhoEmpresa: '',
      cidadeEmpresa: ''
    });
  };

  const handleClose = () => {
    setStep('role');
    setUserRole(null);
    setFormData({
      nome: '',
      email: '',
      idade: '',
      genero: '',
      cidade: '',
      areaAtuacao: '',
      portfolio: '',
      conviteAntecipado: 'sim',
      nomeEmpresa: '',
      cnpj: '',
      siteEmpresa: '',
      instagramEmpresa: '',
      telefoneEmpresa: '',
      segmentoEmpresa: '',
      tamanhoEmpresa: '',
      cidadeEmpresa: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-card via-card to-card/95 rounded-2xl w-full max-w-lg shadow-2xl border border-border/50 overflow-hidden animate-in zoom-in-95 duration-300 backdrop-blur-xl">
        
        {/* STEP 1: Escolher Role */}
        {step === 'role' ? (
          <>
            <div className="relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent"></div>
              
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground hover:bg-muted/50 p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="relative p-8 pb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Bem-vindo à Lumpic</h2>
                <p className="text-muted-foreground">Escolha seu perfil para começar</p>
              </div>
            </div>

            <div className="px-8 pb-8 space-y-3">
              {/* Opção Freelancer */}
              <button
                onClick={() => handleRoleSelect('freelancer')}
                className="group w-full p-5 bg-muted/30 hover:bg-muted/60 border border-border/50 hover:border-primary/50 rounded-xl transition-all duration-200 text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Sou Criador</h3>
                    <p className="text-sm text-muted-foreground">Monetize seu talento criando vídeos</p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Opção Empresa */}
              <button
                onClick={() => handleRoleSelect('empresa')}
                className="group w-full p-5 bg-muted/30 hover:bg-muted/60 border border-border/50 hover:border-primary/50 rounded-xl transition-all duration-200 text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Sou Empresa</h3>
                    <p className="text-sm text-muted-foreground">Contrate criadores para sua marca</p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
                <p className="text-xs text-center text-muted-foreground">
                  <span className="font-semibold text-primary">⚡ Acesso Exclusivo</span> · Vagas limitadas para early adopters
                </p>
              </div>
            </div>
          </>
        ) : step === 'form' ? (
          <>
            {/* Header */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
              
              <div className="relative p-6 flex justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">{userRole === 'freelancer' ? '👤' : '🏢'}</span>
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {userRole === 'freelancer' ? 'Criador' : 'Empresa'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Complete seu cadastro</h2>
                  <p className="text-sm text-muted-foreground mt-1">Apenas alguns dados para começar</p>
                </div>
                <button
                  onClick={handleBackToRole}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 p-2 rounded-full transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form - FREELANCER */}
            {userRole === 'freelancer' ? (
              <div className="px-6 pb-6 space-y-4 max-h-[65vh] overflow-y-auto custom-scrollbar">
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome e Sobrenome *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome e sobrenome"
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  />
                </div>

                {emailError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-500 text-sm">
                    {emailError}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Idade *</label>
                    <input
                      type="number"
                      name="idade"
                      value={formData.idade}
                      onChange={handleChange}
                      placeholder="18"
                      min="13"
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Cidade *</label>
                    <input
                      type="text"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Gênero *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'].map(g => (
                      <label key={g} className="flex items-center cursor-pointer bg-muted/20 hover:bg-muted/40 p-3 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-200">
                        <input
                          type="radio"
                          name="genero"
                          value={g}
                          checked={formData.genero === g}
                          onChange={handleChange}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="ml-2 text-xs text-foreground">{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Área de atuação *</label>
                  <select
                    name="areaAtuacao"
                    value={formData.areaAtuacao}
                    onChange={handleChange}
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  >
                    <option value="">Selecione sua área</option>
                    <option value="videografia">Videografia</option>
                    <option value="fotografia">Fotografia</option>
                    <option value="edicao">Edição</option>
                    <option value="marketing">Marketing</option>
                    <option value="producao">Produção de Conteúdo</option>
                    <option value="criacao">Criação de Conteúdo</option>
                    <option value="animacao">Animação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Portfólio <span className="text-muted-foreground text-xs">(opcional)</span>
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://seu-portfolio.com"
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Convite antecipado *</label>
                  <div className="flex gap-3">
                    {['Sim', 'Não'].map(c => (
                      <label key={c} className="flex-1 flex items-center justify-center cursor-pointer bg-muted/20 hover:bg-muted/40 p-3 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-200">
                        <input
                          type="radio"
                          name="conviteAntecipado"
                          value={c.toLowerCase()}
                          checked={formData.conviteAntecipado === c.toLowerCase()}
                          onChange={handleChange}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="ml-2 text-sm font-medium text-foreground">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Form - EMPRESA */
              <div className="px-6 pb-6 space-y-4 max-h-[65vh] overflow-y-auto custom-scrollbar">
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome da Empresa *</label>
                  <input
                    type="text"
                    name="nomeEmpresa"
                    value={formData.nomeEmpresa}
                    onChange={handleChange}
                    placeholder="Sua empresa"
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-mail Corporativo *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contato@empresa.com"
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">CNPJ *</label>
                    <input
                      type="text"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      placeholder="00.000.000/0001-00"
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone <span className="text-muted-foreground text-xs">(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      name="telefoneEmpresa"
                      value={formData.telefoneEmpresa}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Segmento *</label>
                  <select
                    name="segmentoEmpresa"
                    value={formData.segmentoEmpresa}
                    onChange={handleChange}
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  >
                    <option value="">Selecione um segmento</option>
                    <option value="moda">Moda</option>
                    <option value="beleza">Beleza & Cosmética</option>
                    <option value="tech">Tecnologia</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saude">Saúde & Wellness</option>
                    <option value="educacao">Educação</option>
                    <option value="agencia">Agência Digital</option>
                    <option value="imobiliario">Imobiliário</option>
                    <option value="alimentos">Alimentos & Bebidas</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tamanho <span className="text-muted-foreground text-xs">(opcional)</span>
                    </label>
                    <select
                      name="tamanhoEmpresa"
                      value={formData.tamanhoEmpresa}
                      onChange={handleChange}
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                    >
                      <option value="">Selecione</option>
                      <option value="micro">Micro (1-10)</option>
                      <option value="pequena">Pequena (11-50)</option>
                      <option value="media">Média (51-250)</option>
                      <option value="grande">Grande (250+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Cidade *</label>
                    <input
                      type="text"
                      name="cidadeEmpresa"
                      value={formData.cidadeEmpresa}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Site <span className="text-muted-foreground text-xs">(opcional)</span>
                  </label>
                  <input
                    type="url"
                    name="siteEmpresa"
                    value={formData.siteEmpresa}
                    onChange={handleChange}
                    placeholder="https://www.empresa.com"
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Instagram <span className="text-muted-foreground text-xs">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    name="instagramEmpresa"
                    value={formData.instagramEmpresa}
                    onChange={handleChange}
                    placeholder="@sua_empresa"
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-muted/50 transition-all duration-200"
                  />
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-6 pt-4 border-t border-border/50">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full font-semibold py-3.5 rounded-xl transition-all duration-200 transform shadow-lg ${
                  isSubmitting 
                    ? 'bg-primary/50 text-primary-foreground/50 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-[1.02] active:scale-[0.98] shadow-primary/20'
                }`}
              >
                {isSubmitting ? 'Verificando...' : 'Garantir Meu Acesso'}
              </button>
              <p className="text-xs text-center text-muted-foreground mt-3">
                Seus dados estão protegidos e não serão compartilhados
              </p>
            </div>
          </>
        ) : (
          /* STEP 3: Success */
          <div className="relative p-12 flex flex-col items-center justify-center min-h-[400px]">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground hover:bg-muted/50 p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-in zoom-in duration-500">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Tudo pronto!</h3>
            <p className="text-muted-foreground text-center text-sm leading-relaxed max-w-sm">
              Cadastro realizado com sucesso. Em breve você receberá seu acesso exclusivo por e-mail.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Até breve!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
