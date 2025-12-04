import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeContextType = {
  theme: 'light',
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'lumpic-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored) return stored;

      // If defaultTheme is 'system', follow the system preference.
      if (defaultTheme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      // If defaultTheme is 'dark', prefer dark but respect an explicit system light preference.
      if (defaultTheme === 'dark') {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }

      // Fallback to provided defaultTheme ('light' or other)
      return defaultTheme;
    } catch (e) {
      // In environments without window/localStorage, fall back safely
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Add transition class before changing theme
    root.classList.add('theme-transition');
    
    // Apply transition effect on all colors
    const applyTheme = () => {
      root.classList.remove('light', 'dark');
      
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
      
      // Remove transition class after theme is applied (after animation completes)
      setTimeout(() => {
        root.classList.remove('theme-transition');
      }, 500); // Match this with CSS transition duration
    };
    
    // Small delay to ensure transition class is applied before theme changes
    setTimeout(applyTheme, 10);
    
    // Setup listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}