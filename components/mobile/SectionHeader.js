import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

export default function SectionHeader({ title, right }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {right ? <View>{right}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: theme.spacing.sm,
  },
  title: {
    fontSize: theme.typography.h2,
    color: theme.colors.deep,
    fontWeight: "700",
  },
});
