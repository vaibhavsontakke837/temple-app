import { Pressable, StyleSheet, Text } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

export default function LanguageCard({ title, selected, onPress }) {
  const { theme } = useThemeContext();
  
  return (
    <Pressable onPress={onPress} style={[styles.card, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      {selected && <Text style={[styles.check, { color: theme.colors.primary }]}>✓</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  check: {
    fontSize: 18,
    fontWeight: "700",
  },
});
