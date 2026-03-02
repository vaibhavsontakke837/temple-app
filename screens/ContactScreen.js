import { useTemple } from "@/context/TempleContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { Linking, Platform, ScrollView, Text } from "react-native";
import { WebView } from "react-native-webview";
export default function ContactScreen() {
  const { selectedTemple, selectTemple, selectedTempleId } = useTemple();
  const { t } = useTranslation();
  const mapURL = t(`temples.${selectedTempleId}.mapurl`);

  // const mapiframeHtml = `
  //       <html>
  //       <body style="margin:0;padding:0;">
  //       <iframe
  //       src="${mapURL}"
  //       width="100%"
  //       height="100%"
  //       style="border:0;"
  //       allowfullscreen=""
  //       loading="lazy"
  //       referrerpolicy="no-referrer-when-downgrade"
  //     ></iframe>
  //     </body>
  //     </html>`;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>{t("contact")}</Text>
      <Text style={{ marginTop: 12 }}>
        {t("templeNameLabel")}: {t(`temples.${selectedTempleId}.name`)}
      </Text>
      <Text style={{ marginTop: 12 }}>
        {t("templeAddressLabel")}: {t(`temples.${selectedTempleId}.address`)}
      </Text>
      <Text
        style={{ marginTop: 8 }}
        onPress={() => Linking.openURL("tel:+911234567890")}
      >
        {t("templeContactLabel")}: {t(`temples.${selectedTempleId}.contact`)}
      </Text>

      {Platform.OS === "web" ? (
        <iframe
          src={mapURL}
          width="100%"
          height="400"
          style={{ border: 0, marginTop: 10 }}
        />
      ) : (
        <WebView source={{ uri: mapURL }} style={{ height: 400 }} />
      )}
    </ScrollView>
  );
}
