import { router } from "expo-router";
import { setStatusBarHidden, StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Pattern from "../assets/icons/pattern";
import Logo from "../assets/icons/fullLogo.jsx";

export default function App() {
  setTimeout(() => {
    router.push("home/");
  }, 3500);
  return (
    <View className="flex items-center justify-center h-full overflow-auto bg-secondary bg-opacity-5">
      <Pattern
        height={800}
        width={800}
        stroke="white"
        className="absolute opacity-50"
      />
      <Logo
        mainColor={"#ffffff"}
        subColor={"#000000"}
        textColor={"#ffffff"}
        height={180}
        width={180}
      />

      <StatusBar barStyle="light-content" />
    </View>
  );
}
