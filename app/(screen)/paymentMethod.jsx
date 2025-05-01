import React, { useState, useContext } from "react";
import { View, Text, Pressable, TouchableHighlight } from "react-native";
import Cash from "../../assets/icons/cash";
import Transfer from "../../assets/icons/transfer";
import Card from "../../assets/icons/card";
import Cancel from "../../assets/icons/cancel";
import { useRouter } from "expo-router";
import Verify from "./verify";
import { AppContext } from "../../context/context";
import Dropdown from "../../assets/icons/dropdown";
import Mastercard from "../../assets/icons/mastercard";
import Visa from "../../assets/icons/visa";

const Slider = () => {
  const router = useRouter();
  const [verify, setVerify] = useState(false);
  const { cart, payType, paymentTypes } = useContext(AppContext);

  const total = cart.reduce((a, b) => a + b.price, 0);

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
    <View className="h-full w-full bg-primary absolute top-0 px-7 pt-10">
      {/* Payment Method */}
      <View className="w-full mt-4">
        <View>
          <View className="flex flex-row relative justify-center w-full">
            <Text className="text-base font-sbold">Checkout</Text>

            <Pressable className="absolute left-0 flex flex-row items-center">
              <Dropdown
                className="rotate-90"
                width={20}
                height={20}
                color={"#000000"}
              />
              <Text className="text-sm ">Back</Text>
            </Pressable>
          </View>

          <View className="my-10 flex flex-row items-start">
            <Text className="text-xs">Total price: </Text>
            <Text className="text-xs font-sbold text-secondary">N </Text>
            <Text
              style={{ lineHeight: 19 }}
              className="text-lg font-sbold text-secondary"
            >
              10,000
            </Text>
          </View>

          <View className="w-full flex flex-row justify-center">
            <Text className="font-sbold text-base">Payment Method</Text>
          </View>

          {/* <View className="w-full my-2 ">
            <Text className="text-xs">or pay online with card</Text>
          </View> */}

          <View className="w-full flex flex-row justify-center my-2 space-x-5">
            {paymentTypes.map((type, index) => (
              <TouchableHighlight
                key={index}
                underlayColor={"#DFDFDF"}
                onPress={() => payType(type)}
                className="w-20 h-24 flex items-center rounded-lg justify-between p-3 border-[2px] border-[#EFEFEF]"
              >
                <>
                  {type.paymentType === "Cash" && (
                    <Cash width={35} height={35} color="#61088E" />
                  )}
                  {type.paymentType === "Card" && (
                    <Card width={35} height={35} color="#61088E" />
                  )}
                  {type.paymentType === "Transfer" && (
                    <Transfer width={35} height={35} color="#61088E" />
                  )}
                  <Text className="text-secondary font-sbold">
                    {type.paymentType}
                  </Text>
                </>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </View>

      <View className="w-full my-2 flex items-center">
        <Text className="text-xs">or pay online with card</Text>
      </View>

      <View>
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
      </View>
    </View>
  );
};

export default Slider;
