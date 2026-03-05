import { useTemple } from "@/context/TempleContext";
import { useThemeContext } from "@/context/ThemeContext";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";

const BANNER_IMAGES = [
  require("../assets/gallery/1.jpg"),
  require("../assets/gallery/3.jpg"),
  require("../assets/gallery/4.jpg"),
];

export default function HeaderBanner() {
  const { t } = useTranslation();
  const { width } = Dimensions.get("window");
  const { selectedTempleId } = useTemple();
  const { theme } = useThemeContext();
  
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % BANNER_IMAGES.length;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [width]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >
        {BANNER_IMAGES.map((img, index) => (
          <Image
            key={index}
            source={img}
            style={[styles.image, { width }]}
          />
        ))}
      </ScrollView>
      
      <View style={styles.pagination}>
        {BANNER_IMAGES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && { backgroundColor: "#fff", width: 10, height: 10 },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginHorizontal: 4,
  },
  slider: {
    marginBottom: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    height: 200,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 4,
  },
  textContainer: {
    marginTop: 8,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#fff",
    opacity: 0.9,
  },
});
