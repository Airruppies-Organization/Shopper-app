import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "../../components/input";
import Submit from "../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

const Register = () => {
  const [reg, setReg] = useState({
    username: "",
    email: "",
    phoneNo: "",
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 pt-28 pb-16 relative">
          <Text className="text-xl font-normal mb-5">Continue with email</Text>

          <Input
            label="Username:"
            value={reg.username}
            handleChange={(e) => setReg({ ...reg, username: e })}
          />
          <Input
            label="Email:"
            value={reg.email}
            handleChange={(e) => setReg({ ...reg, email: e })}
          />
          <Input
            label="Phone Number:"
            value={reg.phoneNo}
            handleChange={(e) => setReg({ ...reg, phoneNo: e })}
          />

          <Submit value="Next" to="/password" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
