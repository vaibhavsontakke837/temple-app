import { useTranslation } from "react-i18next";
import { Switch, StyleSheet, Text, View } from "react-native";
import i18n from "../i18n";
import { useLanguage } from "../context/LanguageContext";
import { useThemeContext } from "../context/ThemeContext";

import LanguageCard from "../components/mobile/LanguageCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
  const { mode, toggleTheme, theme } = useThemeContext();
  const currentLang = i18n.language;

  return (
    <ScreenContainer>
      <SectionHeader title={t("language")} />

      <LanguageCard
        title={t("english")}
        selected={currentLang === "en"}
        onPress={() => changeLanguage("en")}
      />

      <LanguageCard
        title={t("marathi")}
        selected={currentLang === "mr"}
        onPress={() => changeLanguage("mr")}
      />

      <SectionHeader title="Theme" style={{ marginTop: 20 }} />
      
      <View style={[styles.themeCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        <Text style={[styles.themeText, { color: theme.colors.text }]}>
          {mode === "light" ? "Light Mode" : "Dark Mode"}
        </Text>
        <Switch
          value={mode === "dark"}
          onValueChange={toggleTheme}
          trackColor={{ false: "#D1D5DB", true: theme.colors.primary }}
          thumbColor={"#FFFFFF"}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  themeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  themeText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
