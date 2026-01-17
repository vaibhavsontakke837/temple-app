import { useTranslation } from "react-i18next";

import EventCard from "../components/mobile/EventCard";
import ScreenContainer from "../components/mobile/ScreenContainer";

export default function EventsScreen() {
  const { t } = useTranslation();

  const events = t("eventsData", { returnObjects: true });

  return (
    <ScreenContainer>
      {/* <SectionHeader title={t("upcomingEvents")} /> */}

      {Object.values(events).map((event, index) => (
        <EventCard
          key={index}
          date={event.date}
          title={event.title}
          desc={event.desc}
        />
      ))}
    </ScreenContainer>
  );
}
