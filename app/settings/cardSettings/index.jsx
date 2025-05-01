import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import Mastercard from "../../../assets/icons/mastercard";
import Visa from "../../../assets/icons/visa";
import { router } from "expo-router";

const CardSettings = () => {
  const cards = [
    {
      name: "Mastercard",
      number: "1234 **** **** 345",
      logo: <Mastercard />,
    },
    {
      name: "Visa",
      number: "1234 **** **** 345",
      logo: <Visa />,
    },
  ];
  return (
    <View className="bg-primary h-full px-5 pt-10">
      <Text className="text-2xl font-sbold mb-5">Card Settings</Text>

      <View>
        {cards.map((card, index) => {
          return (
            <View
              key={index}
              style={{ elevation: 20, shadowColor: "#424242" }}
              className="w-full flex flex-row justify-between my-2 p-3 rounded-xl h-24 space-x-3 bg-primary"
            >
              <View className="aspect-square h-full rounded-xl bg-[#F6F6F6] flex items-center justify-center">
                {card.logo}
              </View>
              <View className="flex flex-col justify-between py-2 h-full flex-grow">
                <Text className="font-sbold text-sm">{card.name}</Text>
                <Text className="font-sregular text-sm">{card.number}</Text>
              </View>
            </View>
          );
        })}
      </View>

      <TouchableHighlight
        underlayColor={"#3D0659"}
        onPress={() => router.push("/settings/cardSettings/addCard")}
        className="h-14 flex justify-center items-center rounded-lg bg-[#61088E] mt-5"
      >
        <Text className="text-primary font-sbold">Add Card</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CardSettings;
