import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../styles/theme";

export default function IconTile({ icon, label, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrap, style]}>
      <View style={styles.iconBox}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", padding: theme.spacing.sm, width: 100 },
  iconBox: {
    width: 68,
    height: 68,
    borderRadius: 14,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    marginTop: 8,
    fontSize: theme.typography.body,
    color: theme.colors.deep,
    textAlign: "center",
  },
});
