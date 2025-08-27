import { View, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

import CustomBottom from "@/components/shared/CustomBottom";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-10">
        <CustomBottom
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Products
        </CustomBottom>

        <CustomBottom
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomBottom>

        <CustomBottom
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Settings
        </CustomBottom>

        <Link href="/products" asChild>
          <CustomBottom
            variant="text-only"
            onPress={() => router.push("/products")}
          >
            Products
          </CustomBottom>
        </Link>

        {/* <Link className="mb-5" href="/products">
          Products
        </Link>
        <Link className="mb-5" href="/profile">
          Profile
        </Link>
        <Link className="mb-5" href="/settings">
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
