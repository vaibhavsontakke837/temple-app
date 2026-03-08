import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n/index";

const LANGUAGE_KEY = "@app_language";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState("mr");

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
        const languageToUse = savedLanguage || "mr";
        setCurrentLanguage(languageToUse);
        await i18n.changeLanguage(languageToUse);
      } catch (e) {
        console.warn("Failed to load language", e);
      } finally {
        setLoading(false);
      }
    };

    loadLanguage();
  }, []);

  const changeLanguage = async (lang) => {
    try {
      setCurrentLanguage(lang);
      await AsyncStorage.setItem(LANGUAGE_KEY, lang);
      await i18n.changeLanguage(lang);
    } catch (e) {
      console.warn("Failed to save language", e);
    }
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage, loading, currentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
};
