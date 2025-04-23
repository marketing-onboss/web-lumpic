import { useTheme } from "@/contexts/ThemeProvider";
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevThemeRef = useRef(theme);

  // Soluciona o problema de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Detect theme changes and trigger animation
  useEffect(() => {
    if (mounted && prevThemeRef.current !== theme) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Animation duration
      
      prevThemeRef.current = theme;
      return () => clearTimeout(timer);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const themeOptions = [
    { value: "light", label: "Claro", icon: SunIcon },
    { value: "dark", label: "Escuro", icon: MoonIcon },
    { value: "system", label: "Sistema", icon: MonitorIcon },
  ];

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const currentThemeIcon = () => {
    const iconClass = isAnimating 
      ? "h-5 w-5 animate-fade-in-rotate text-primary" 
      : "h-5 w-5 transition-transform duration-300 ease-in-out";
      
    switch (theme) {
      case "light":
        return <SunIcon className={iconClass} />;
      case "dark":
        return <MoonIcon className={iconClass} />;
      case "system":
        return <MonitorIcon className={iconClass} />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={`
          h-10 w-10 flex items-center justify-center rounded-full 
          bg-muted hover:bg-primary/10 
          text-muted-foreground hover:text-primary 
          transition-all duration-300 border border-transparent hover:border-primary/30
          ${isAnimating ? 'ring-2 ring-offset-2 ring-primary/30 shadow-lg' : ''}
        `}
        aria-label="Alterar tema"
      >
        {currentThemeIcon()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-56 bg-card rounded-lg shadow-xl border border-border z-50 animate-fade-in-rotate">
          <div className="px-4 py-2 border-b border-border mb-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Selecione o tema</p>
          </div>
          {themeOptions.map((option) => (
            <button
              key={option.value}
              className={`
                w-full flex items-center px-4 py-3 text-sm 
                hover:bg-primary/5 transition-all duration-200
                ${theme === option.value 
                  ? "text-primary font-medium bg-primary/10" 
                  : "text-foreground"}
              `}
              onClick={() => handleThemeChange(option.value as "light" | "dark" | "system")}
            >
              <span className={`
                flex items-center justify-center mr-3 h-8 w-8 rounded-full 
                ${theme === option.value ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
              `}>
                <option.icon className="h-4 w-4" />
              </span>
              {option.label}
              {theme === option.value && (
                <svg
                  className="ml-auto h-4 w-4 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}