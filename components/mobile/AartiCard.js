import { Audio } from "expo-av";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

export default function AartiCard({ aartiId, audio }) {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(audio);
    await sound.playAsync();
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.title, { color: theme.colors.primary }]}>
        {t(`aartiData.${aartiId}.title`)}
      </Text>

      <Text style={[styles.desc, { color: theme.colors.textSecondary }]}>
        {t(`aartiData.${aartiId}.desc`)}
      </Text>

      {audio && (
        <Pressable style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={playAudio}>
          <Text style={styles.buttonText}>
            {t("playAarti")}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 14,
    marginBottom: 24,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  desc: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 18,
  },
  button: {
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
