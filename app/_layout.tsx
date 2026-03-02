import { Drawer } from "expo-router/drawer";
import AppHeader from "../components/mobile/AppHeader";
import CustomDrawer from "../components/mobile/CustomDrawer";
import { LanguageProvider } from "../context/LanguageContext";
import { TempleProvider } from "../context/TempleContext";
import { ThemeProvider } from "../context/ThemeContext";
import "../i18n";

export default function Layout() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <TempleProvider>
          <Drawer
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ header: () => <AppHeader /> }}
          />
        </TempleProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
