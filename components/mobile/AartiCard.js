import { Audio } from "expo-av";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

export default function AartiCard({ aartiId, audio }) {
  const { t } = useTranslation();

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(audio);
    await sound.playAsync();
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {t(`aartiData.${aartiId}.title`)}
      </Text>

      <Text style={styles.desc}>
        {t(`aartiData.${aartiId}.desc`)}
      </Text>

      {audio && (
        <Pressable style={styles.button} onPress={playAudio}>
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
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.lg,
    ...theme.shadow.soft,
  },
  title: {
    fontSize: theme.typography.h2,
    color: theme.colors.maroon,
    fontWeight: "600",
    marginBottom: theme.spacing.sm,
  },
  desc: {
    fontSize: theme.typography.body,
    color: theme.colors.deep,
    lineHeight: 22,
    marginBottom: theme.spacing.md,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radii.sm,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "600",
  },
});
