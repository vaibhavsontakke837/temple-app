import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles/theme';

const { width, height } = Dimensions.get('window');

const ONBOARDING_DATA = [
  {
    id: 1,
    image: require('../assets/gallery/1.jpg'),
    title: 'Welcome to Temple App',
    description: 'Experience divine blessings and spiritual peace',
  },
  {
    id: 2,
    image: require('../assets/gallery/2.jpg'),
    title: 'Daily Aarti & Events',
    description: 'Stay updated with temple timings and special events',
  },
  {
    id: 3,
    image: require('../assets/gallery/3.jpg'),
    title: 'Gallery & Media',
    description: 'Explore temple photos and devotional content',
  },
  {
    id: 4,
    image: require('../assets/gallery/4.jpg'),
    title: 'Connect with Us',
    description: 'Get temple information and contact details',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = async () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      router.replace('/(tabs)/home');
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    router.replace('/(tabs)/home');
  };

  const currentScreen = ONBOARDING_DATA[currentIndex];

  return (
    <View style={styles.container}>
      <Image source={currentScreen.image} style={styles.image} resizeMode="cover" />
      
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>{currentScreen.title}</Text>
          <Text style={styles.description}>{currentScreen.description}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.pagination}>
            {ONBOARDING_DATA.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>

          <View style={styles.buttons}>
            <Pressable onPress={handleSkip} style={styles.skipBtn}>
              <Text style={styles.skipText}>Skip</Text>
            </Pressable>
            <Pressable onPress={handleNext} style={styles.nextBtn}>
              <Text style={styles.nextText}>
                {currentIndex === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Next'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width,
    height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 40,
  },
  content: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 26,
  },
  footer: {
    paddingHorizontal: 30,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipBtn: {
    padding: 15,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  nextBtn: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
