import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import mr from "./mr.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: { translation: en },
    mr: { translation: mr },
  },
  lng: "mr",
  fallbackLng: "mr",
  interpolation: { escapeValue: false },
});

export default i18n;
