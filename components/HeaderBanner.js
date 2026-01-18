import { useTemple } from "@/context/TempleContext";
import { useTranslation } from "react-i18next";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";
import ImageCard from "./mobile/ImageCard";

export default function HeaderBanner() {
  const { t } = useTranslation();
  const { width } = Dimensions.get("window");

  const CARD_WIDTH = (width - theme.spacing.md * 3) / 2;

  const { selectedTemple, selectTemple, selectedTempleId } = useTemple();

  return (
    <View style={styles.container}>
      <ImageCard
        source={
          // "https://upload.wikimedia.org/wikipedia/commons/b/b3/Solid_gray.png"
          require("../assets/gallery/3.jpg")
        }
        style={{ width: CARD_WIDTH }}
      />
      {/* <Text style={styles.title}>{t("templeName")}</Text> */}
      <View style={styles.center}>
        <Text numberOfLines={2} style={styles.title}>
          {t(`temples.${selectedTempleId}.desc`)}
        </Text>
      </View>
      <Text style={styles.subtitle}>{t("templeSubtitle")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    // theme.colors.primary
    borderRadius: theme.radii.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.h1,
    color: theme.colors.white,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 6,
    fontSize: theme.typography.body,
    color: theme.colors.white,
    opacity: 0.9,
  },
});
