import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function setupNotifications() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("events", {
      name: "Temple Events",
      importance: Notifications.AndroidImportance.HIGH,
    });
  }

  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
}
