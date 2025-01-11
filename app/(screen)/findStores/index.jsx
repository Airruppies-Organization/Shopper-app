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

  // const calculateDistance = async () => {
  //   if (!origin || !destination) return;
  //   try {
  //     const response = await axios.get(
  //       `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.latitude},${origin.longitude}&destinations=${destination.latitude},${destination.longitude}&key=${process.env.GOOGLE_API_KEY}`
  //     );
  //     setDistance(response.data.rows[0].elements[0].distance.text);
  //   } catch (error) {
  //     console.error("Error fetching distance:", error);
  //   }
  // };

  return (
    <ScrollView>
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
                    className="border-b pb-2 border-b-black w-full flex flex-row items-end justify-between relative"
                  >
                    <View className="relative aspect-square h-16">
                      <Image
                        source={{
                          uri: item.logo,
                        }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                        alt={item.name}
                      />
                    </View>

                    <View className="w-[60%] flex-grow flex-shrink flex mx-2">
                      <Text className="text-lg font-semibold">{item.name}</Text>
                      <Text className="text-xs">{item.address}</Text>
                    </View>

                    <TouchableHighlight
                      className="h-10 w-20 flex items-center justify-center rounded-lg bg-secondary"
                      underlayColor={"#3D0659"}
                      onPress={() => currMerchHandler(item)}
                    >
                      <Text className="text-text-white text-xs">
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
