import { theme } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTemple } from "../../context/TempleContext";

export default function AppHeader() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { selectedTemple, selectedTempleId } = useTemple();

  if (!selectedTemple) return null;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
     
      <View style={styles.right}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={26} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.center}>
        <Text numberOfLines={2} style={styles.title}>
          {t(`temples.${selectedTempleId}.desc`)}
        </Text>
      </View>

     <View style={styles.left}>
        <Image
          source={require("../../assets/gallery/6.jpg")}
          style={styles.logo}
        />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
  },

  left: {
    width: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#fff",
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

  right: {
    width: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    maxWidth: 300,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },

  languageOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#f5f5f5",
  },

  selectedOption: {
    backgroundColor: theme.colors.primary + "20",
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },

  languageText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
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
    top: 70,
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
