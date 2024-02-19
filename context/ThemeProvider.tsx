"use client";
import React, { useContext, createContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string | null;
  setMode: (mode: "dark" | "light" | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // setting mode for theme
  const [mode, setMode] = useState<"dark" | "light" | null>("dark");

  useEffect(() => {
    // function for setting the theme
    const handleTheme = () => {
      if (mode === "dark") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
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
