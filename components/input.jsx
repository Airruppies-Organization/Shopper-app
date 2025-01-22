import { View, Text, TextInput } from "react-native";

import React, { useState } from "react";
import EyePasswordSee from "../assets/icons/openEye";
import EyePasswordBlind from "../assets/icons/closeEye";

const Input = ({ label, handleChange, value, type }) => {
  const [view, setView] = useState(false);

  const handleToggle = () => {
    setView((prev) => !prev);
  };

  return (
    <View className="mb-8">
      <Text className="font-sregular">{label}</Text>

      <View className="w-full h-14 px-4 border-[0.5px] focus:border-2 border-black focus:border-secondary rounded-xl items-center flex flex-row">
        <TextInput
          className="flex text-black text-base w-full h-full flex-grow flex-shrink"
          value={value}
          onChangeText={handleChange}
          secureTextEntry={type === "password" && view}
        />
        {type === "password" ? (
          view ? (
            <EyePasswordBlind onPress={handleToggle} color="#575757" />
          ) : (
            <EyePasswordSee onPress={handleToggle} color="#61088E" />
          )
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

export default Input;
