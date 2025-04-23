import { useState } from 'react';

type Language = 'pt-BR' | 'en-US' | 'es-ES';

const languageFlags: Record<Language, { flag: string, name: string }> = {
  'pt-BR': { flag: '🇧🇷', name: 'Português' },
  'en-US': { flag: '🇺🇸', name: 'English' },
  'es-ES': { flag: '🇪🇸', name: 'Español' }
};

export function LanguageSelector() {
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
        <span className="text-base mr-1">{languageFlags[selectedLanguage].flag}</span>
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
                <span className="text-base mr-2">{languageFlags[language].flag}</span>
                <span>{languageFlags[language].name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;