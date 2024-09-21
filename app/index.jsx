import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex items-center justify-center h-full">
      <Text className="text-red-500 font-bold text-black">Locco</Text>
      <View>
        <Text
          onPress={() => router.push("/(signup)/home")}
          className=" bg-secondary text-primary rounded-md px-5 py-2"
        >
          REGISTER
        </Text>
        <Text
          onPress={() => router.push("/login")}
          className=" bg-secondary text-primary rounded-md px-5 py-2 mt-7"
        >
          Login
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
