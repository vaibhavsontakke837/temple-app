import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";

import Card from "../components/Card";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import { theme } from "../styles/theme";

export default function EventDetailsScreen({ route }) {
  const { t } = useTranslation();
  const { eventId, date } = route.params;

  return (
    <ScreenContainer>
      <SectionTitle title={t(`eventsData.${eventId}.title`)} />

      <Card>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.desc}>
          {t(`eventsData.${eventId}.desc`)}
        </Text>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  date: {
    color: theme.colors.gold,
    fontSize: theme.typography.small,
    marginBottom: theme.spacing.sm,
  },
  desc: {
    fontSize: theme.typography.body,
    color: theme.colors.deep,
    lineHeight: 22,
  },
});
