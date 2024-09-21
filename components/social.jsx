import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Social = ({ label }) => {
  return (
    <View className="h-14 w-full border-[0.5px] border-[#636363] rounded-lg flex flex-row items-center px-3 ">
      <View className="w-[30px] h-[30px]">{/* <Text></Text> */}</View>
      <Text className="ml-8 text-md">{label}</Text>
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({});
