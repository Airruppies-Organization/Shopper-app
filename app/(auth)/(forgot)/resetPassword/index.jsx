import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import Input from "../../../../components/input";
import Submit from "../../../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../../../context/context";
import useLogin from "../../../../hooks/useLogin";
import { router } from "expo-router";
import Constants from "expo-constants";
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

const ResetPassword = () => {
  const { emailVer } = useContext(AppContext);
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  const extra = Constants.expoConfig?.extra;
  const baseURL = extra.baseURL;

  const resetPassword = async () => {
    try {
      if (pass !== conPass) {
        throw new Error("Passwords do not match");
      }

      const verifier = await fetch(`${baseURL}/auth/resetpassword`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailVer, password: pass }),
      });

      const res = await verifier.json();

      if (verifier.ok) {
        showMessage({
          message: "Success",
          description: res.message,
          type: "success",
          icon: "auto",
          position: "top",
          duration: 4000,
        });

        router.push("/(login)");
      }

      if (!verifier.ok) {
        showMessage({
          message: "Warning",
          description: res.error,
          type: "warning",
          icon: "auto",
          position: "top",
          duration: 4000,
        });
      }
    } catch (error) {
      showMessage({
        message: "Warning",
        description: error,
        type: "warning",
        icon: "auto",
        position: "top",
        duration: 4000,
      });
    }
  };

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
            value={pass}
            handleChange={(e) => setPass(e)}
          />
          <Input
            type="password"
            label="Confirm new password"
            value={conPass}
            handleChange={(e) => setConPass(e)}
          />

          <Submit
            value="Reset password"
            // onPress={() => router.push("/(login)")}
            onPress={resetPassword}
          />
        </View>
      </ScrollView>
      <FlashMessage position={"top"} />
    </SafeAreaView>
  );
};

export default ResetPassword;
