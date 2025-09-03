import React from "react";
import { View, Text } from "react-native";

import "../global.css";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";

const RootLayout = () => {
  nowPlayingAction();
  return (
    <View className="flex flex-1 bg-blue-500 ">
      <Text className="mt-20 bg-blue-500">RootLayout</Text>
    </View>
  );
};

export default RootLayout;
