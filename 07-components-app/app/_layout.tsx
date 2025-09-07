import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import "../global.css";
import { Text, View } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-dark-background">
        <Text className="text-3xl mt-10 text-light-primary dark:text-dark-primary">
          Hola mundo
        </Text>
        {/* <Stack>
      </Stack> */}
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
