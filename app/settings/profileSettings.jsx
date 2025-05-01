import {
  View,
  Text,
  Pressable,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";

const ProfileSettings = () => {
  const { profile, setProfile, handleUpdateProfile } = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  return (
    <View className="bg-primary h-full px-5 pt-10">
      <Text className="text-2xl font-sbold mb-5">Profile Settings</Text>
      <View className="w-full flex flex-row justify-end px-3 mb-3">
        <Pressable onPress={() => setEdit(true)}>
          <Text className="font-sbold text-secondary">Edit Profile</Text>
        </Pressable>
      </View>
      <View className="flex flex-row justify-between w-full px-3 py-3 items-center border-b-[0.5px] border-[#b1b1b1]">
        <Text className="font-sbold text-[#828282]">User ID</Text>
        <Text className="font-sbold text-xs">{profile?._id}</Text>
      </View>
      <View className="flex flex-row justify-between w-full px-3 py-3 items-center border-b-[0.5px] border-[#b1b1b1]">
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
      <View className="flex flex-row justify-between w-full px-3 py-3 items-center border-b-[0.5px] border-[#b1b1b1]">
        <Text className="font-sbold text-[#828282]">Email</Text>
        {!edit ? (
          <Text className="font-sbold text-xs">{profile?.email}</Text>
        ) : (
          <TextInput
            value={profile?.email}
            onChangeText={(e) => setProfile((prev) => ({ ...prev, email: e }))}
            className="h-10 bg-[#e7e7e7] w-[55%] rounded-md py-0 focus:border focus:border-secondary px-2"
          />
        )}
      </View>
      <View className="flex flex-row justify-between w-full px-3 py-3 items-center border-b-[0.5px] border-[#b1b1b1]">
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
      {edit && (
        <TouchableHighlight
          onPress={() => {
            setEdit(false);
            console.log(edit);
            edit && handleUpdateProfile();
          }}
          underlayColor={"#3D0659"}
          className="h-14 flex justify-center items-center rounded-lg bg-[#61088E] mt-5"
        >
          <Text className="text-sm font-sbold text-primary text-center">
            Save
          </Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default ProfileSettings;
