import { Slot } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import { TempleProvider, useTemple } from "../context/TempleContext";
import { ThemeProvider } from "../context/ThemeContext";
import "../i18n";

export default function Layout() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <TempleProvider>
          <LoadingWrapper />
        </TempleProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

function LoadingWrapper() {
  const { loading: langLoading } = useLanguage();
  const { loading: templeLoading } = useTemple();

  if (langLoading || templeLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#ff6600" />
      </View>
    );
  }

  return <Slot />;
}
