import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import { useAuthStore } from "./src/store/authStore";
import { StatusBar } from "react-native";
import { AppProviders } from "./src/components/Provider";
import { useCustomFonts } from "./src/components/FontLoader";
import MainStack from "./src/navigation/MainStack";
import { useUserStore } from "./src/store/userStore";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavigation: React.FC = () => {
  const { token } = useAuthStore();
  const { getUser } = useUserStore();
  useEffect(() => {
    // console.log("Token from Zustand:", token);
    if (token) {
      getUser();
    }
  }, [token]);

  return token ? <MainStack /> : <AuthStack />;
};

export default function App() {
  const isReady = useCustomFonts();

  if (!isReady) return null;
  return (
    <AppProviders>
      <NavigationContainer>
        <StatusBar
          hidden
          animated={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <AppNavigation />
      </NavigationContainer>
    </AppProviders>
  );
}
