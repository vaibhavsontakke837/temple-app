import { useTemple } from "@/context/TempleContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

export default function ContactScreen() {
  const { selectedTempleId } = useTemple();
  const { t } = useTranslation();
  const mapURL = t(`temples.${selectedTempleId}.mapurl`);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{t("contact")}</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>{t("templeNameLabel")}:</Text>
        <Text style={styles.value}>{t(`temples.${selectedTempleId}.name`)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>{t("templeAddressLabel")}:</Text>
        <Text style={styles.value}>{t(`temples.${selectedTempleId}.address`)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>{t("contactPersonsLabel")}</Text>
        
        <View style={styles.contactPerson}>
          <Text style={styles.label}>{t("presidentContactLabel")}:</Text>
          <Text style={styles.name}>{t(`temples.${selectedTempleId}.presidentName`)}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${t("presidentContact")}`)}>
            <Text style={styles.phone}>{t(`temples.${selectedTempleId}.presidentContact`)}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactPerson}>
          <Text style={styles.label}>{t("secretaryContactLabel")}:</Text>
          <Text style={styles.name}>{t(`temples.${selectedTempleId}.secretaryName`)}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${t("secretaryContact")}`)}>
            <Text style={styles.phone}>{t(`temples.${selectedTempleId}.secretaryContact`)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {Platform.OS === "web" ? (
        <iframe
          src={mapURL}
          width="100%"
          height="400"
          style={{ border: 0, marginTop: 16, borderRadius: 8 }}
        />
      ) : (
        <WebView source={{ uri: mapURL }} style={styles.map} />
      )}
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
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
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
    color: "#666",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  contactPerson: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: "#ff6600",
    textDecorationLine: "underline",
  },
  map: {
    height: 400,
    marginTop: 16,
    borderRadius: 8,
  },
});
