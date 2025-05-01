import React, { useState, useContext } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { AppContext } from "../../../context/context";
import { useRouter } from "expo-router";
import Sub from "./sub";

const FindStores = () => {
  const { merch, setCurrMerch, currMerch } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const router = useRouter();

  const currMerchHandler = (loc) => {
    setCurrMerch(loc);

    router.push("/dashboard");
  };

  return (
    <ScrollView className="bg-primary">
      <View className="h-full pt-16 relative bg-primary">
        <View className="px-5 pt-10">
          <Text className="text-3xl mb-5">Find stores</Text>

          <Sub />
          <View className="mt-5 space-y-2 ">
            {merch &&
              merch.map((item, index) => {
                return (
                  <View
                    key={index}
                    className="border-b-[0.5px] border-b-[#858585] pb-2  w-full flex flex-row items-end justify-between relative"
                  >
                    <View className="relative aspect-square h-12">
                      <Image
                        source={{
                          uri: item.logo,
                        }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="contain"
                        alt={item.name}
                      />
                    </View>

                    <View className="w-[60%] flex-grow flex-shrink flex mx-2">
                      <Text className="text-sm font-sbold uppercase w-full text-[#767676]">
                        {item.name}
                      </Text>
                      <Text className="text-[10px] text-[#767676]">
                        {item.address}
                      </Text>
                    </View>

                    <TouchableHighlight
                      underlayColor={"#DE9CFF"}
                      onPress={() => currMerchHandler(item)}
                      className="bg-[#FFEDFF] rounded-md px-2 py-2 flex items-center justify-center my-auto"
                    >
                      <Text className="text-secondary text-xs">
                        Enter store
                      </Text>
                    </TouchableHighlight>
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
