import { useState } from "react";
import { useColorScheme } from "nativewind";
// import { useColorScheme } from "react-native";

import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";

const ThemesScreen = () => {
  // const theme = useColorScheme();

  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };
  const setSystemMode = (value: boolean) => {
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          className="mb-5"
          text="Dark mode"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text="System mode"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
