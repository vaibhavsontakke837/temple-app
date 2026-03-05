import { StyleSheet, Text } from "react-native";
import { useThemeContext } from "../context/ThemeContext";

export default function SectionTitle({ title, style }) {
  const { theme } = useThemeContext();
  
  return <Text style={[styles.title, { color: theme.colors.text }, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
});
