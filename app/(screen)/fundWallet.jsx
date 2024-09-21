import { View, Text, Pressable } from "react-native";
import React from "react";
import WalletCard from "../../pageComponents/walletCard";
import Header from "../../pageComponents/header";

const FundWallet = () => {
  return (
    <View className="h-full">
      <View className="px-4">
        <Header />
        <Text>Fund Your Wallet</Text>
        <WalletCard />
        <View className="mt-5">
          <Text className="text-sm text-center">
            To fund your wallet please transfer to this account
          </Text>
          <View className="p-3 w-full rounded-lg bg-[#EDD7ED] mt-2">
            <Text className="text-[#61088E] text-base border-b border-b-secondary px-2">
              Lotus Bank
            </Text>
            <View className="px-2 pt-2">
              <Text className="text-[#61088E] text-[10px]">
                Ref: WRN123456789VAN
              </Text>
              <Text className="text-[#61088E] text-base">123456789</Text>
            </View>
            <Text className="text-[#61088E] text-xs px-2 pt-3">
              After transfering, please confirm your transfer
            </Text>
          </View>
        </View>

        <View className="mt-3 flex flex-row justify-between">
          <Pressable className="py-5 rounded-lg bg-[#EDD7ED] flex-grow px-4">
            <Text className="text-secondary">I have made transfer</Text>
          </Pressable>
          <Pressable className="py-5 rounded-lg bg-[#EDD7ED] border-secondary px-4 ml-4">
            <Text className="text-xs text-secondary">Support </Text>
          </Pressable>
        </View>
      </View>

      <View className="absolute bottom-0 w-full px-4 mb-10">
        <Pressable className="w-full border-2 border-secondary py-4 rounded-lg flex items-center mb-2">
          <Text className="text-secondary">View Recent Transactions</Text>
        </Pressable>
        <Text className="w-full text-center text-[10px]">
          Terms & Conditions | Privacy Policy | © 2024 Air Ruppies.
        </Text>
      </View>
    </View>
  );
};

export default FundWallet;
