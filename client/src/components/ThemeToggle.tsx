import { useTheme } from "@/contexts/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animated, setAnimated] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setAnimated(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 150);
    
    // Reset animation state after completion
    setTimeout(() => {
      setAnimated(false);
    }, 500);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleTheme}
        className="bg-card border border-muted rounded-full p-2 hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary shadow-md"
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
          {theme === 'light' ? (
            <span 
              className={`${animated ? 'theme-toggle-icon-out' : 'theme-toggle-icon-in'}`}
            >
              <Sun className="h-5 w-5 text-primary" />
            </span>
          ) : (
            <span 
              className={`${animated ? 'theme-toggle-icon-out' : 'theme-toggle-icon-in'}`}
            >
              <Moon className="h-5 w-5 text-secondary" />
            </span>
          )}
        </div>
      </button>
    </div>
  );
}