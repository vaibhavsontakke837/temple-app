import { StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

export default function EventCard({ date, title, desc }) {
  const { theme } = useThemeContext();
  
  return (
    <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.date, { color: theme.colors.primary }]}>{date}</Text>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      <Text style={[styles.desc, { color: theme.colors.textSecondary }]}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  date: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: "600",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
    fontSize: 15,
    marginTop: 6,
    lineHeight: 22,
  },
});
