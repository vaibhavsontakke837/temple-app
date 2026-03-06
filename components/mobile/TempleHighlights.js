import { useRouter } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";
import HighlightCard from "./HighlightCard";
import SectionHeader from "./SectionHeader";

const HIGHLIGHTS = [
  { id: 1, icon: "sparkles", titleKey: "godsCharmatkar", route: "/gods-chamatkar" },
  { id: 2, icon: "location", titleKey: "historicalPlaces", route: "/historical-places" },
  { id: 3, icon: "business", titleKey: "facilities", route: "/facilities" },
  { id: 4, icon: "flame", titleKey: "aarti", route: "/aarti" },
  { id: 5, icon: "calendar", titleKey: "events", route: "/event" },
];

export default function TempleHighlights() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleCardPress = (route) => {
    router.push(route);
  };

  const displayedItems = showAll ? HIGHLIGHTS : HIGHLIGHTS.slice(0, 4);

  return (
    <View style={styles.container}>
      <SectionHeader 
        title={t("templeHighlights")}
        right={
          <TouchableOpacity onPress={handleShowAll}>
            <Text style={[styles.showAll, { color: theme.colors.primary }]}>
              {showAll ? t("showLess") : t("showAll")}
            </Text>
          </TouchableOpacity>
        }
      />
      <View style={styles.grid}>
        {displayedItems.map((item) => (
          <HighlightCard
            key={item.id}
            icon={item.icon}
            title={t(item.titleKey)}
            onPress={() => handleCardPress(item.route)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  showAll: {
    fontSize: 14,
    fontWeight: "600",
  },
});
