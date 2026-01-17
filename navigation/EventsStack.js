import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import EventsScreen from "../screens/EventsScreen";

const Stack = createNativeStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsList"
        component={EventsScreen}
        options={{ title: "Events" }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: "Event Details" }}
      />
    </Stack.Navigator>
  );
}
