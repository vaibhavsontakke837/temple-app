import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

export default function MediaCard({ title, desc }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.md,
    ...theme.shadow.soft,
  },
  title: {
    fontSize: theme.typography.h2,
    fontWeight: "600",
    color: theme.colors.deep,
  },
  desc: {
    fontSize: theme.typography.small,
    color: theme.colors.deep,
    opacity: 0.7,
    marginTop: 6,
  },
});
