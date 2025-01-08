import React, { useState, useContext } from "react";
import { Image } from "react-native";
import { View, Text, ScrollView, Pressable } from "react-native";
import { AppContext } from "../../../context/context";
import { useRouter } from "expo-router";

const FindStores = () => {
  const { merch, setCurrMerch, currMerch } = useContext(AppContext);
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

          <View className="mt-5 space-y-2">
            {merch?.map((item, index) => {
              return (
                <View
                  key={index}
                  className="border-b p-2 border-b-black w-full flex flex-row items-center justify-between"
                >
                  <View className="relative aspect-square h-14 w-14">
                    <Image
                      source={{
                        uri: item.logo,
                      }}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="cover"
                      alt={item.name}
                    />
                  </View>

                  <View className="w-[60%]">
                    <Text className="text-lg">{item.name}</Text>
                    <Text className="text-xs">{item.address}</Text>
                  </View>

                  <Pressable
                    className="h-10 w-20 flex items-center justify-center rounded-lg bg-secondary"
                    onPress={() => currMerchHandler(item)}
                  >
                    <Text className="text-text-white text-xs">Enter store</Text>
                  </Pressable>
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
