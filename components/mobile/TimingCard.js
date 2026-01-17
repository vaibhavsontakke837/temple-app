import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

export default function TimingCard() {
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <Text style={styles.row}>
        {t("openTime")}: 5:00 AM
      </Text>
      <Text style={styles.row}>
        {t("closeTime")}: 9:00 PM
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.radii.md,
    ...theme.shadow.soft,
  },
  row: {
    fontSize: theme.typography.body,
    color: theme.colors.deep,
    marginBottom: 6,
  },
});
