import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ScreenLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="upSlider" />
      <Stack.Screen name="verify" />
      <Stack.Screen name="summary" />
    </Stack>
  );
};

export default ScreenLayout;