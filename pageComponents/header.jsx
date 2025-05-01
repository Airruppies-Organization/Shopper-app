import { View, Text } from "react-native";
import React from "react";
import Logo from "../assets/icons/fullLogo";
import Notification from "../assets/icons/notification";
import Profile from "../assets/icons/profile";

const Header = () => {
  return (
    <View className="fixed z-10 top-0 left-0 w-full h-[8vh] flex flex-row justify-between items-center mt-2">
      <View>
        <Logo
          width={120}
          height={120}
          textColor={"#515151"}
          mainColor={"#61088E"}
          subColor={"#ffffff"}
        />
      </View>
      <View className="flex flex-row">
        {/* <View className="h-8 w-8 mr-3 flex items-center justify-center bg-[#f3f3f3] rounded-full">
          <Profile height={20} width={18} />
        </View> */}
        <View className="h-8 w-8 flex items-center justify-center bg-[#f3f3f3] rounded-full">
          <Notification height={20} width={18} />
        </View>
      </View>
    </View>
  );
};

export default Header;
