import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { Link } from "expo-router";
import React, { useState, useContext } from "react";
import { AppContext } from "../context/context";

const OrderSession = ({
  order_id,
  code,
  total,
  status,
  timestamp,
  ref_id,
  paymentMethod,
}) => {
  const { setCurrOrder, orders, currOrder } = useContext(AppContext);

  const detailHandler = () => {
    setCurrOrder(() => orders.find((item) => item.order_id === order_id));

    router.push(`/(screen)/orders/${order_id}`);
  };

  return (
    <View className="w-full border-b border-b-black h-20 px-2 py-2 flex flex-row justify-between">
      <View className="flex flex-row justify-between w-full">
        <View className="flex flex-col justify-between w-32">
          <Text className="text-xs font-sansation font-sLight leading-[13px]">
            {order_id}
          </Text>

          <View className="leading-snug">
            <Text className="text-xl text-secondary text-neutral-300 font-sBold">
              {code}
            </Text>
            <Text className="text-xs font-semibold">N {total}</Text>
          </View>
        </View>
        <View className="flex justify-between items-end">
          <Text
            className={`text-xs ${
              status === "Successful" ? "text-[#2b9821]" : "text-[#cf2323]"
            }`}
          >
            {status}
          </Text>
          <Pressable
            onPress={() => detailHandler()}
            className="px-2 py-1 bg-[#ffdefc] bg-opacity-20"
          >
            <Text className="text-secondary text-xs">View details</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OrderSession;
