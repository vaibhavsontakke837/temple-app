import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "APP_THEME";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value) setMode(value);
      setLoaded(true);
    });
  }, []);

  const toggleTheme = async () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    await AsyncStorage.setItem(STORAGE_KEY, next);
  };

  const theme = mode === "light" ? DefaultTheme : DarkTheme;

  if (!loaded) return null; // prevents flash

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
