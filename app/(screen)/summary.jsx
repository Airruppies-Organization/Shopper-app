import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Spar } from "../../assets/images/image";
import Cancel from "../../assets/icons/cancel";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Summary = () => {
  const { cart, session, currMerch } = useContext(AppContext);

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

  const isoString = session.createdAt; // Create a Date object
  const date = new Date(isoString); // Extract the date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-based
  const day = date.getDate().toString().padStart(2, "0"); // Format the date as a string (e.g., YYYY-MM-DD)
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <View className="bg-primary px-4 h-full w-full pt-20 flex items-center">
      <Pressable
        onPress={() => router.push("dashboard")}
        className="flex flex-row space-x-2 items-center ml-2 absolute top-9 left-4"
      >
        <Cancel width={20} height={20} color={"black"} className="" />
        <Text className="text-black font-semibold">Close</Text>
      </Pressable>

      <View className="flex items-center w-full">
        <Image
          source={{
            uri: currMerch.logo,
          }}
          width={50}
          height={50}
        />
        <View className="w-[50%] mt-2">
          <Text className="text-xs text-center leading-tight">
            Tejuosho Shopping Center, Ojuelegba Road, Yaba
          </Text>
        </View>
      </View>
      <View className="w-full flex items-center mt-5 border-b-[0.5px] border-b-black pb-3">
        <Text className="font-sbold text-xl mb-4">Your Code</Text>

        <Text
          style={{ letterSpacing: 5 }}
          className="font-sregular text-5xl text-secondary mb-4"
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
            <Text className="text-lg font-sbold">N {total.toFixed(2)}</Text>
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
            <Text className="font-sregular">{formattedDate}</Text>
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
