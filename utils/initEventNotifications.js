import i18n from "../i18n";
import { scheduleEventNotification } from "./scheduleEventNotification";

export async function initEventNotifications() {
  const events = i18n.t("eventsData", { returnObjects: true });

  for (const key in events) {
    const event = events[key];

    if (!event.notifyAt) continue;

    await scheduleEventNotification({
      title: event.title,
      body: event.desc,
      date: new Date(event.notifyAt),
    });
  }
}
