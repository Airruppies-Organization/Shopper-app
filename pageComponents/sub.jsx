import { View, Text, Pressable, TouchableHighlight } from "react-native";
import React from "react";
import { useState } from "react";
import { router } from "expo-router";

const Sub = ({ label, icon, to }) => {
  return (
    <TouchableHighlight
      className="border-[2px] border-spacing-1 w-[48%] p-2 h-14 border-secondary rounded-lg"
      onPress={() => router.push(to)}
      underlayColor="#DFDFDF"
    >
      <View className="flex flex-row items-center h-full">
        <View className="mr-2">{icon}</View>
        <Text className="text-secondary text-sm">{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Sub;
