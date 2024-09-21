import { View, Text } from "react-native";
import React from "react";
import Logo from "../assets/icons/fullLogo.svg";
import Notification from "../assets/icons/notification";
import Profile from "../assets/icons/profile";

const Header = () => {
  return (
    <View className="fixed z-10 top-0 left-0 w-full h-[8vh] flex flex-row justify-between items-center">
      <View>
        <Logo width="100px" height="100px" />
      </View>
      <View className="flex flex-row">
        <Profile />

        <Notification />
      </View>
    </View>
  );
};

export default Header;
