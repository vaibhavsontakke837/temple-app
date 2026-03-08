import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

export default function EventCard({ date, title, desc, isTopEvent = false, isAdvertisement = false }) {
  const { theme } = useThemeContext();
  const waveAnim = useRef(new Animated.Value(0)).current;
  const textColorAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (isTopEvent) {
      const wave = Animated.loop(
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        })
      );
      wave.start();
      return () => wave.stop();
    }
  }, [isTopEvent, waveAnim]);

  useEffect(() => {
    if (isAdvertisement) {
      const textAnim = Animated.loop(
        Animated.timing(textColorAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        })
      );
      textAnim.start();
      return () => textAnim.stop();
    }
  }, [isAdvertisement, textColorAnim]);
  
  const borderColor = waveAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [theme.colors.primary, '#FFD700', theme.colors.primary],
  });

  const titleColor = textColorAnim.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
  });
  
  return (
    <Animated.View 
      style={[
        styles.card, 
        { 
          backgroundColor: theme.colors.card,
          borderWidth: isTopEvent ? 3 : 0,
          borderColor: isTopEvent ? borderColor : 'transparent',
        }
      ]}
    >
      <Text style={[styles.date, { color: theme.colors.primary }]}>{date}</Text>
      <Animated.Text style={[styles.title, { color: isAdvertisement ? titleColor : theme.colors.text }]}>{title}</Animated.Text>
      <Text style={[styles.desc, { color: theme.colors.textSecondary }]}>{desc}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  date: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: "600",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
    fontSize: 15,
    marginTop: 6,
    lineHeight: 22,
  },
});
