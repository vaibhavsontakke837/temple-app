import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTemple } from "../../context/TempleContext";
import i18n from "../../i18n";
import { theme } from "../../styles/theme";

export default function CustomDrawerContent(props) {
  const { t } = useTranslation();
  const { selectedTempleId } = useTemple();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container} scrollEnabled={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/gallery/6.jpg')} 
          style={styles.maharajImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>{t(`temples.${selectedTempleId}.templeName`)}</Text>
          <Text style={styles.subtitle}>{t(`temples.${selectedTempleId}.templeSubtitle`)}</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <DrawerItem 
          label={t("home")} 
          onPress={() => props.navigation.navigate("Home")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem 
          label={t("aarti")} 
          onPress={() => props.navigation.navigate("aarti")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem 
          label={t("events")} 
          onPress={() => props.navigation.navigate("event")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem 
          label={t("information")} 
          onPress={() => props.navigation.navigate("information")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem 
          label={t("gallery")} 
          onPress={() => props.navigation.navigate("gallery")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem 
          label={t("contact")} 
          onPress={() => props.navigation.navigate("contact")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem 
          label={t("settings")} 
          onPress={() => props.navigation.navigate("settings")}
          labelStyle={styles.drawerLabel}
        />
      </View>

      {/* Copyright */}
      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>
          {t("allRightsReserved")} {t("developedBy")}
        </Text>
        <Text style={styles.copyrightText}>
          © {new Date().getFullYear()} All Rights Reserved
        </Text>
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
    padding: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  maharajImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginLeft: -8,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: "700",
  },
  subtitle: {
    color: theme.colors.glass,
    fontSize: 11,
    marginTop: 2,
  },
  menu: {
    marginTop: theme.spacing.sm,
    flex: 1,
  },
  drawerLabel: {
    fontWeight: "600",
  },
  copyright: {
    marginTop: "auto",
    padding: theme.spacing.md,
    alignItems: "center",
    
  },
  copyrightText: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    textAlign: "center",
    
  },
});
