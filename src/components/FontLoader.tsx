import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    "RobotoSlab-Bold": require("../../assets/fonts/RobotoSlab-ExtraBold.ttf"),
    "RobotoSlab-Light": require("../../assets/fonts/RobotoSlab-Light.ttf"),
    "RobotoSlab-Medium": require("../../assets/fonts/RobotoSlab-Medium.ttf"),
    "RobotoSlab-Regular": require("../../assets/fonts/RobotoSlab-Regular.ttf"),
    "RobotoSlab-SemiBold": require("../../assets/fonts/RobotoSlab-SemiBold.ttf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  return isReady;
}
