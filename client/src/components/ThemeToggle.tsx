import { useTheme } from "@/contexts/ThemeProvider";
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Soluciona o problema de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

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
    switch (theme) {
      case "light":
        return <SunIcon className="h-5 w-5" />;
      case "dark":
        return <MoonIcon className="h-5 w-5" />;
      case "system":
        return <MonitorIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
        aria-label="Alterar tema"
      >
        {currentThemeIcon()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-card rounded-lg shadow-lg border border-border z-50">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              className={`w-full flex items-center px-4 py-2 text-sm hover:bg-muted transition-colors ${
                theme === option.value ? "text-primary" : "text-foreground"
              }`}
              onClick={() => handleThemeChange(option.value as "light" | "dark" | "system")}
            >
              <option.icon className="mr-2 h-4 w-4" />
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