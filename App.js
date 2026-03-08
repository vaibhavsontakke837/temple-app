import "expo-router/entry";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider />
    </ThemeProvider>
  );
}
