import { Image, StyleSheet, View } from "react-native";
import { theme } from "../../styles/theme";

export default function ImageCard({ source, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.radii.md,
    overflow: "hidden",
    backgroundColor: theme.colors.white,
    ...theme.shadow.soft,
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },
});
