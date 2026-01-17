import { Drawer } from "expo-router/drawer";
import AppHeader from "../components/mobile/AppHeader";
import CustomDrawer from "../components/mobile/CustomDrawer";
import { TempleProvider } from "../context/TempleContext";
import { ThemeProvider } from "../context/ThemeContext";
import "../i18n";

export default function Layout() {
  return (
    <ThemeProvider>
      <TempleProvider>
      <Drawer
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{ header: () => <AppHeader /> }}
      />
      </TempleProvider>
    </ThemeProvider>
  );
}
