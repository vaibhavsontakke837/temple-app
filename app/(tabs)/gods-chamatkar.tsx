import { Stack } from "expo-router";
import GodsChamatkarScreen from "../../screens/GodsChamatkarScreen";

export default function GodsChamatkar() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Gods Chamatkar", presentation: "card" }} />
      <GodsChamatkarScreen />
    </>
  );
}
