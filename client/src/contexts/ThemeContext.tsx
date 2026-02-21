import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || defaultTheme;
    }
    if (defaultTheme === "system") {
      return getSystemTheme();
    }
    return defaultTheme;
  });

  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">(() => {
    if (theme === "system") {
      return getSystemTheme();
    }
    return theme as "light" | "dark";
  });

  useEffect(() => {
    const currentTheme = theme === "system" ? getSystemTheme() : (theme as "light" | "dark");
    setEffectiveTheme(currentTheme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (effectiveTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (switchable && theme !== "system") {
      localStorage.setItem("theme", theme);
    }
  }, [effectiveTheme, theme, switchable]);

  useEffect(() => {
    if (defaultTheme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(getSystemTheme());
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [defaultTheme]);

  const toggleTheme = switchable
    ? () => {
        setTheme(prev => {
          if (prev === "light") return "dark";
          if (prev === "dark") return "light";
          return "light";
        });
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme: effectiveTheme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
