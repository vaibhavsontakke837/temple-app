import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useThemeContext } from "../context/ThemeContext";

import EventCard from "../components/mobile/EventCard";
import ScreenContainer from "../components/mobile/ScreenContainer";

export default function EventsScreen() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const [visibleCount, setVisibleCount] = useState(4);

  const allEvents = Object.values(t("eventsData", { returnObjects: true }));
  
  const today = new Date();
  const events = allEvents.filter(event => new Date(event.notifyAt) > today);

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <ScreenContainer>
      {events.slice(0, visibleCount).map((event, index) => (
        <EventCard
          key={index}
          date={event.date}
          title={event.title}
          desc={event.desc}
        />
      ))}

      {visibleCount < events.length && (
        <View style={styles.loadMoreContainer}>
          <TouchableOpacity style={[styles.loadMoreButton, { backgroundColor: theme.colors.primary }]} onPress={loadMore}>
            <Text style={styles.loadMoreText}>Load More</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  loadMoreContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  loadMoreButton: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  loadMoreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
