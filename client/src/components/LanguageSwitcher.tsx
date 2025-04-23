import { useState } from 'react';

type Language = 'pt-BR' | 'en-US' | 'es-ES';

// Flag SVGs como componentes React
const BrazilFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 5 3" fill="none" className="rounded overflow-hidden">
    <rect width="5" height="3" fill="#009c3b" />
    <path d="M2.5,0.5 3.5,1.5 2.5,2.5 1.5,1.5z" fill="#ffdf00" />
    <circle cx="2.5" cy="1.5" r="0.5" fill="#002776" />
  </svg>
);

const USAFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 5 3" fill="none" className="rounded overflow-hidden">
    <rect width="5" height="3" fill="#bf0a30" />
    <rect width="5" height="0.25" y="0" fill="#ffffff" />
    <rect width="5" height="0.25" y="0.5" fill="#ffffff" />
    <rect width="5" height="0.25" y="1" fill="#ffffff" />
    <rect width="5" height="0.25" y="1.5" fill="#ffffff" />
    <rect width="5" height="0.25" y="2" fill="#ffffff" />
    <rect width="5" height="0.25" y="2.5" fill="#ffffff" />
    <rect width="2" height="1.5" fill="#002868" />
  </svg>
);

const SpainFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 5 3" fill="none" className="rounded overflow-hidden">
    <rect width="5" height="3" fill="#c60b1e" />
    <rect width="5" height="1" y="1" fill="#ffc400" />
  </svg>
);

const languageFlags: Record<Language, { flag: React.ReactNode, name: string }> = {
  'pt-BR': { flag: <BrazilFlag />, name: 'Português' },
  'en-US': { flag: <USAFlag />, name: 'English' },
  'es-ES': { flag: <SpainFlag />, name: 'Español' }
};

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('pt-BR');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Aqui poderia ser implementada a lógica real de mudança de idioma da aplicação
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center justify-center h-9 px-3 rounded-md border border-border hover:bg-muted transition-colors focus:outline-none"
        aria-label="Selecionar idioma"
      >
        <span className="mr-1">{languageFlags[selectedLanguage].flag}</span>
        <span className="sr-only md:not-sr-only md:text-xs">{languageFlags[selectedLanguage].name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-card border border-border z-50">
          <div className="py-1">
            {(Object.keys(languageFlags) as Array<Language>).map((language) => (
              <button
                key={language}
                onClick={() => changeLanguage(language)}
                className={`flex items-center w-full px-4 py-2 text-sm hover:bg-muted transition-colors ${
                  selectedLanguage === language ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
              >
                <span className="mr-2">{languageFlags[language].flag}</span>
                <span>{languageFlags[language].name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;