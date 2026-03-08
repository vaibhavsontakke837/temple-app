import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles/theme';

const { width, height } = Dimensions.get('window');

const ONBOARDING_DATA = [
  {
    id: 1,
    image: require('../assets/gallery/logonew.jpg'),
    title: 'श्री समर्थ धोंडुतात्या प्रसन्ना ॲप मध्ये आपले स्वागत आहे',
    description: 'दैवी आशीर्वाद आणि आध्यात्मिक शांततेचा अनुभव घ्या',
  },
  {
    id: 2,
    image: require('../assets/gallery/logonew.jpg'),
    title: 'हे केवळ अ‍ॅप नाही – ही आपल्या श्रद्धेची आठवण आहे',
    // description: 'मंदिराच्या वेळा आणि विशेष कार्यक्रमांची माहिती मिळवा',
  },
  {
    id: 3,
    image: require('../assets/gallery/logonew.jpg'),
    title: 'हे केवळ माहिती नाही – हा आपल्या भक्तीचा वारसा आहे',
    // description: 'मंदिराचे फोटो आणि भक्तिमय सामग्री पाहा',
  },
  {
    id: 4,
    image: require('../assets/gallery/logonew.jpg'),
    title: 'ही केवळ टेक्नॉलॉजी नाही – हा धोंडुतात्या महाराजांचा आशिर्वाद आहे',
    // description: 'मंदिराची माहिती आणि संपर्क तपशील मिळवा',
  },
  {
    id: 6,
    image: require('../assets/gallery/logonew.jpg'),
    title: 'भक्ती, श्रद्धा आणि परंपरेचा डिजिटल प्रवास',
  }
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
              <Text style={styles.skipText}>वगळा</Text>
            </Pressable>
            <Pressable onPress={handleNext} style={styles.nextBtn}>
              <Text style={styles.nextText}>
                {currentIndex === ONBOARDING_DATA.length - 1 ? 'सुरुवात करा' : 'पुढे'}
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
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
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
