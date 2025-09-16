import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  className?: string;
}

const ThemedButton = ({ className, children, ...rest }: Props) => {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
      {...rest}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
