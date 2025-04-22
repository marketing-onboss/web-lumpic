import { useTheme } from "@/contexts/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-background border border-muted rounded-full p-2 hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
          <span 
            className={`absolute transition-all duration-500 ease-in-out transform ${theme === 'dark' ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
          >
            <Sun className="h-5 w-5 text-amber-500" />
          </span>
          <span 
            className={`absolute transition-all duration-500 ease-in-out transform ${theme === 'dark' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          >
            <Moon className="h-5 w-5 text-blue-400" />
          </span>
        </div>
      </button>
    </div>
  );
}