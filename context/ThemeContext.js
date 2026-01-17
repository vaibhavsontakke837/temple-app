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
    debugger
    setMode(prev => {
      const next = prev === "light" ? "dark" : "light";
      AsyncStorage.setItem("theme", next);
      return next;
    });
  };

  // 👇 dynamic theme values
  const theme = useMemo(
    () =>
      mode === "light"
        ? {
            bg: "#ffffff",
            text: "#111111",
            header: "#1976D2",
          }
        : {
            bg: "#121212",
            text: "#ffffff",
            header: "#000000",
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