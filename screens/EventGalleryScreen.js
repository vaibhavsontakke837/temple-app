import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width - 64;

const IMAGE_MAP = {
  '1.jpg': require('../assets/gallery/1.jpg'),
  '3.jpg': require('../assets/gallery/3.jpg'),
  '4.jpg': require('../assets/gallery/4.jpg'),
  '5.jpg': require('../assets/gallery/5.jpg'),
};

function AutoCarousel({ images }) {
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
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

export default function EventGalleryScreen() {
  const { t } = useTranslation();
  const eventGallery = t('eventGallery', { returnObjects: true });

  return (
    <ScrollView style={styles.container}>
      {Object.values(eventGallery).map((event, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{event.title}</Text>
          <AutoCarousel images={event.images} />
          <Text style={styles.description}>{event.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#ff6600',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
});
