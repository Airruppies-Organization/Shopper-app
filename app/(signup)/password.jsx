import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "../../components/input";
import Submit from "../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";

const Password = () => {
  const [password, setPassword] = useState({
    password: "",
    confirm: "",
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 pt-28 pb-16 relative">
          <Text className="text-xl font-normal mb-5">Set Password</Text>

          <Input
            type="password"
            label="Password:"
            value={password.password}
            handleChange={(e) => setPassword({ ...password, password: e })}
          />
          <Input
            type="password"
            label="Confirm Password:"
            value={password.confirm}
            handleChange={(e) => setPassword({ ...password, confirm: e })}
          />

          <Submit value="Submit" to={"/dashboard"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Password;
