import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const CartSub = () => {
  const router = useRouter();
  return (
    <View className="flex flex-row w-full justify-between items-center">
      <Pressable
        onPress={() => router.push("(screen)/upSlider")}
        className="px-5 py-2 rounded-lg bg-[#61088E] "
      >
        <Text className="text-sm text-text-white font-semibold">Checkout</Text>
      </Pressable>
      <View className="flex items-center">
        <Text className="font-semibold text-sm">Sort by</Text>
        {/* <Dropdown className="stroke-black text-xs ml-2" /> */}
      </View>
    </View>
  );
};

export default CartSub;
