import { Slot } from 'expo-router';
import { LanguageProvider } from "../context/LanguageContext";
import { TempleProvider } from "../context/TempleContext";
import { ThemeProvider } from "../context/ThemeContext";
import "../i18n";

export default function Layout() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <TempleProvider>
          <Slot />
        </TempleProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
