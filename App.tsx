import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import { useAuthStore } from "./src/store/authStore";
import { StatusBar } from "react-native";
import { AppProviders } from "./src/components/Provider";
import { useCustomFonts } from "./src/components/FontLoader";
import MainStack from "./src/navigation/MainStack";

const AppNavigation = () => {
  const { accessToken, refreshToken } = useAuthStore();
  console.log("access_token", accessToken);
  console.log("refresh_token", refreshToken);
  return accessToken ? <MainStack /> : <AuthStack />;
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
