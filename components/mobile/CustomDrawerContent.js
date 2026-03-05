import { Ionicons } from "@expo/vector-icons";
import { DrawerItem } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useTemple } from "../../context/TempleContext";
import { useThemeContext } from "../../context/ThemeContext";
import i18n from "../../i18n";

export default function CustomDrawerContent(props) {
  const { t } = useTranslation();
  const { selectedTempleId } = useTemple();
  const { theme } = useThemeContext();
  const insets = useSafeAreaInsets();
  const currentRoute = props.state.routeNames[props.state.index];

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const menuItem = (label, route, icon) => (
    <DrawerItem
      label={t(label)}
      icon={({ color, size }) => (
        <Ionicons
          name={icon}
          size={18}
          color={currentRoute === route ? theme.colors.primary : theme.colors.text}
        />
      )}
      focused={currentRoute === route}
      activeBackgroundColor={theme.colors.primary + "15"}
      activeTintColor={theme.colors.primary}
      inactiveTintColor={theme.colors.text}
      labelStyle={[styles.drawerLabel, { color: theme.colors.text }]}
      style={styles.drawerItem}
      onPress={() => props.navigation.navigate(route)}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.cream }]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Gradient Header */}
        <LinearGradient
          colors={["#FF6B35", "#F7931E"]}
          style={styles.header}
        >
          <Image
            source={require("../../assets/gallery/6.jpg")}
            style={styles.maharajImage}
          />

          <View style={styles.headerText}>
            <Text style={styles.title}>
              {t(`temples.${selectedTempleId}.templeName`)}
            </Text>

            <Text style={styles.subtitle}>
              {t(`temples.${selectedTempleId}.templeSubtitle`)}
            </Text>
          </View>
        </LinearGradient>

        {/* Menu */}
        <View style={styles.menu}>
          {menuItem("home", "Home", "home-outline")}
          {menuItem("aarti", "aarti", "flame-outline")}
          {menuItem("events", "event", "calendar-outline")}
          {menuItem("information", "information", "information-circle-outline")}
          {menuItem("gallery", "gallery", "images-outline")}
          {menuItem("contact", "contact", "call-outline")}
          {menuItem("settings", "settings", "settings-outline")}
        </View>

        {/* Footer */}
        <View style={[styles.footer, { paddingBottom: insets.bottom + 5, borderTopColor: theme.colors.border }]}>
          <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>
            © {new Date().getFullYear()} {t("developedBy")}
          </Text>
          <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>
            {t("allRightsReserved")} 
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  header: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  maharajImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 10,
  },

  headerText: {
    flex: 1,
  },

  title: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },

  subtitle: {
    color: "#fff",
    fontSize: 10,
    marginTop: 2,
    opacity: 0.9,
  },

  menu: {
    flex: 1,
    marginTop: 2,
  },

  drawerItem: {
    marginVertical: 0,
    paddingVertical: 0,
    minHeight: 38,
  },

  drawerLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginLeft: -10,
  },

  languageContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  languageTitle: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
  },

  languageButtons: {
    flexDirection: "row",
  },

  langBtn: {
    backgroundColor: "#eee",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 8,
  },

  langText: {
    fontSize: 12,
    fontWeight: "500",
  },

  footer: {
    paddingTop: 6,
    paddingHorizontal: 15,
    alignItems: "center",
    borderTopWidth: 0.5,
  },

  footerText: {
    fontSize: 9,
    textAlign: "center",
    lineHeight: 14,
  },

  footerName: {
    fontSize: 11,
    fontWeight: "600",
    marginVertical: 2,
  },
});