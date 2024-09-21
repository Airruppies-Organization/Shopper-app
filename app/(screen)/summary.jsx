import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Spar } from "../../assets/images/image";
import Cancel from "../../assets/icons/cancel";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Summary = () => {
  const { cart, session } = useContext(AppContext);

  const total = cart.reduce((a, b) => a + b.price, 0);
  const message =
    session.method === "Transfer"
      ? "Meet the cashier to make your transfer"
      : session.method === "Cash"
      ? "Make your cash payment at the cashier point"
      : session.method === "Card"
      ? "Make POS payment at the cashier point"
      : "";

  const router = useRouter();
  return (
    <View className="bg-primary px-4 h-full w-full pt-20 flex items-center">
      <Cancel
        width={30}
        height={30}
        onPress={() => router.push("(page)/cart")}
        className="ml-2 absolute top-9 left-4"
      />
      <View className="flex items-center w-full">
        <Image source={Spar} width={50} height={50} />
        <View className="w-[50%] mt-2">
          <Text className="text-xs text-center leading-tight">
            Tejuosho Shopping Center, Ojuelegba Road, Yaba
          </Text>
        </View>
      </View>
      <View className="w-full flex items-center mt-5 border-b-[0.5px] border-b-black pb-3">
        <Text className="font-sbold text-xl mb-4">Your Code</Text>

        <Text
          style={{ letterSpacing: 17 }}
          className="font-sregular text-6xl text-secondary mb-4"
        >
          {session.code}
        </Text>
        <Text>Present this to the cashier</Text>
      </View>

      <View className="w-full flex pt-3 items-center">
        <Text className="text-lg font-sbold mb-4">Purchase Summary</Text>
        <View className="px-6">
          <View className="flex flex-row w-full justify-between mb-3">
            <Text className="text-lg font-sregular">Total Amount:</Text>
            <Text className="text-lg font-sbold">N {total}</Text>
          </View>
          <View className="flex flex-row w-full justify-between mb-3">
            <Text className="font-sregular">Status:</Text>
            {session.method === "Wallet" ? (
              <Text className="font-sregular text-[#0FBD00]">Paid</Text>
            ) : (
              <Text className="font-sregular text-[#e34242]">Not Paid</Text>
            )}
          </View>
          <View className="flex flex-row w-full justify-between mb-3">
            <Text className="font-sregular">Method:</Text>
            <Text className="font-sregular">{session.method}</Text>
          </View>
          <View className="flex flex-row w-full justify-between mb-3">
            <Text className="font-sregular">Total Items:</Text>
            <Text className="font-sregular">{cart.length}</Text>
          </View>
          <View className="flex flex-row w-full justify-between mb-3">
            <Text className="font-sregular">Transaction Ref: </Text>
            <Text className="font-sregular">WR2468</Text>
          </View>
          <View className="flex flex-row w-full justify-between mb-3">
            <Text className="font-sregular">Timestamp:</Text>
            <Text className="font-sregular">BR12843</Text>
          </View>
          <View className="flex flex-row w-full justify-between mb-3">
            <Text className="font-sregular">Date of Purchase:</Text>
            <Text className="font-sregular">08-19-2024</Text>
          </View>
        </View>
        <View className="w-full flex items-center">
          <Text className="text-secondary text-xs text-center">{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default Summary;
