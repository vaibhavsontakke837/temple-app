import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeContext } from '../../context/ThemeContext';

export default function ScreenContainer({ children }) {
  const { theme } = useThemeContext();
  const insets = useSafeAreaInsets();
  
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.cream }}
      contentContainerStyle={[styles.container, { paddingBottom: insets.bottom + 18 }]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    paddingBottom: 80,
    flexGrow: 1,
  },
});
