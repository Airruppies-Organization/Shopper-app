import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

const Sub = ({ label, icon, to }) => {
  return (
    <Pressable
      onPress={() => router.push(to)}
      className="border-[2px] border-spacing-1 w-[48%] p-2 h-14 border-secondary rounded-lg"
    >
      <View className="flex flex-row items-center h-full">
        <View className="mr-2">{icon}</View>
        <Text className="text-secondary text-sm">{label}</Text>
      </View>
    </Pressable>
  );
};

export default Sub;
