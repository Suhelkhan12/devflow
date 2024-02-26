"use client";
import React, { useContext, createContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string | null;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // setting mode for theme
  const [mode, setMode] = useState("");

  useEffect(() => {
    // function for setting the theme
    const handleTheme = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("prefers-color-scheme: dark").matches)
      ) {
        setMode("dark");
        document.documentElement.classList.add("dark");
      } else {
        setMode("light");
        document.documentElement.classList.remove("dark");
      }
    };
    handleTheme();
  }, [mode]);

  return (
    // basically here we have given mode and setMode to the value of provider
    // so that they will be available to us in any component wrapped inside the provider
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("usetheme error");
  }
  return context;
}
