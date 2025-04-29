import { View, Text, Pressable } from "react-native";
import Pattern from "../assets/icons/pattern";
import Add from "../assets/icons/add";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";
import { useRouter } from "expo-router";

const WalletCard = () => {
  const { currVirtAccount, setCurrVirtAccount, fundHandler } =
    useContext(AppContext);

  return (
    <View className="relative w-full h-36 rounded-lg bg-[#61088E] mt-3">
      <View className="absolute w-full h-full ">
        <Pattern stroke="#FFFFFF" opacity={0.3} width="100%" height="100%" />
      </View>
      <View className="p-4 flex flex-row justify-between">
        <View>
          <Text className="text-xl font-semibold text-primary">
            Wallet Balance
          </Text>
          <Text className="text-lg text-primary">N 14,500</Text>
        </View>

        <Pressable
          // onPress={() => router.push("fundWallet")}
          onPress={fundHandler}
          className="flex h-full justify-end items-center"
        >
          <View
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            className="relative rounded-full w-10 h-10 flex items-center justify-center"
          >
            <Add color="white" width={30} height={30} />
          </View>
          <Text className="text-text-white text-xs">Fund Wallet</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WalletCard;
