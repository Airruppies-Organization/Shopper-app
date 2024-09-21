import React, { useState, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import Cash from "../../assets/icons/cash";
import Transfer from "../../assets/icons/transfer";
import Card from "../../assets/icons/card";
import Cancel from "../../assets/icons/cancel";
import { useRouter } from "expo-router";
import Verify from "../(screen)/verify";
import { AppContext } from "../../context/context";

const Slider = () => {
  const router = useRouter();
  const [verify, setVerify] = useState(false);
  const { cart, payType } = useContext(AppContext);

  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <View className="h-full w-full bg-primary absolute top-0 pt-20 px-4">
      <Cancel
        width={30}
        height={30}
        onPress={() => router.push("(page)/cart")}
        className="ml-2"
      />

      {/* Payment Method */}
      <View className="w-full mt-4">
        <View className="border-b-[0.5px] flex items-center">
          <Text className="text-lg">Payment Method</Text>
          <View className="w-full flex flex-row justify-center my-2">
            <Pressable
              onPress={() => payType("Cash")}
              className="w-24 h-14 flex justify-center items-center rounded-lg "
            >
              <Cash width={35} height={35} color="#61088E" />
              <Text className="text-secondary">Cash</Text>
            </Pressable>
            <Pressable
              onPress={() => payType("Transfer")}
              className="w-24 h-14 flex items-center rounded-lg justify-center "
            >
              <Transfer width={35} height={35} color="#61088E" />
              <Text className="text-secondary">Transfer</Text>
            </Pressable>
            <Pressable
              onPress={() => payType("Card")}
              className="w-24 h-14 flex items-center rounded-lg justify-center "
            >
              <Card width={35} height={35} color="#61088E" />
              <Text className="text-secondary">POS</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Summary */}
      <View className="px-6 pt-3">
        <Text className="font-sbold">From Wallet</Text>
        <View className="w-full flex flex-row justify-between my-2">
          <Text className="text-[#565656] font-sregular">Wallet Balance</Text>
          <Text className="text-[#565656] font-sregular">N14,500</Text>
        </View>
        <View className="w-full flex flex-row justify-between mb-2">
          <Text className="text-[#565656] font-sregular">Total Cost</Text>
          <Text className="text-[#565656] font-sregular">N{total}</Text>
        </View>
        {total > 14500 && (
          <Text className="text-[10px] text-[#A30D11] text-center">
            Insufficient funds please fund you wallet Immediately for quicker
            checkout at cashier point
          </Text>
        )}
      </View>

      {/* Actions */}
      <View className="w-full mt-3">
        <View className="w-full flex items-center justify-center h-14 rounded-lg border-2 border-secondary mb-3">
          <Text className=" text-secondary font-sbold">Fund Wallet</Text>
        </View>
        <Pressable
          onPress={() => router.push("(screen)/verify")}
          className="w-full flex items-center justify-center h-14 rounded-lg bg-secondary"
        >
          <Text className="text-text-white">Pay from Wallet</Text>
        </Pressable>
      </View>

      {verify && <Verify />}
    </View>
  );
};

export default Slider;
