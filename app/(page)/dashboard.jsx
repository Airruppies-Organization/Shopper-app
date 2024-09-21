import { View, Text, ScrollView } from "react-native";
import React from "react";
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

const Dashboard = () => {
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
        <Text>Hi Victor!</Text>
        <WalletCard />
        <View className="flex flex-row justify-between w-full mt-4">
          <Sub label="Find Stores" icon={<Store color="#61088E" />} />
          <Sub label="Order History" icon={<History color="#61088E" />} />
        </View>
        <View className="flex flex-row items-center">
          <View className="mr-5 w-16 h-14 flex flex-col justify-center items-center">
            <Contact className="stroke-[#61088E] text-2xl" />
            <Text className="text-[#61088E] text-xs mt-1s">Contact Us</Text>
          </View>
          <View>
            <Faq className="stroke-[#61088E] text-2xl" />
            <Text className="text-[#61088E] text-xs mt-1s">FAQs</Text>
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
    </ScrollView>
  );
};

export default Dashboard;
