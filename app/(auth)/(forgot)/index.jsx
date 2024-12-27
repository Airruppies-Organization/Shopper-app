import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import React, { useContext, useState, useRef, useEffect } from "react";
import Input from "../../../components/input";
import Submit from "../../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../../context/context";
import { router } from "expo-router";

const Forgotpassword = () => {
  const { signin, setSignin } = useContext(AppContext);
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  const inputs = useRef([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newValues = [...values];
    newValues[index] = text.toUpperCase();
    setValues(newValues);

    if (text && index < values.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !values[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 pt-28 pb-16 relative">
          <Text className="text-4xl font-semibold mb-5 font-sregular">
            Forgot password
          </Text>
          <Input
            label="Enter your email"
            handleChange={(e) => setSignin({ ...signin, email: e })}
          />
          <Submit value="Verify email" />

          <View className="mt-5 flex border-t-[0.5px] border-t-black py-5 px-3">
            <Text className="w-full text-lg">Verify token</Text>
            <View className="flex flex-row space-x-2">
              {values.map((value, index) => (
                <TextInput
                  key={index}
                  maxLength={1}
                  value={value}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                  style={{
                    width: 40,
                    height: 56,
                    textAlign: "center",
                    fontSize: 24,
                    borderBottomWidth: 2,
                    borderColor: "black",
                  }}
                />
              ))}
            </View>
            <Pressable className="w-full py-5 rounded-lg bg-secondary flex justify-center flex-row mt-5">
              <Text
                onPress={() => router.push("/resetPassword")}
                className="text-text-white text-center"
              >
                Confirm Token
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forgotpassword;
