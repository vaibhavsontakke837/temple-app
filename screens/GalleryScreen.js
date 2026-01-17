import { useTranslation } from "react-i18next";
import { Dimensions, FlatList, StyleSheet } from "react-native";

import ImageCard from "../components/mobile/ImageCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";
import { theme } from "../styles/theme";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - theme.spacing.md * 3) / 2;

const GALLERY_DATA = [
  { id: "1", image: require("../assets/gallery/1.jpg") },
  // { id: "2", image: require("../assets/gallery/2.jpg") },
  { id: "2", image: require("../assets/gallery/3.jpg") },
  { id: "2", image: require("../assets/gallery/4.jpg") },
  { id: "2", image: require("../assets/gallery/5.jpg") },
  { id: "3", image: require("../assets/gallery/6.jpg") },
  // { id: "4", image: require("../assets/gallery/4.jpg") },
];

export default function GalleryScreen() {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <SectionHeader title={t("gallery")} />

      <FlatList
        data={GALLERY_DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ImageCard
            source={item.image}
            style={{ width: CARD_WIDTH }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginBottom: theme.spacing.md,
  },
});
