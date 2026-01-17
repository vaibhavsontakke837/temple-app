import { useTranslation } from "react-i18next";
import i18n from "../i18n";

import LanguageCard from "../components/mobile/LanguageCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";

export default function SettingsScreen() {
  const { t } = useTranslation();
  const currentLang = i18n.language;

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ScreenContainer>
      <SectionHeader title={t("language")} />

      <LanguageCard
        title={t("english")}
        selected={currentLang === "en"}
        onPress={() => changeLang("en")}
      />

      <LanguageCard
        title={t("marathi")}
        selected={currentLang === "mr"}
        onPress={() => changeLang("mr")}
      />
    </ScreenContainer>
  );
}
