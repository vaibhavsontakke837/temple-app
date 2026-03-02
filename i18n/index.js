import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./en.json";
import mr from "./mr.json";

const LANGUAGE_KEY = "@app_language";

const getInitialLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
    return savedLanguage || (Localization.locale?.startsWith("mr") ? "mr" : "en");
  } catch {
    return Localization.locale?.startsWith("mr") ? "mr" : "en";
  }
};

getInitialLanguage().then((lng) => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources: {
      en: { translation: en },
      mr: { translation: mr },
    },
    lng,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
});

export default i18n;
