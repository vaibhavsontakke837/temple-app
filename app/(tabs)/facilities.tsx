import { Stack } from "expo-router";
import FacilitiesScreen from "../../screens/FacilitiesScreen";

export default function Facilities() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Facilities", presentation: "card" }} />
      <FacilitiesScreen />
    </>
  );
}

