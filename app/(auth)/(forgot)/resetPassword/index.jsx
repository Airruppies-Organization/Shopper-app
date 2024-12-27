import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import Input from "../../../../components/input";
import Submit from "../../../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../../../context/context";
import useLogin from "../../../../hooks/useLogin";
import { router } from "expo-router";

const ResetPassword = () => {
  const { signin, setSignin } = useContext(AppContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 pt-28 pb-16 relative">
          <Text className="text-4xl font-semibold mb-5 font-sregular">
            Reset password
          </Text>
          <Input
            label="Enter new password"
            type="password"
            // value={signin.email}
            // handleChange={(e) => setSignin({ ...signin, email: e })}
          />
          <Input
            type="password"
            label="Confirm new password"
            // value={signin.password}
            // handleChange={(e) => setSignin({ ...signin, password: e })}
          />

          <Submit
            value="Reset password"
            onPress={() => router.push("/(login)")}
          />

          {/* {error && (
            <View className="mt-3 w-full h-14 rounded-lg border-2 border-[#b12727] bg-[#ffe1e1] flex items-center justify-center">
              <Text className="text-[#b12727] font-semibold">{error}</Text>
            </View>
          )} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
