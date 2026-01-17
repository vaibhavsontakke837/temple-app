import { theme } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useTemple } from "../../context/TempleContext";
import { TEMPLES } from "../../shared/temples";

export default function AppHeader() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const {toggleTheme,mode } = useTheme();

  const { selectedTemple, selectTemple } = useTemple();

  if (!selectedTemple) return null;

  return (
    <View style={styles.container}>
      {/* Left: Hamburger */}
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={26} color="#fff" />
      </Pressable>

      <Text numberOfLines={2} style={[styles.title, { color: theme.text }]}> {t("templeName")} </Text>

      {/* Center: Temple Dropdown */}
      {/* <View style={styles.center}> */}
        <Pressable style={styles.dropdown}>
          <Text numberOfLines={1} style={styles.title}>
            {t(`${selectedTemple.i18nKey}.name`)}
          </Text>
          <Ionicons name="chevron-down" size={16} color="#fff" />
        </Pressable>


        {/* Dropdown list */}
        <View style={styles.dropdownList}>
          {TEMPLES.map((temple) => (
            <Pressable
              key={temple.id}
              style={styles.dropdownItem}
              onPress={() => selectTemple(temple.id)}
            >
              <Text style={styles.dropdownText}>
                {t(`${temple.i18nKey}.name`)}
              </Text>
            </Pressable>
          ))}
        </View>
      {/* </View> */}
      

      {/* Right: Dark / Light (COMMENTED FOR NOW) */}
      
      <Pressable onPress={toggleTheme}>
        <Ionicons
          name={mode === "light" ? "moon" : "sunny"}
          size={22}
          color="#fff"
        />
      </Pressable>
     

      {/* Placeholder to keep center aligned */}
      {/* <View style={{ width: 26 }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.primary,
  },

  center: {
    flex: 1,
    alignItems: "center",
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 4,
    left:-90
  },

  title: {
    minWidth: 300,
    width:270,
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
    textAlign:"left"
  },

  dropdownList: {
    position: "absolute",
    top: 38,
    left:300,
    width: 100,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 6,
    zIndex: 100,
  },

  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  dropdownText: {
    fontSize: 10,
    color: "#333",
  },
});

