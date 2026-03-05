import { StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

export default function SectionHeader({ title, right }) {
  const { theme } = useThemeContext();
  
  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      {right ? <View>{right}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
