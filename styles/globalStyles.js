// styles/globalStyles.js
import { StyleSheet } from 'react-native';
import i18n from '../i18n';

export const getGlobalStyles = () => {
  const isMarathi = i18n.language === 'mr';
  
  return StyleSheet.create({
    text: {
      fontFamily: isMarathi ? 'Noto Sans Devanagari' : 'System',
    },
  });
};

// Apply to Text component globally
export const globalTextStyle = {
  fontFamily: i18n.language === 'mr' ? 'Noto Sans Devanagari' : 'System',
};
