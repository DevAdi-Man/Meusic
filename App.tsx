import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
import { useAuthStore } from "./src/store/authStore";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { AppProviders } from "./src/components/Provider";

const AppNavigation: React.FC = () => {
  const { token } = useAuthStore();
  const isAuthen = true

  return isAuthen ? <AppStack /> : <AuthStack />;
};

export default function App() {
  return (
    <AppProviders>
      <NavigationContainer>
        <StatusBar hidden animated={true} backgroundColor="transparent" barStyle="dark-content" />
        <AppNavigation />
      </NavigationContainer>
    </AppProviders>
  );
}
