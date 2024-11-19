import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import useLogout from "../../hooks/useLogout";

const Settings = () => {
  const { logout } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/(login)");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return (
    <ScrollView>
      <View className="px-3 h-screen flex justify-center">
        <Pressable
          onPress={handleLogout}
          className="w-full h-10 rounded-lg bg-[#c81b1b] flex items-center justify-center"
        >
          <Text className="text-text-white">Log out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Settings;
