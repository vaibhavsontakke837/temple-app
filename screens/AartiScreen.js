import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "../context/ThemeContext";

const AARTI_LINES = [
  "विराळ ग्रामी ब्रह्ममुर्ती वर्णा वया दयावे स्फुर्ती",
  "जगामध्ये तुमची किर्ती म्हनोणी मी करीतो तुमची आरती",
  "भानुसम दिसे उदर शोभा - भानुसम दिसे उदर शोभा",
  "रूमाल जर तार गळा पुष्पाहार दिसे गुलजार",
  "इच्दा पुरवी दासाची आरती करू सद्‌गुरूची धोंडुतात्या महाराजांची आरती ॥१॥",
  " ",
  "ब्रह्मचारी वृत्त ज्याचे नाम स्मरण देवाचे",
  "पुजन करे गणपतीचे तुरे वाहिले दुर्वाचे",
  "पितांबर शोभे तसा पिवळा - पितांबर शोभे तसा पिवळा",
  "घालुनी आसण वरी बैसुन मुर्ती स्थापून",
  "पुजा करी भास्कराची करू सद्‌गुरूची धोंडुतात्या महाराजी आरती ॥२॥",
    " ",
  "जगामध्ये वागायची वृत्ती भोळा जसा उमापती",
  "कोपला सुर्य कलाती रजतम मदन भस्म होती",
  "मंदार आधीक पुष्प शोभा - मदार अधीक पुष्प शोभा",
  "वाद्य झण झणीत मंत्र मुखी म्हणीत",
  "आम्हाला आस ह्या चरणाची आरती करू सद्‌गुरूची धोंडुतात्या महाराजी आरती ॥३॥",
    " ",
  "माय बापाची सेवा केली प्रसन्नता देवाची झाली",
  "मुळ जणाची माऊली करी कृपेची सावली",
  "आंबादास भक्त भोळा - आंबादास भक्त भोळा",
  "लाविला भक्ती जिवाळा उघडीला ज्ञानाचा डोळा",
  "आम्हाला आस या चरणाची आरती करू सद्‌‌गुरूची धोंडुतात्या महाराजाची आरती ॥४॥",
];

export default function AartiScreen() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.cream }]}
    >
      <Text style={[styles.heading, { color: theme.colors.text }]}>
        {t("aarti")}
      </Text>

      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.label, { color: theme.colors.primary }]}>
          श्री समर्थ सद्गुरू धोंडुतात्या महाराजांची आरती
        </Text>
        {AARTI_LINES.map((line, index) => (
          <Text key={index} style={[styles.text, { color: theme.colors.text }]}>
            {line}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  heading: {
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    padding: 18,
    borderRadius: 14,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 9,
    lineHeight: 24,
    marginBottom: 4,
    fontWeight: 600,
  },
});
