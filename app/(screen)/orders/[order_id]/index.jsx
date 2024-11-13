// [order_id]/index.jsx

import React, { useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AppContext } from "../../../../context/context";
import OrderItem from "./orderItem";

const OrderDetails = () => {
  const { currOrder } = useContext(AppContext);
  const { order_id } = useLocalSearchParams();

  return (
    <ScrollView>
      <View className="relative min-h-screen px-3 pt-10">
        <View>
          <View className="flex flex-row justify-between mt-3 pb-3 px-5 border-[0.1px] items-center">
            <View>
              <Text className="text-xl font-sbold">#{order_id}</Text>
              <Text className="text-xs font-sregular">Order detail</Text>
            </View>

            <Text className="font-sbold text-xl">SPAR</Text>
          </View>
          <View className="flex items-center justify-center flex-grow mt-6">
            <Text className="text-5xl font-sregular text-secondary">
              {currOrder.code}
            </Text>
          </View>

          <View className="flex flex-row justify-between h-40 py-4">
            <View className="w-full px-10 flex justify-between">
              <View className="my-2 flex flex-row justify-between">
                <Text>Created at:</Text>
                <Text>{currOrder.timestamp}</Text>
              </View>
              <View className="my-2 flex flex-row justify-between">
                <Text>Payment method:</Text>
                <Text>{currOrder.paymentMethod}</Text>
              </View>
              <View className="my-2 flex flex-row justify-between">
                <Text>Status:</Text>
                <Text
                  className={` ${
                    currOrder.status === "Successful"
                      ? "text-[#2b9821]"
                      : "text-[#cf2323]"
                  }`}
                >
                  {currOrder.status}
                </Text>
              </View>
              <View className="my-2 flex flex-row justify-between">
                <Text>Total amount:</Text>
                <Text className="font-bold">N{currOrder.total}</Text>
              </View>
            </View>
          </View>

          <View className="px-3 mt-2">
            <View className="border-b border-b-[#acacac]">
              <Text className="text-xl font-sregular">Order items</Text>
            </View>
            <View>
              {currOrder.items?.map((item) => {
                return (
                  <OrderItem
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.id}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetails;
