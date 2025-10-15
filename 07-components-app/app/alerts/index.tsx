import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Alert, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ThemedView>
      <SafeAreaProvider>
        <SafeAreaView>
          <ThemedButton className="mb-4 mx-5" onPress={createTwoButtonAlert}>
            2-Button Alert
          </ThemedButton>
          <ThemedButton className="mb-4 mx-5" onPress={createThreeButtonAlert}>
            3-Button Alert
          </ThemedButton>
        </SafeAreaView>
      </SafeAreaProvider>
      );
    </ThemedView>
  );
};
export default AlertsScreen;
