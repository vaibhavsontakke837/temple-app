// components/mobile/ScreenContainer.js
import { ScrollView, StyleSheet } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';

export default function ScreenContainer({ children }) {
  const { theme } = useThemeContext();
  
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.cream }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    flexGrow: 1,
  },
});
