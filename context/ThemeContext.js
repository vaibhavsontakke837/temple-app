import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    AsyncStorage.getItem("theme").then(value => {
      if (value) setMode(value);
    });
  }, []);

  const toggleTheme = () => {
    setMode(prev => {
      const next = prev === "light" ? "dark" : "light";
      AsyncStorage.setItem("theme", next);
      return next;
    });
  };

  const theme = useMemo(
    () =>
      mode === "light"
        ? {
            colors: {
              primary: "#FF6B35",
              secondary: "#F7931E",
              maroon: "#8B0000",
              gold: "#FFD700",
              cream: "#FFF8DC",
              background: "#FFFFFF",
              text: "#333333",
              textSecondary: "#666666",
              border: "#DDDDDD",
              card: "#FFFFFF",
            },
          }
        : {
            colors: {
              primary: "#FF8C5A",
              secondary: "#FFB347",
              maroon: "#A52A2A",
              gold: "#FFD700",
              cream: "#2C2416",
              background: "#1A1A1A",
              text: "#EEEEEE",
              textSecondary: "#AAAAAA",
              border: "#444444",
              card: "#2A2A2A",
            },
          },
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);