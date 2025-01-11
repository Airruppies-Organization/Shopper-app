import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import Input from "../../../components/input";
import { router } from "expo-router";
import Submit from "../../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../../context/context";
import useSignup from "../../../hooks/useSignup";

const Password = () => {
  const { registration, setRegistration } = useContext(AppContext);
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async () => {
    const register = await signup(
      registration.username,
      registration.email,
      registration.phoneNo,
      registration.password,
      registration.confirm
    );
    console.log(register);
    if (register) {
      setRegistration({
        username: "",
        email: "",
        phoneNo: "",
        password: "",
        confirm: "",
      });

      router.push("/dashboard");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 pt-28 pb-16 relative">
          <Text className="text-xl font-normal mb-5">Set Password</Text>

          <Input
            type="password"
            label="Password:"
            value={registration.password}
            handleChange={(e) =>
              setRegistration({ ...registration, password: e })
            }
          />
          <Input
            type="password"
            label="Confirm Password:"
            value={registration.confirm}
            handleChange={(e) =>
              setRegistration({ ...registration, confirm: e })
            }
          />

          <Submit value="Submit" onPress={handleSubmit} />
          {error && (
            <View className="mt-3 w-full h-14 rounded-lg border-2 border-[#b12727] bg-[#ffe1e1] flex items-center justify-center">
              <Text className="text-[#b12727] font-semibold">{error}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Password;
