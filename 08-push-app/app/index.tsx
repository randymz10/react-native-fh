import { View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/themed-text";
import { usePushNotifications } from "@/hooks/usePushNotifications";

const PushApp = () => {
  const {} = usePushNotifications();
  
  return (
    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
      <ThemedText>Token: </ThemedText>
    </View>
  );
};

export default PushApp;
