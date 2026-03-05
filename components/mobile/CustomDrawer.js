import { useTemple } from "@/context/TempleContext";
import { useThemeContext } from "@/context/ThemeContext";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

export default function CustomDrawer(props) {
  const { t } = useTranslation();
  const { selectedTemple, selectTemple, selectedTempleId } = useTemple();
  const { theme } = useThemeContext();
  

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.title}>{t(`temples.${selectedTempleId}.name`)}</Text>
        <Text style={styles.subtitle}>{t("templeSubtitle")}</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.menu}>
        <DrawerItemList {...props} />
      </View>

      {/* Footer */}
      <View style={[styles.footer, { borderTopColor: theme.colors.border }]}>
        <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>
          © {new Date().getFullYear()} {t("templeName")}
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    padding: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#fff",
    opacity: 0.9,
  },
  menu: {
    paddingTop: 18,
    flex: 1,
  },
  footer: {
    padding: 18,
    borderTopWidth: 1,
  },
  footerText: {
    fontSize: 13,
    opacity: 0.6,
    textAlign: "center",
  },
});
