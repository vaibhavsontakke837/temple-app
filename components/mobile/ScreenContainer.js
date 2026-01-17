// components/mobile/ScreenContainer.js
import { ScrollView, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default function ScreenContainer({ children }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.cream,
    flexGrow: 1,
  },
});
