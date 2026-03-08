import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";
import EventCard from "./EventCard";

export default function EventsList({ limit = 3 }) {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const [visibleCount, setVisibleCount] = useState(limit);

  const allEvents = Object.values(t("eventsData", { returnObjects: true }));
  const allEventsTop = Object.values(t("eventsDatatop", { returnObjects: true }));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const filteredEvents = allEvents.filter(event => new Date(event.notifyAt) >= today);
  const events = [...allEventsTop, ...filteredEvents];
  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <View>
      {events.slice(0, visibleCount).map((event, index) => {
        const isTopEvent = index < allEventsTop.length;
        const isAdvertisement = index < allEventsTop.length;
        const eventDate = new Date(event.notifyAt);
        eventDate.setHours(0, 0, 0, 0);
        const isToday = eventDate.getTime() === today.getTime();
        return (
          <EventCard
            key={index}
            date={event.date}
            title={event.title}
            desc={event.desc}
            isTopEvent={isTopEvent || isToday}
            isAdvertisement={isAdvertisement}
          />
        );
      })}

      {visibleCount < events.length && (
        <View style={styles.loadMoreContainer}>
          <TouchableOpacity 
            style={[styles.loadMoreButton, { backgroundColor: theme.colors.primary }]} 
            onPress={loadMore}
          >
            <Text style={styles.loadMoreText}>{t("loadMore") || "Load More"}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
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
