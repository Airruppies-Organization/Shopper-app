import { View, Text, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { Image } from "react-native";
import Add from "../assets/icons/add";
import Minus from "../assets/icons/minus";
import Delete from "../assets/icons/delete";
import { AppContext } from "../context/context";

const Product = ({ img, name, price, quantity, id }) => {
  const { cart, setCart, cartDelete, updateCart } = useContext(AppContext);

  return (
    <View className="w-full border-b border-b-black h-20 px-2 py-2 flex flex-row justify-between">
      <View className="flex flex-row">
        {/* IMAGE */}
        {/* <View className="w-14 h-full relative mr-4">
          <Image
            source={img}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
            alt={name}
          />
        </View> */}

        {/* DETAIL */}
        <View className="flex flex-col justify-between w-32">
          <Text className="text-xs font-sansation font-semibold leading-[13px]">
            {name}
          </Text>

          <View className="leading-snug">
            <Text className="text-[10px] text-neutral-300 font-sLight">
              {id ? id : "4F3-32F"}
            </Text>
            <Text className="text-xs font-semibold">N {price}</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row items-center">
        <View className="flex flex-row items-center h-[40%] mr-3">
          <Pressable
            onPress={() => updateCart(id, "increase")}
            id="plus"
            className="w-7 h-7 flex items-center justify-center bg-[#61088E] rounded-md"
          >
            <Add color="#ffffff" className="text-xs stroke-white" />
          </Pressable>
          <View className="w-9 h-9 flex items-center justify-center ">
            <Text>{quantity}</Text>
          </View>
          <Pressable
            onPress={() => updateCart(id, "decrease")}
            id="minus"
            className="w-7 h-7 flex items-center justify-center bg-[#61088E] rounded-md"
          >
            <Minus
              stroke="#ffffff"
              className="text-[8px] stroke-white stroke-1"
            />
          </Pressable>
        </View>
        <Pressable onPress={() => cartDelete(id)}>
          <Delete
            width={20}
            height={20}
            color="#000000"
            className="fill-black text-lg"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Product;
