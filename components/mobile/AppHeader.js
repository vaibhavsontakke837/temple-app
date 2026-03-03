import { TEMPLES } from "@/shared/temples";
import { theme } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTemple } from "../../context/TempleContext";

export default function AppHeader() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { toggleTheme, mode } = useTheme();

  const { selectedTemple, selectTemple, selectedTempleId } = useTemple();

  const [open, setOpen] = useState(false);

  if (!selectedTemple) return null;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={26} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.center}>
        <Text numberOfLines={2} style={styles.title}>
          {t(`temples.${selectedTempleId}.desc`)}
        </Text>
      </View>

      <Pressable style={styles.dropdownBtn} onPress={() => setOpen(!open)}>
        <Text numberOfLines={1} style={styles.dropdownText}>
          {t(`${selectedTemple.i18nKey}.name`)}
        </Text>
        <Ionicons name="chevron-down" size={16} color="#fff" />
      </Pressable>

      {open && (
        <View style={styles.dropdownList}>
          {TEMPLES.map((temple) => (
            <Pressable
              key={temple.id}
              style={{ padding: 12 }}
              onPress={() => {
                selectTemple(temple.id);
                setOpen(false);
              }}
            >
              <Text style={styles.itemText}>
                {t(`${temple.i18nKey}.name`)}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
  },

  left: {
    width: 40,
    alignItems: "flex-start",
  },

  center: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
  },

  title: {
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },

  dropdownBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  dropdownText: {
    fontSize: 11,
    color: "#fff",
    maxWidth: 90,
    fontWeight: "600",
  },

  dropdownList: {
    position: "absolute",
    top: 56,
    right: 12,
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    zIndex: 20,
  },

  itemText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "600",
  },
});
