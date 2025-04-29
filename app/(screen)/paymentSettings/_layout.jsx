import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ScreenLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pinSetting" />
      <Stack.Screen name="setPin" />
      {/* <Stack.Screen name="orders/[order_id].jsx/index" /> */}
    </Stack>
  );
};

export default ScreenLayout;
