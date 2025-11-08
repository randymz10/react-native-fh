import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { Colors } from "@/constants/Colors";

interface ThemeChangerContextType {
  currentTheme: "dark" | "light";
  isSystemTheme: boolean;
  bgColor: string;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom Hook

export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);
  return themeChanger;
};

// Provider

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnable, setIsSystemThemeEnable] = useState(true);

  const currentTheme = isSystemThemeEnable
    ? colorScheme
    : isDarkMode
      ? "dark"
      : "light";
  const backgroundColor = isDarkMode
    ? Colors.dark.background
    : Colors.light.background;
  useEffect(() => {
    AsyncStorage.getItem("selected-theme").then((theme) => {
      if (!theme) return;

      setIsDarkMode(theme === "dark");
      setIsSystemThemeEnable(theme === "system");
      setColorScheme((theme as "light") || "dark" || "system");
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: isSystemThemeEnable,
          bgColor: backgroundColor,

          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsSystemThemeEnable(false);

            // TODO: guardar em storage

            await AsyncStorage.setItem(
              "selected-theme",
              isDarkMode ? "light" : "dark"
            );
          },

          setSystemTheme: async () => {
            setIsSystemThemeEnable(true);
            setColorScheme("system");
            await AsyncStorage.setItem("selected-theme", "system");
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
