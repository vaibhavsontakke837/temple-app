import { useTranslation } from "react-i18next";
import EventsList from "../components/mobile/EventsList";
import HeaderBanner from "../components/HeaderBanner";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";
import TimingCard from "../components/mobile/TimingCard";
import TempleHighlights from "../components/mobile/TempleHighlights";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <HeaderBanner />

      <TempleHighlights />

      <SectionHeader title={t("dailyTimings")} />
      <TimingCard />

      <SectionHeader title={t("upcomingEvents")} />
      <EventsList limit={3} />
    </ScreenContainer>
  );
}
