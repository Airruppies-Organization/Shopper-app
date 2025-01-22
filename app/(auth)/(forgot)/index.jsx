import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import React, { useContext, useState, useRef, useEffect } from "react";
import Input from "../../../components/input";
import Submit from "../../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../../context/context";
import { router } from "expo-router";
import Constants from "expo-constants";
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

const Forgotpassword = () => {
  const { emailVer, setEmailVer } = useContext(AppContext);
  const [values, setValues] = useState(["", "", "", "", "", "", ""]);

  const [viewTok, setViewTok] = useState(false);

  const inputs = useRef([]);

  const extra = Constants.expoConfig?.extra;
  const baseURL = extra.baseURL;

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

  const verifyEmail = async () => {
    try {
      const verifier = await fetch(`${baseURL}/auth/forgotpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailVer }),
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

        setViewTok(true);
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

  const verifyOTP = async () => {
    try {
      const verifier = await fetch(`${baseURL}/auth/verifytoken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailVer,
          otpcode: parseInt(values.join("")),
        }),
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

        setValues(["", "", "", "", "", "", ""]);

        router.push("/resetPassword");
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
        message: "Error",
        description: error,
        type: "danger",
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
            Forgot password
          </Text>
          <Input
            label="Enter your email"
            value={emailVer}
            handleChange={(e) => setEmailVer(e)}
          />
          <Submit onPress={verifyEmail} value="Verify email" />

          {viewTok && (
            <View className="mt-5 flex py-5 px-3">
              <Text className="w-full text-lg">Verify token</Text>
              <View className="flex flex-row justify-center space-x-2 mb-3">
                {values.map((value, index) => (
                  <TextInput
                    key={index}
                    maxLength={1}
                    keyboardType="numeric"
                    value={value}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                    style={{
                      width: 30,
                      height: 56,
                      textAlign: "center",
                      fontSize: 24,
                      borderBottomWidth: 2,
                      borderColor: "black",
                    }}
                  />
                ))}
              </View>

              <Submit onPress={verifyOTP} value="Confirm Token" />
            </View>
          )}
        </View>
      </ScrollView>
      <FlashMessage position={"top"} />
    </SafeAreaView>
  );
};

export default Forgotpassword;
