import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import InfoCard from "../components/mobile/InfoCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import { HISTORICAL_PLACES_DATA } from "../data/historicalPlaces";

export default function HistoricalPlacesScreen() {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <SectionTitle title={t("historicalPlaces")} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {HISTORICAL_PLACES_DATA.map((item) => (
          <InfoCard
            key={item.id}
            image={item.image}
            title={t(item.titleKey)}
            description={t(item.descKey)}
          />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}
