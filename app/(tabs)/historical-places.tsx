import { Stack } from "expo-router";
import HistoricalPlacesScreen from "../../screens/HistoricalPlacesScreen";

export default function HistoricalPlaces() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Historical Places", presentation: "card" }} />
      <HistoricalPlacesScreen />
    </>
  );
}
