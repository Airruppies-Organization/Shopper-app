import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "../../components/input";
import Submit from "../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 pt-28 pb-16 relative">
          <Text className="text-4xl font-semibold mb-5 font-sregular">
            Login
          </Text>
          <Input
            label="Email:"
            value={login.email}
            handleChange={(e) => setLogin({ ...login, email: e })}
          />
          <Input
            type="password"
            label="Password"
            value={login.password}
            handleChange={(e) => setLogin({ ...login, password: e })}
          />

          <Submit value="Submit" to={"/dashboard"} />
          <View className="w-full flex items-end mt-3">
            <Text className="text-secondary">Forgot Password</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
