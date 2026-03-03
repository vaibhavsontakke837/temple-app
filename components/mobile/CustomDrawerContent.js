import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import i18n from "../../i18n";
import { theme } from "../../styles/theme";

export default function CustomDrawerContent(props) {
  const { t } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/gallery/6.jpg')} 
          style={styles.maharajImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>{t("templeName")}</Text>
          <Text style={styles.subtitle}>{t( "templeSubtitle")}</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <DrawerItem label={t("home")} onPress={() => props.navigation.navigate("Home")} />
        <DrawerItem label={t("aarti")} onPress={() => props.navigation.navigate("Aarti")} />
        <DrawerItem label={t("events")} onPress={() => props.navigation.navigate("Event")} />
        <DrawerItem label={t("information")} onPress={() => props.navigation.navigate("Information")} />
        <DrawerItem label={t("gallery")} onPress={() => props.navigation.navigate("Gallery")} />
        <DrawerItem label={t("contact")} onPress={() => props.navigation.navigate("Contact")} />
        <DrawerItem label={t("settings")} onPress={() => props.navigation.navigate("Settings")} />
      </View>

      {/* Language Switch */}
      <View style={styles.langSwitch}>
        <Pressable onPress={() => switchLanguage("en")}>
          <Text style={styles.lang}>English</Text>
        </Pressable>
        <Text style={styles.separator}>|</Text>
        <Pressable onPress={() => switchLanguage("mr")}>
          <Text style={styles.lang}>मराठी</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.cream,
  },
  header: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  maharajImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginRight: 12,
    marginLeft: -12,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    color: theme.colors.glass,
    fontSize: 13,
    marginTop: 4,
  },
  menu: {
    marginTop: theme.spacing.md,
  },
  langSwitch: {
    marginTop: "auto",
    padding: theme.spacing.md,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lang: {
    fontSize: 14,
    color: theme.colors.maroon,
    fontWeight: "600",
  },
  separator: {
    marginHorizontal: 10,
    color: theme.colors.deep,
  },
});
