import { View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({ label, handleChange, value, type }) => {
  return (
    <View className="mb-8">
      <Text className="font-sregular">{label}</Text>

      <View className="w-full h-14 px-4 border-[0.5px] focus:border-2 border-black focus:border-secondary rounded-xl items-center">
        <TextInput
          className="flex text-black text-base w-full h-full"
          value={value}
          onChangeText={handleChange}
          secureTextEntry={type === "password"}
        />
      </View>
    </View>
  );
};

export default Input;
