import { useTemple } from "@/context/TempleContext";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
  const { selectedTempleId } = useTemple();
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.cream }]}>
      <Text style={[styles.heading, { color: theme.colors.text }]}>{t("contact")}</Text>
      
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.label, { color: theme.colors.textSecondary }]}>{t("templeNameLabel")}:</Text>
        <Text style={[styles.value, { color: theme.colors.text }]}>{t(`temples.${selectedTempleId}.templeName`)}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.label, { color: theme.colors.textSecondary }]}>{t("templeAddressLabel")}:</Text>
        <Text style={[styles.value, { color: theme.colors.text }]}>{t(`temples.${selectedTempleId}.address`)}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("contactPersonsLabel")}</Text>
        
        <View style={[styles.contactPerson, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.label, { color: theme.colors.textSecondary }]}>{t("presidentContactLabel")}:</Text>
          <Text style={[styles.name, { color: theme.colors.text }]}>{t(`temples.${selectedTempleId}.presidentName`)}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${t("presidentContact")}`)}>
            <Text style={[styles.phone, { color: theme.colors.primary }]}>{t(`temples.${selectedTempleId}.presidentContact`)}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.contactPerson, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.label, { color: theme.colors.textSecondary }]}>{t("secretaryContactLabel")}:</Text>
          <Text style={[styles.name, { color: theme.colors.text }]}>{t(`temples.${selectedTempleId}.secretaryName`)}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${t("secretaryContact")}`)}>
            <Text style={[styles.phone, { color: theme.colors.primary }]}>{t(`temples.${selectedTempleId}.secretaryContact`)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* {Platform.OS === "web" ? (
        <iframe
          src={mapURL}
          width="100%"
          height="400"
          style={{ border: 0, marginTop: 16, borderRadius: 8 }}
        />
      ) : (
        <WebView source={{ uri: mapURL }} style={styles.map} />
      )} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  contactPerson: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
  map: {
    height: 400,
    marginTop: 16,
    borderRadius: 8,
  },
});
