import { View, Text } from "react-native";
import React from "react";

const Sub = ({ label, icon }) => {
  return (
    <View className="border-[2px] border-spacing-1 w-[48%] p-2 h-14 flex flex-row items-center border-secondary rounded-lg">
      <View className="mr-2">{icon}</View>
      <Text className="text-secondary text-sm">{label}</Text>
    </View>
  );
};

export default Sub;
