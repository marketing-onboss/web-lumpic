import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'pt-BR' | 'en-US' | 'es-ES';

// Estrutura das traduções
interface TranslationStrings {
  [key: string]: string;
}

// Interface para as traduções por idioma
interface Translations {
  [language: string]: TranslationStrings;
}

// Contexto de idioma
interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

// Traduções
const translations: Translations = {
  'pt-BR': {
    // Navegação
    'nav.home': 'Início',
    'nav.home_short': 'Início',
    'nav.freelancer': 'Freelancer',
    'nav.freelancer_short': 'Freelancer',
    'nav.business': 'Empresa',
    'nav.business_short': 'Empresa',
    'nav.login': 'Entrar',
    'nav.signup': 'Cadastre-se',
    'nav.account': 'Conta',
    'nav.contact': 'Contato',
    'nav.contact_short': 'Contato',
    
    // Hero Section
    'hero.title': 'Conectamos Marcas que Precisam Escalar a Criadores que Sabem Entregar.',
    'hero.subtitle': 'Esqueça o conteúdo genérico e a desvalorização profissional. A Lumpic é o ambiente seguro onde Empresas encontram vídeos originais de alta conversão e Criadores encontram projetos que valorizam sua expertise.',
    'hero.cta': 'Comece Agora',
    'hero.explore': 'Explorar',
    'hero.freelancer.button': 'Quero ser freelancer',
    'hero.business.button': 'Quero ser contratante',
    
    // How it works
    'how.title': 'Como funciona',
    'how.subtitle': 'Transforme seu talento em renda em apenas 4 passos simples',
    'how.step1.title': 'Cadastre-se',
    'how.step1.description': 'Crie sua conta gratuitamente em menos de 2 minutos',
    'how.step2.title': 'Crie seu perfil',
    'how.step2.description': 'Destaque suas habilidades e experiências',
    'how.step3.title': 'Encontre projetos',
    'how.step3.description': 'Navegue por oportunidades que combinam com você',
    'how.step4.title': 'Receba pagamentos',
    'how.step4.description': 'Ganhe em créditos Lumpz e converta para sua moeda',
    
    // Features section
    'features.title': 'Por que escolher a Lumpic?',
    'features.subtitle': 'Conectamos empresas e criadores para realizar trabalhos de alta performance.',
    'features.1.title': 'Pagamentos Seguros',
    'features.1.description': 'Sistema protegido com garantia de recebimento',
    'features.2.title': 'Oportunidades Globais',
    'features.2.description': 'Acesse projetos de empresas do mundo todo',
    'features.3.title': 'Ferramentas Profissionais',
    'features.3.description': 'Gerencie projetos e comunique-se com clientes',
    'features.4.title': 'Crescimento Contínuo',
    'features.4.description': 'Desenvolva suas habilidades e aumente seus ganhos',
    
    // Currency section
    'currency.title': 'Conheça os créditos Lumpz',
    'currency.subtitle': 'O sistema de créditos do ecossistema Lumpic',
    'currency.description': 'Os créditos Lumpz são a unidade virtual da plataforma. Com eles você pode receber por seus trabalhos, contratar serviços e acessar recursos exclusivos.',
    'currency.value': '1 crédito Lumpz = R$ 2,00',
    'currency.cta': 'Saiba mais',
    
    // Testimonials
    'testimonials.title': 'O que nossos usuários dizem',
    'testimonials.viewAll': 'Ver todos',
    
    // Calculator
    'calculator.title': 'Calcule seus ganhos',
    'calculator.subtitle': 'Veja quanto você pode ganhar como criador de conteúdo',
    'calculator.videos': 'Vídeos por mês',
    'calculator.videoType': 'Tipo de vídeo',
    'calculator.beginner': 'Iniciante',
    'calculator.intermediate': 'Intermediário',
    'calculator.expert': 'Expert',
    'calculator.potential': 'Ganho potencial',
    'calculator.perMonth': 'por mês',
    'calculator.disclaimer': 'Os valores são estimativas baseadas na média de ganhos da plataforma',
    'calculator.basic': 'Básico',
    'calculator.standard': 'Padrão',
    'calculator.premium': 'Premium',
    'calculator.calculate': 'Calcular',
    'calculator.videoCount.label': 'Quantidade de vídeos',
    'calculator.videoType.label': 'Tipo de vídeo',
    'calculator.lumpzValue': 'Valor em créditos Lumpz',
    'calculator.realValue': 'Valor em Reais',
    
    // Call to action
    'cta.title': 'Pronto para começar?',
    'cta.subtitle': 'Junte-se a milhares de criadores e empresas na plataforma',
    'cta.button': 'Criar conta grátis',
    'cta.login': 'Já tem conta? Faça login',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.terms': 'Termos de Uso',
    'footer.privacy': 'Política de Privacidade',
    'footer.help': 'Ajuda',
    'footer.contact': 'Contato',
    
    // Theme
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'theme.system': 'Sistema',
    'theme.select': 'Selecione o tema',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Tudo o que você precisa saber',
    'faq.seeMore': 'Ver mais',
    
    // Freelancer Page
    'freelancer.hero.title': 'Transforme seu talento em renda',
    'freelancer.hero.subtitle': 'Crie vídeos, ganhe créditos Lumpz e construa uma carreira de sucesso',
    'freelancer.benefits.title': 'Benefícios para Freelancers',
    'freelancer.cta': 'Comece sua jornada',
    
    // Business Page
    'business.hero.title': 'Encontre os melhores criadores de vídeo',
    'business.hero.subtitle': 'Potencialize seus resultados com conteúdo autêntico e profissional',
    'business.benefits.title': 'Vantagens para Empresas',
    'business.cta': 'Contratar agora',
  },
  'en-US': {
    // Navigation
    'nav.home': 'Home',
    'nav.home_short': 'Home',
    'nav.freelancer': 'Freelancer',
    'nav.freelancer_short': 'Creator',
    'nav.business': 'Business',
    'nav.business_short': 'Business',
    'nav.login': 'Log In',
    'nav.signup': 'Sign Up',
    'nav.account': 'Account',
    'nav.contact': 'Contact',
    'nav.contact_short': 'Contact',
    
    // Hero Section
    'hero.title': 'Real videos. Real results.',
    'hero.subtitle': 'No more cold campaigns with generic content. Hire expert content creators.',
    'hero.cta': 'Get Started',
    'hero.explore': 'Explore',
    'hero.freelancer.button': 'I want to be a freelancer',
    'hero.business.button': 'I want to hire creators',
    
    // How it works
    'how.title': 'How it works',
    'how.subtitle': 'Turn your talent into income in just 4 simple steps',
    'how.step1.title': 'Sign Up',
    'how.step1.description': 'Create your free account in less than 2 minutes',
    'how.step2.title': 'Create your profile',
    'how.step2.description': 'Highlight your skills and experience',
    'how.step3.title': 'Find projects',
    'how.step3.description': 'Browse opportunities that match your skills',
    'how.step4.title': 'Get paid',
    'how.step4.description': 'Earn in Lumpz and convert to your currency',
    
    // Features section
    'features.title': 'Why choose Lumpic?',
    'features.subtitle': 'Complete platform for content creators',
    'features.1.title': 'Secure Payments',
    'features.1.description': 'Protected system with payment guarantee',
    'features.2.title': 'Global Opportunities',
    'features.2.description': 'Access projects from companies worldwide',
    'features.3.title': 'Professional Tools',
    'features.3.description': 'Manage projects and communicate with clients',
    'features.4.title': 'Continuous Growth',
    'features.4.description': 'Develop your skills and increase your earnings',
    
    // Currency section
    'currency.title': 'Meet Lumpz',
    'currency.subtitle': 'The currency of the Lumpic ecosystem',
    'currency.description': 'Lumpz is the official currency of Lumpic. With it, you can get paid for your work, hire services, and access exclusive resources.',
    'currency.value': '1 Lumpz = $0.40',
    'currency.cta': 'Learn more',
    
    // Testimonials
    'testimonials.title': 'What our users say',
    'testimonials.viewAll': 'View all',
    
    // Calculator
    'calculator.title': 'Calculate your earnings',
    'calculator.subtitle': 'See how much you can earn as a content creator',
    'calculator.videos': 'Videos per month',
    'calculator.videoType': 'Video type',
    'calculator.beginner': 'Beginner',
    'calculator.intermediate': 'Intermediate',
    'calculator.expert': 'Expert',
    'calculator.potential': 'Potential earnings',
    'calculator.perMonth': 'per month',
    'calculator.disclaimer': 'Values are estimates based on platform average earnings',
    'calculator.basic': 'Basic',
    'calculator.standard': 'Standard',
    'calculator.premium': 'Premium',
    'calculator.calculate': 'Calculate',
    'calculator.videoCount.label': 'Number of videos',
    'calculator.videoType.label': 'Video type',
    'calculator.lumpzValue': 'Lumpz value',
    'calculator.realValue': 'Dollar value',
    
    // Call to action
    'cta.title': 'Ready to start?',
    'cta.subtitle': 'Join thousands of creators and companies on the platform',
    'cta.button': 'Create free account',
    'cta.login': 'Already have an account? Log in',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy Policy',
    'footer.help': 'Help',
    'footer.contact': 'Contact',
    
    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    'theme.select': 'Select theme',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know',
    'faq.seeMore': 'See more',
    
    // Freelancer Page
    'freelancer.hero.title': 'Turn your talent into income',
    'freelancer.hero.subtitle': 'Create videos, earn Lumpz, and build a successful career',
    'freelancer.benefits.title': 'Benefits for Freelancers',
    'freelancer.cta': 'Start your journey',
    
    // Business Page
    'business.hero.title': 'Find the best video creators',
    'business.hero.subtitle': 'Enhance your results with authentic and professional content',
    'business.benefits.title': 'Advantages for Businesses',
    'business.cta': 'Hire now',
  },
  'es-ES': {
    // Navegación
    'nav.home': 'Inicio',
    'nav.home_short': 'Inicio',
    'nav.freelancer': 'Freelancer',
    'nav.freelancer_short': 'Creador',
    'nav.business': 'Empresa',
    'nav.business_short': 'Empresa',
    'nav.login': 'Iniciar Sesión',
    'nav.signup': 'Registrarse',
    'nav.account': 'Cuenta',
    'nav.contact': 'Contacto',
    'nav.contact_short': 'Contacto',
    
    // Sección Hero
    'hero.title': 'Videos reales. Resultados reales.',
    'hero.subtitle': 'Basta de campañas frías con contenido genérico. Contrata creadores de contenido expertos.',
    'hero.cta': 'Comenzar Ahora',
    'hero.explore': 'Explorar',
    'hero.freelancer.button': 'Quiero ser freelancer',
    'hero.business.button': 'Quiero ser contratante',
    
    // Cómo funciona
    'how.title': 'Cómo funciona',
    'how.subtitle': 'Transforma tu talento en ingresos en solo 4 sencillos pasos',
    'how.step1.title': 'Regístrate',
    'how.step1.description': 'Crea tu cuenta gratis en menos de 2 minutos',
    'how.step2.title': 'Crea tu perfil',
    'how.step2.description': 'Destaca tus habilidades y experiencias',
    'how.step3.title': 'Encuentra proyectos',
    'how.step3.description': 'Navega por oportunidades que coincidan contigo',
    'how.step4.title': 'Recibe pagos',
    'how.step4.description': 'Gana en Lumpz y convierte a tu moneda',
    
    // Sección de características
    'features.title': '¿Por qué elegir Lumpic?',
    'features.subtitle': 'Plataforma completa para creadores de contenido',
    'features.1.title': 'Pagos Seguros',
    'features.1.description': 'Sistema protegido con garantía de recepción',
    'features.2.title': 'Oportunidades Globales',
    'features.2.description': 'Accede a proyectos de empresas de todo el mundo',
    'features.3.title': 'Herramientas Profesionales',
    'features.3.description': 'Gestiona proyectos y comunícate con clientes',
    'features.4.title': 'Crecimiento Continuo',
    'features.4.description': 'Desarrolla tus habilidades y aumenta tus ingresos',
    
    // Sección de moneda
    'currency.title': 'Conoce el Lumpz',
    'currency.subtitle': 'La moneda del ecosistema Lumpic',
    'currency.description': 'Lumpz es la moneda oficial de Lumpic. Con ella, puedes recibir por tus trabajos, contratar servicios y acceder a recursos exclusivos.',
    'currency.value': '1 Lumpz = €0.37',
    'currency.cta': 'Saber más',
    
    // Testimonios
    'testimonials.title': 'Lo que dicen nuestros usuarios',
    'testimonials.viewAll': 'Ver todos',
    
    // Calculadora
    'calculator.title': 'Calcula tus ganancias',
    'calculator.subtitle': 'Ve cuánto puedes ganar como creador de contenido',
    'calculator.videos': 'Vídeos por mes',
    'calculator.videoType': 'Tipo de vídeo',
    'calculator.beginner': 'Principiante',
    'calculator.intermediate': 'Intermedio',
    'calculator.expert': 'Experto',
    'calculator.potential': 'Ganancia potencial',
    'calculator.perMonth': 'por mes',
    'calculator.disclaimer': 'Los valores son estimaciones basadas en la media de ganancias de la plataforma',
    'calculator.basic': 'Básico',
    'calculator.standard': 'Estándar',
    'calculator.premium': 'Premium',
    'calculator.calculate': 'Calcular',
    'calculator.videoCount.label': 'Cantidad de videos',
    'calculator.videoType.label': 'Tipo de video',
    'calculator.lumpzValue': 'Valor en Lumpz',
    'calculator.realValue': 'Valor en Euros',
    
    // Llamada a la acción
    'cta.title': '¿Listo para empezar?',
    'cta.subtitle': 'Únete a miles de creadores y empresas en la plataforma',
    'cta.button': 'Crear cuenta gratis',
    'cta.login': '¿Ya tienes cuenta? Inicia sesión',
    
    // Pie de página
    'footer.rights': 'Todos los derechos reservados',
    'footer.terms': 'Términos de Uso',
    'footer.privacy': 'Política de Privacidad',
    'footer.help': 'Ayuda',
    'footer.contact': 'Contacto',
    
    // Tema
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',
    'theme.select': 'Seleccionar tema',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber',
    'faq.seeMore': 'Ver más',
    
    // Página de Freelancer
    'freelancer.hero.title': 'Transforma tu talento en ingresos',
    'freelancer.hero.subtitle': 'Crea videos, gana Lumpz y construye una carrera exitosa',
    'freelancer.benefits.title': 'Beneficios para Freelancers',
    'freelancer.cta': 'Comienza tu camino',
    
    // Página de Empresas
    'business.hero.title': 'Encuentra los mejores creadores de video',
    'business.hero.subtitle': 'Potencia tus resultados con contenido auténtico y profesional',
    'business.benefits.title': 'Ventajas para Empresas',
    'business.cta': 'Contratar ahora',
  }
};

const LanguageContext = createContext<LanguageContextProps>({
  language: 'pt-BR',
  setLanguage: () => {},
  t: () => '',
  translations
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Recupera o idioma salvo no localStorage ou usa o padrão (pt-BR)
    const savedLanguage = localStorage.getItem('lumpic-language') as Language;
    return savedLanguage || 'pt-BR';
  });

  // Função de tradução
  const t = (key: string): string => {
    if (!translations[language]) {
      return key;
    }
    
    return translations[language][key] || key;
  };

  // Salva o idioma no localStorage quando ele muda
  useEffect(() => {
    localStorage.setItem('lumpic-language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);