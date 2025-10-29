import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";
import { Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-windows" className="mx-4">
        <Text className="text-light-background dark:text-dark-text my-2 text-xl">
          Abrir Modal
        </Text>
      </Link>
      <ThemedButton
        onPress={() => router.push("/modal/modal-windows")}
        className="mx-4"
      >
        Abrir modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
