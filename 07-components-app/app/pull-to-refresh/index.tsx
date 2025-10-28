import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { useThemeColor } from "@/hooks/useThemeColor";

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    { dark: "black", light: "white" },
    "background"
  );
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor]}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemeText>PullToRefreshScreen</ThemeText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
