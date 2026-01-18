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
      {/* LEFT */}
      <View style={styles.left}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={26} color="#fff" />
        </Pressable>
      </View>

      {/* CENTER */}
      <View style={styles.center}>
        <Text numberOfLines={2} style={styles.title}>
          {t(`temples.${selectedTempleId}.desc`)}
        </Text>
      </View>

      {/* RIGHT */}
      {/* <View style={styles.right}> */}
      <Pressable style={styles.dropdownBtn} onPress={() => setOpen(!open)}>
        <Text numberOfLines={1} style={styles.dropdownText}>
          {t(`${selectedTemple.i18nKey}.name`)}
        </Text>
        <Ionicons name="chevron-down" size={16} color="#fff" />
      </Pressable>
      {/* <Pressable onPress={toggleTheme}>
        <Ionicons
          name={mode === "light" ? "moon" : "sunny"}
          size={22}
          color="#fff"
        />
      </Pressable> */}

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
              <Text style={styles.dropdownText}>
                {t(`${temple.i18nKey}.name`)}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
    // </View>
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

  right: {
    width: 120,
    alignItems: "flex-end",
    position: "relative",
  },

  title: {
    fontSize: 13,
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
    color: "black",
    maxWidth: 90,
  },

  dropdownList: {
    position: "absolute",
    top: 36,
    right: 0,
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 6,
    zIndex: 100,
    overflow: "hidden",
  },

  dropdownList: {
    position: "absolute",
    top: 56,
    right: 12,
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    zIndex: 20, // 🔥 MUST be higher than overlay
  },

  itemText: {
    fontSize: 12,
    color: "#333",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 5,
  },
});

// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "expo-router";
// import { useTranslation } from "react-i18next";
// import { Pressable, StyleSheet, Text, View } from "react-native";
// import { useThemeContext } from "../../context/ThemeContext";
// import { theme as appTheme } from "../../styles/theme";

// export default function AppHeader() {
//   const navigation = useNavigation();
//   const { t } = useTranslation();

//   const {mode, toggleTheme, theme} = useThemeContext();

//   const ctx = useThemeContext();

//   if (!ctx) {
//     console.warn("⚠️ ThemeContext missing — wrap app in <ThemeProvider>");
//     return null;
//   }

//   // const { mode, toggleTheme } = ctx;

//   return (
//     <View style={[styles.container, { backgroundColor: theme.header }]}>
//       <Pressable onPress={() => navigation.openDrawer()}>
//         <Ionicons name="menu" size={26} color={theme.text} />
//       </Pressable>

//       <Text numberOfLines={1} style={[styles.title, { color: theme.text }]}>
//         {t("templeName")}
//       </Text>

//       <Pressable onPress={toggleTheme}>
//         <Ionicons
//           name={mode === "light" ? "moon" : "sunny"}
//           size={22}
//           color={theme.text}
//         />
//       </Pressable>
//     </View>
//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     height: 56,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: appTheme.spacing.md,
//     backgroundColor: appTheme.colors.primary,
//   },
//   title: {
//     flex: 1,
//     textAlign: "center",
//     marginHorizontal: 12,
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#fff",
//   },
// });
