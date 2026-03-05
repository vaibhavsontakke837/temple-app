// hooks/useFonts.js
import { useFonts as useExpoFonts } from 'expo-font';

export const useFonts = () => {
  const [fontsLoaded] = useExpoFonts({
    // System fonts that support Devanagari (Marathi)
    // These are available by default on most devices
  });

  return fontsLoaded;
};

// Font family configuration
export const fonts = {
  marathi: 'Noto Sans Devanagari', // Best for Marathi
  english: 'System',
};
