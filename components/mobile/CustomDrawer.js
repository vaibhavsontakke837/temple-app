import { useTemple } from "@/context/TempleContext";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

export default function CustomDrawer(props) {
  const { t } = useTranslation();
  const { selectedTemple, selectTemple, selectedTempleId } = useTemple();
  

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{t(`temples.${selectedTempleId}.name`)}</Text>
        <Text style={styles.subtitle}>{t("templeSubtitle")}</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.menu}>
        <DrawerItemList {...props} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
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
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  title: {
    fontSize: theme.typography.h1,
    color: theme.colors.white,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: theme.typography.small,
    color: theme.colors.white,
    opacity: 0.9,
  },
  menu: {
    paddingTop: theme.spacing.md,
    flex: 1,
  },
  footer: {
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  footerText: {
    fontSize: theme.typography.small,
    color: theme.colors.deep,
    opacity: 0.6,
    textAlign: "center",
  },
});
