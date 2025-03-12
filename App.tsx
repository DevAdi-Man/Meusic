import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
import { useAuthStore } from "./src/store/authStore";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { AppProviders } from "./src/components/Provider";
import { useCustomFonts } from "./src/components/FontLoader";
import MainStack from "./src/navigation/MainStack";

const AppNavigation: React.FC = () => {
  const { token } = useAuthStore();
  const isAuthen = true

  return isAuthen ? <MainStack /> : <AuthStack />;
};

export default function App() {
   const isReady = useCustomFonts();

  if (!isReady) return null; 
  return (
    <AppProviders>
      <NavigationContainer>
        <StatusBar hidden animated={true} backgroundColor="transparent" barStyle="dark-content" />
        <AppNavigation />
      </NavigationContainer>
    </AppProviders>
  );
}
