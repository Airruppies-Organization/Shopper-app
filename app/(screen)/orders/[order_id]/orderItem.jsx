import { View, Text, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { AppContext } from "../../../../context/context";

const OrderItem = ({ img, name, price, quantity, id }) => {
  const { cart, setCart, handleClick, cartDelete } = useContext(AppContext);

  return (
    <View className="w-full border-b border-b-[#b5b5b5] h-18 px-2 py-2 flex flex-row justify-between">
      <View className="flex flex-row">
        {/* DETAIL */}
        <View className="flex flex-row justify-between w-full">
          <View className="flex justify-between">
            <Text className="text-[10px] text-neutral-300 font-sLight">
              {id}
            </Text>
            <View className="flex flex-row items-baseline">
              <Text className="text-base font-sregular font-semibold mr-1">
                {name}
              </Text>
              <Text className="text-xs text-[#696969] font-sregular font-semibold">
                X{quantity}
              </Text>
            </View>
          </View>

          <View className=" flex justify-center">
            <Text className="text-lg font-sregular">N {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
