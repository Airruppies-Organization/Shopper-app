import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { router } from "expo-router";
import useLogout from "../../hooks/useLogout";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import FlashMessage from "react-native-flash-message";
import Dropdown from "../../assets/icons/dropdown";

const Settings = () => {
  const { profile, setProfile, handleUpdateProfile } = useContext(AppContext);
  const { logout } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/home");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  const settingFields = [
    {
      name: "Profile Settings",
      to: "/settings/profileSettings",
    },

    {
      name: "Update KYC",
      to: "/settings/updateKYC",
    },
    {
      name: "Card Settings",
      to: "/settings/cardSettings",
    },
    {
      name: "Security",
      to: "/settings/security",
    },
    {
      name: "Contact Us",
      to: "/settings/contactUs",
    },
  ];

  return (
    <ScrollView className="bg-primary px-5 h-full pt-10">
      <View className="mb-10">
        <Text className="text-2xl font-bold ">Account settings</Text>
        <Text className="text-sm">Anekwu Timothy</Text>
      </View>

      <View className=" w-full p-3 bg-[#F6F6F6] mt-5 rounded-xl">
        {settingFields.map((field, index) => (
          <Pressable
            key={index}
            className={`py-4 px-3 ${
              index !== settingFields.length - 1 && "border-b-[0.5px]"
            } border-b-[#D8D8D8] flex flex-row justify-between items-center`}
            onPress={() => router.push(field.to)}
          >
            <Text className="font-bold text-xs">{field.name}</Text>
            <Dropdown
              className="-rotate-90"
              height={15}
              width={15}
              color={"black"}
            />
          </Pressable>
        ))}
      </View>

      {/* Profile Settings */}
      <View className="mt-5">
        <TouchableHighlight
          underlayColor={"#ff6565"}
          onPress={handleLogout}
          className="bg-[#ffdede] h-14 flex items-center justify-center rounded-xl"
        >
          <Text className="text-sm text-[#751414] font-sbold">Log out</Text>
        </TouchableHighlight>
      </View>

      <View className="w-full justify-center flex flex-row">
        <Text className="text-xs font-sregular mt-3">
          For support, contact{" "}
          <Link className="text-secondary" href="justruppies@gmail.com">
            justruppies@gmail.com
          </Link>
        </Text>
      </View>
      <FlashMessage position="top" />
    </ScrollView>
  );
};

export default Settings;
