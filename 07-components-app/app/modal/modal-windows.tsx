import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import { Platform } from "react-native";
import ThemedButton from "@/presentation/shared/ThemedButton";
import { router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemeText>Hola, soy un modal</ThemeText>

      <ThemedButton
        className="my-4"
        onPress={() => router.push("/modal/modal-windows-2")}
      >
        Otro modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>Cerrar</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
