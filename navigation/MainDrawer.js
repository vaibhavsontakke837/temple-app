import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { theme } from "../styles/theme";

import CustomDrawer from "../components/mobile/CustomDrawer";

import AboutTempleScreen from "../screens/AboutTempleScreen";
import AudioVideoScreen from "../screens/AudioVideoScreen";
import ContactScreen from "../screens/ContactScreen";
import DonationScreen from "../screens/DonationScreen";
import EventsScreen from "../screens/EventsScreen";
import GalleryScreen from "../screens/GalleryScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: theme.colors.primary,
        drawerLabelStyle: {
          fontSize: theme.typography.body,
        },
      }}
    >
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{ drawerLabel: t("drawer.home") }}
      />

      <Drawer.Screen
        name="AboutTemple"
        component={AboutTempleScreen}
        options={{ drawerLabel: t("drawer.about") }}
      />

      <Drawer.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ drawerLabel: t("drawer.gallery") }}
      />

      <Drawer.Screen
        name="AudioVideo"
        component={AudioVideoScreen}
        options={{ drawerLabel: t("drawer.audioVideo") }}
      />

      <Drawer.Screen
        name="Events"
        component={EventsScreen}
        options={{ drawerLabel: t("drawer.events") }}
      />

      <Drawer.Screen
        name="Donation"
        component={DonationScreen}
        options={{ drawerLabel: t("drawer.donation") }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{ drawerLabel: t("drawer.contact") }}
      />

      {/* <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ drawerLabel: t("drawer.settings") }}
      /> */}
    </Drawer.Navigator>
  );
}
