import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../../styles/theme";

export default function LanguageCard({ title, selected, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {selected && <Text style={styles.check}>✓</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...theme.shadow.soft,
  },
  title: {
    fontSize: theme.typography.body,
    color: theme.colors.deep,
    fontWeight: "500",
  },
  check: {
    color: theme.colors.primary,
    fontSize: 18,
    fontWeight: "700",
  },
});
