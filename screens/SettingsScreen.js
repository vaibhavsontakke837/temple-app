import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useLanguage } from "../context/LanguageContext";

import LanguageCard from "../components/mobile/LanguageCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
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
    </ScreenContainer>
  );
}
