import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

export default function EventCard({ date, title, desc }) {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date}</Text>
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
  date: {
    fontSize: theme.typography.small,
    color: theme.colors.primary,
    marginBottom: 4,
    fontWeight: "600",
  },
  title: {
    fontSize: theme.typography.h2,
    color: theme.colors.deep,
    fontWeight: "600",
  },
  desc: {
    fontSize: theme.typography.body,
    color: theme.colors.deep,
    opacity: 0.75,
    marginTop: 6,
    lineHeight: 22,
  },
});
