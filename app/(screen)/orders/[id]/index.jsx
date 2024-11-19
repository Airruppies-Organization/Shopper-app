// [order_id]/index.jsx

import React, { useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AppContext } from "../../../../context/context";
import OrderItem from "./orderItem";

const OrderDetails = () => {
  const { currOrder } = useContext(AppContext);
  const { id } = useLocalSearchParams();

  const dateObject = new Date(currOrder.createdAt);

  function getOrdinalDay(day) {
    if (day > 3 && day < 21) return day + "th"; // Special case for 11th-13th
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  // Extract date components
  const day = getOrdinalDay(dateObject.getUTCDate());
  const month = dateObject
    .toLocaleString("default", { month: "long" })
    .slice(0, 3); // Full month name
  const year = dateObject.getUTCFullYear();

  return (
    <ScrollView>
      <View className="relative min-h-screen px-3 pt-10">
        <View>
          <View className="flex flex-row justify-between mt-3 pb-3 px-5 border-[0.1px] items-center">
            <View>
              <Text className="text-xl font-sbold">#{id}</Text>
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
                <Text>{`${day} ${month}, ${year}`}</Text>
              </View>
              <View className="my-2 flex flex-row justify-between">
                <Text>Payment method:</Text>
                <Text>{currOrder.method}</Text>
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
              {currOrder.data?.map((item) => {
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
