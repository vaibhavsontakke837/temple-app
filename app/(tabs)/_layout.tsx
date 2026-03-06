import { Drawer } from "expo-router/drawer";
import AppHeader from "../../components/mobile/AppHeader";
import CustomDrawerContent from "../../components/mobile/CustomDrawerContent";

export default function TabsLayout() {
  return (
    <Drawer
      initialRouteName="home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ header: () => <AppHeader /> }}
    />
  );
}
