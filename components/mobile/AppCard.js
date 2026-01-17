import { StyleSheet, View } from "react-native";
import { theme } from "../../styles/theme";

export default function AppCard({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.glass,
    borderRadius: theme.radii.md,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    overflow: "hidden",
    ...theme.shadow.soft,
  },
});
