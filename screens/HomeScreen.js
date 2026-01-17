import { useTranslation } from "react-i18next";

// import EventsPreview from "../components/mobile/EventsPreview";
import HeaderBanner from "../components/HeaderBanner";
import IconGrid from "../components/mobile/IconGrid";
import InformationCard from "../components/mobile/InformationCard";
import ScreenContainer from "../components/mobile/ScreenContainer";
import SectionHeader from "../components/mobile/SectionHeader";
import TimingCard from "../components/mobile/TimingCard";
import EventsScreen from "../screens/EventsScreen";

export default function HomeScreen() {
  const { t } = useTranslation();

  const menu = [
    { id:1, label: t("about"), route: "About Temple" },
    { id:2, label: t("gallery"), route: "Gallery" },
    { id:3, label: t("audio"), route: "Audio & Video" },
    { id:4, label: t("events"), route: "Events" },
    { id:5, label: t("donation"), route: "Donation" },
    { id:6, label: t("contact"), route: "Contact" },
  ];

  return (
    <ScreenContainer>
      <HeaderBanner />

       <SectionHeader title={t("quickAccess")} /> 
      <IconGrid menu={menu} columns={3} />

       <SectionHeader title={t("dailyTimings")} /> 
       <TimingCard /> 

      <SectionHeader title={t("upcomingEvents")} />
      {/* <EventDetailsScreen /> */}
      <EventsScreen />

      <SectionHeader title={t("blessing")} />
      <InformationCard />
    </ScreenContainer>
  );
}
