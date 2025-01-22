import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { router } from "expo-router";
import useLogout from "../../hooks/useLogout";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import FlashMessage from "react-native-flash-message";

const Settings = () => {
  const { profile, setProfile, handleUpdateProfile } = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  const { logout } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/(login)");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return (
    <ScrollView>
      {/* Profile Settings */}
      <View className="pt-10 px-3">
        <Text className="text-2xl font-sbold mb-10">Profile Settings</Text>
        <View className="flex flex-row justify-between w-full px-3 py-5 items-center border-b-[0.5px] border-[#b1b1b1]">
          <Text className="font-sbold text-[#828282]">User ID</Text>
          <Text className="font-sbold text-xs">{profile?._id}</Text>
        </View>
        <View className="flex flex-row justify-between w-full px-3 py-5 items-center border-b-[0.5px] border-[#b1b1b1]">
          <Text className="font-sbold text-[#828282]">Username</Text>
          {!edit ? (
            <Text className="font-sbold text-xs">{profile?.username}</Text>
          ) : (
            <TextInput
              value={profile?.username}
              spellCheck={false}
              textContentType="username"
              onChangeText={(e) =>
                setProfile((prev) => ({ ...prev, username: e }))
              }
              className="h-10 bg-[#e7e7e7] w-[55%] rounded-md py-0 focus:border focus:border-secondary px-2"
            />
          )}
        </View>
        <View className="flex flex-row justify-between w-full px-3 py-5 items-center border-b-[0.5px] border-[#b1b1b1]">
          <Text className="font-sbold text-[#828282]">Email</Text>
          {!edit ? (
            <Text className="font-sbold text-xs">{profile?.email}</Text>
          ) : (
            <TextInput
              value={profile?.email}
              onChangeText={(e) =>
                setProfile((prev) => ({ ...prev, email: e }))
              }
              className="h-10 bg-[#e7e7e7] w-[55%] rounded-md py-0 focus:border focus:border-secondary px-2"
            />
          )}
        </View>
        <View className="flex flex-row justify-between w-full px-3 py-5 items-center border-b-[0.5px] border-[#b1b1b1]">
          <Text className="font-sbold text-[#828282]">Phone number</Text>
          {!edit ? (
            <Text className="font-sbold text-xs">{profile?.phoneNumber}</Text>
          ) : (
            <TextInput
              value={profile?.phoneNumber}
              onChangeText={(e) =>
                setProfile((prev) => ({ ...prev, phoneNumber: e }))
              }
              className="h-10 bg-[#e7e7e7] w-[55%] rounded-md py-0 focus:border focus:border-secondary px-2"
            />
          )}
        </View>
        <TouchableHighlight
          onPress={() => {
            setEdit((prev) => !prev);
            edit && handleUpdateProfile();
          }}
          underlayColor={"#3D0659"}
          className="h-14 flex justify-center items-center rounded-lg bg-[#61088E] mt-5"
        >
          <Text className="text-sm font-sbold text-primary text-center">
            {!edit ? "Edit Profile" : "Save"}
          </Text>
        </TouchableHighlight>

        <View className="flex flex-row">
          <Text className="text-sm font-sLight mt-3">
            For support, contact{" "}
            <Link className="text-secondary" href="justruppies@gmail.com">
              justruppies@gmail.com
            </Link>
          </Text>
        </View>

        <TouchableHighlight
          underlayColor={"#ff6565"}
          onPress={handleLogout}
          className="bg-[#ffc6c6] h-14 flex items-center justify-center rounded-lg mt-10"
        >
          <Text className="text-base text-[#751414]">Log out</Text>
        </TouchableHighlight>
      </View>
      <FlashMessage position="top" />
    </ScrollView>
  );
};

export default Settings;
