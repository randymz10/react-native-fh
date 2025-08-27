import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fonstLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (fonstLoaded) SplashScreen.hideAsync();
  }, [fonstLoaded, error]);

  if (!fonstLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
