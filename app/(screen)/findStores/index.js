import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { AppContext } from "../../../context/context";

const FindStores = () => {
  const { merch, setCurrMerch, currMerch } = useContext(AppContext);
  return (
    <ScrollView>
      <View className="h-full pt-16 relative bg-primary">
        <View className="px-5 pt-10">
          <Text className="text-3xl mb-5">Find stores</Text>

          <View className="mt-5 space-y-2">
            {merch?.map((item, index) => {
              return (
                <View
                  key={index}
                  className="border-b p-2 border-b-black w-full"
                >
                  <Text className="text-lg">{item.name}</Text>
                  <Text className="text-xs">{item.address}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FindStores;
