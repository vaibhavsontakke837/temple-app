import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import InfoCard from "../components/mobile/InfoCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import { GODS_CHAMATKAR_DATA } from "../data/godsChamatkar";

export default function GodsChamatkarScreen() {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <SectionTitle title={t("godsCharmatkar")} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {GODS_CHAMATKAR_DATA.map((item) => (
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
