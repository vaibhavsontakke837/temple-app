import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

export default function TimingCard() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.row, { color: theme.colors.text }]}>
        {t("openTime")}: 5:00 AM
      </Text>
      <Text style={[styles.row, { color: theme.colors.text }]}>
        {t("closeTime")}: 9:00 PM
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 14,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  row: {
    fontSize: 15,
    marginBottom: 6,
  },
});
