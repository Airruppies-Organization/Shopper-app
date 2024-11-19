import { View, Text, ScrollView } from "react-native";
import { router } from "expo-router";
import React, { useContext } from "react";
import Input from "../../../components/input";
import Submit from "../../../components/submit";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../../context/context";

const Register = () => {
  const { registration, setRegistration } = useContext(AppContext);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-5 pt-28 pb-16 relative">
          <Text className="text-xl font-normal mb-5">Continue with email</Text>

          <Input
            label="Username:"
            value={registration.username}
            handleChange={(e) =>
              setRegistration({ ...registration, username: e })
            }
          />
          <Input
            label="Email:"
            value={registration.email}
            handleChange={(e) => setRegistration({ ...registration, email: e })}
          />
          <Input
            label="Phone Number:"
            value={registration.phoneNo}
            handleChange={(e) =>
              setRegistration({ ...registration, phoneNo: e })
            }
          />

          <Submit value="Next" onPress={() => router.push("/password")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
