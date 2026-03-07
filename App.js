import "expo-router/entry";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initEventNotifications } from "./utils/initEventNotifications";
import { setupNotifications } from "./utils/notifications";

import { ThemeProvider } from "./context/ThemeProvider";

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    async function init() {
      const granted = await setupNotifications();
      if (granted) {
        await initEventNotifications();
      }
    }
    init();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaProvider />
    </ThemeProvider>
  );
}
