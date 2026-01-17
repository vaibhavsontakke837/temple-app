import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IconButton({ icon, label, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.iconWrap}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 10 },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  label: { marginTop: 6, fontSize: 13, fontWeight: "600" },
});
