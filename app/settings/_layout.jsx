import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ScreenLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profileSettings" />
      <Stack.Screen name="cardSettings/index" />
      <Stack.Screen name="security" />
      <Stack.Screen name="contactUs" />
      <Stack.Screen name="updateKYC" />
      {/* <Stack.Screen name="orders/[order_id].jsx/index" /> */}
    </Stack>
  );
};

export default ScreenLayout;
