import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useThemeContext } from "../context/ThemeContext";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width - 64;

const FACILITY_IMAGES = [
  require("../assets/gallery/mangalK1.jpeg"),
  require("../assets/gallery/mangalK2.jpeg"),
  require("../assets/gallery/mangalK1.jpeg"),
];

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
          <Image key={index} source={img} style={styles.carouselImage} />
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

export default function FacilitiesScreen() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const facility = t("facility.facilitiesData", { returnObjects: true });

  if (!facility || !facility.availableFor) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.cream }]}
      >
        <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Loading...
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.cream }]}
    >
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {facility.name}
        </Text>

        <AutoCarousel images={FACILITY_IMAGES} />

        {facility.description && (
          <View style={styles.descriptionSection}>
            <Text
              style={[
                styles.description,
                { color: theme.colors.textSecondary },
              ]}
            >
              {facility.description}
            </Text>
          </View>
        )}

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color={theme.colors.primary} />
            <Text
              style={[styles.infoText, { color: theme.colors.textSecondary }]}
            >
              {facility.address}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="people" size={20} color={theme.colors.primary} />
            <Text
              style={[styles.infoText, { color: theme.colors.textSecondary }]}
            >
              {facility.capacity}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.infoRow}
            onPress={() => Linking.openURL(`tel:${facility.contact}`)}
          >
            <Ionicons name="call" size={20} color={theme.colors.primary} />
            <Text style={[styles.infoText, { color: theme.colors.primary }]}>
              {facility.contact}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.section, { borderTopColor: theme.colors.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            {facility.availableFor.title}
          </Text>
          {facility.availableFor.items.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={[styles.bullet, { color: theme.colors.primary }]}>
                •
              </Text>
              <Text
                style={[styles.listText, { color: theme.colors.textSecondary }]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>

        <View style={[styles.section, { borderTopColor: theme.colors.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            {facility.facilitiesTitle}
          </Text>
          {facility.facilitiesList.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Ionicons
                name="checkmark-circle"
                size={18}
                color={theme.colors.gold}
              />
              <Text
                style={[
                  styles.listText,
                  { color: theme.colors.textSecondary, marginLeft: 8 },
                ]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
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
  descriptionSection: {
    marginVertical: 12,
    paddingVertical: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "justify",
  },
  infoSection: {
    marginVertical: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  section: {
    borderTopWidth: 1,
    paddingTop: 16,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 20,
    marginRight: 8,
    marginTop: -2,
  },
  listText: {
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
});
