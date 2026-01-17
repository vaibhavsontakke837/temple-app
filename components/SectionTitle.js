import { StyleSheet, Text } from "react-native";
export default function SectionTitle({ title, style }) {
  return <Text style={[styles.title, style]}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
});
