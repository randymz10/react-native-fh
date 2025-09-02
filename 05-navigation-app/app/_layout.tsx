import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
  // return <Slot />;
  // return <Stack />
};

export default RootLayout;
