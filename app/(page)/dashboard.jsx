import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import Header from "../../pageComponents/header";
import WalletCard from "../../pageComponents/walletCard";
import { Image } from "react-native";
import Sub from "../../pageComponents/sub";
import { SafeAreaView } from "react-native-safe-area-context";
import { Hometown, PrimeLine, Shoprite, Spar } from "../../assets/images/image";
import History from "../../assets/icons/history";
import Store from "../../assets/icons/store";
import Faq from "../../assets/icons/faq";
import Contact from "../../assets/icons/contact";
import FlashMessage from "react-native-flash-message";
import { AppContext } from "../../context/context";

const Dashboard = () => {
  const { profile, currMerch } = useContext(AppContext);

  const stores = [
    {
      img: Hometown,
      text: "Hometown Pharmacy",
    },
    {
      img: PrimeLine,
      text: "PrimeLine",
    },
    {
      img: Shoprite,
      text: "Shoprite",
    },
    {
      img: Spar,
      text: "SPAR",
    },
    {
      img: Shoprite,
      text: "Shoprite",
    },
    {
      img: Spar,
      text: "SPAR",
    },
  ];

  return (
    <ScrollView>
      <View className="bg-primary h-full px-4">
        <Header />
        <Text>Hi {profile?.username}!</Text>
        <WalletCard />
        <View className="flex flex-row justify-between w-full mt-4">
          <Sub
            label="Find Stores"
            icon={<Store color="#61088E" />}
            to="/findStores"
          />

          <Sub
            label="Order History"
            icon={<History color="#61088E" />}
            to="/orders"
          />
        </View>
        <View className="w-full flex flex-row justify-between items-center h-14 mt-3">
          <View className="flex flex-row items-center justify-between w-[48%]">
            <View className="w-[46%] h-14 flex flex-col justify-center items-center border-[2px] border-secondary rounded-lg">
              <Contact className="stroke-[#61088E] text-2xl" />
              <Text className="text-[#61088E] text-xs mt-1s">Contact Us</Text>
            </View>
            <View className="w-[46%] h-14 flex flex-col justify-center items-center border-[2px] border-secondary rounded-lg">
              <Faq className="stroke-[#61088E] text-2xl" />
              <Text className="text-[#61088E] text-xs mt-1s">FAQs</Text>
            </View>
          </View>

          <View
            className={`flex flex-row items-center justify-start space-x-2 border-[2px] px-3 ${
              Object.values(currMerch).length
                ? "border-secondary"
                : "border-[#f03a3a] bg-[#fee8e8]"
            } rounded-lg w-[48%] h-full`}
          >
            {Object.values(currMerch).length !== 0 && (
              <View className="relative aspect-square h-8">
                <Image
                  source={{
                    uri: currMerch.logo,
                  }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                  alt={currMerch.name}
                />
              </View>
            )}

            <Text
              className={` text-base ${
                Object.values(currMerch).length === 0
                  ? "text-[#f03a3a]"
                  : "text-[#61088E]"
              }`}
            >
              {currMerch.name || "NO MERCHANT"}
            </Text>
          </View>
        </View>

        <View className="my-3">
          <Text className="text-xl font-semibold">Recommended Stores</Text>
          {stores.map((store, index) => {
            return (
              <View
                className="w-full border-b border-b-black flex flex-row items-center h-16 px-3"
                key={index}
              >
                <View className="h-full w-14">
                  <Image
                    source={store.img}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                    alt={store.text}
                  />
                </View>
                <Text className="ml-3 text-sm">{store.text}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <FlashMessage position="top" />
    </ScrollView>
  );
};

export default Dashboard;
