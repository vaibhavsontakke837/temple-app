import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useThemeContext } from "../context/ThemeContext";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width - 64;

const IMAGE_MAP = {
  "Yatra2017_1.jpeg": require("../assets/gallery/Yatra2017_1.jpeg"),
  "Yatra2017_2.jpeg": require("../assets/gallery/Yatra2017_2.jpeg"),
  "Yatra2017_3.jpeg": require("../assets/gallery/Yatra2017_3.jpeg"),
  "Blood2025_1.jpeg": require("../assets/gallery/Blood2025_1.jpeg"),
  "ViruBlood.jpeg": require("../assets/gallery/ViruBlood.jpeg"),
  "RajBlood2025_3.jpeg": require("../assets/gallery/RajBlood2025_3.jpeg"),
  "All2023_1.jpeg": require("../assets/gallery/All2023_1.jpeg"),
  "Prize2023_2.jpeg": require("../assets/gallery/Prize2023_2.jpeg"),
  "Dance2023_3.jpeg": require("../assets/gallery/Dance2023_3.jpeg"),
  "Palkhi2018_1.jpeg": require("../assets/gallery/Palkhi2018_1.jpeg"),
  "Palkhi2018_2.jpeg": require("../assets/gallery/Palkhi2018_2.jpeg"),
  "Palkhi2018_3.jpg": require("../assets/gallery/Palkhi2018_3.jpg"),
  "indurikar2025_1.jpg": require("../assets/gallery/indurikar2025_1.jpg"),
  "indurikar2025_2.jpg": require("../assets/gallery/indurikar2025_2.jpg"),
};

function AutoCarousel({ images }) {
  const { theme } = useThemeContext();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * IMAGE_WIDTH,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={IMAGE_MAP[img]}
            style={styles.carouselImage}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && {
                backgroundColor: theme.colors.primary,
                width: 10,
                height: 10,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

export default function EventGalleryScreen() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const eventGallery = t("eventGallery", { returnObjects: true });

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.cream }]}
    >
      {Object.values(eventGallery).map((event, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: theme.colors.card }]}
        >
          <Text style={[styles.title, { color: theme.colors.text }]}>
            {event.title}
          </Text>
          <AutoCarousel images={event.images} />
          <Text
            style={[styles.description, { color: theme.colors.textSecondary }]}
          >
            {event.description}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  carousel: {
    marginBottom: 8,
  },
  carouselImage: {
    width: IMAGE_WIDTH,
    height: 200,
    borderRadius: 8,
    marginRight: 0,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
