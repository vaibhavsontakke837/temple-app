import * as Notifications from "expo-notifications";

export async function scheduleEventNotification({
  title,
  body,
  date, // JS Date object
}) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger: date,
  });
}
