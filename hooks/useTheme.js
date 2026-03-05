// hooks/useTheme.js
import { useThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useThemeContext();
  if (!context) {
    // Fallback to default light theme if context not available
    return {
      theme: {
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
      },
      mode: 'light',
      toggleTheme: () => {},
    };
  }
  return context;
};
