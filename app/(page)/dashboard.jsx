import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import Header from "../../pageComponents/header";
import Banner from "../../pageComponents/banner";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Hometown, PrimeLine, Shoprite, Spar } from "../../assets/images/image";
import History from "../../assets/icons/history";
import Store from "../../assets/icons/store";
import Faq from "../../assets/icons/faq";
import Contact from "../../assets/icons/contact";
import FlashMessage from "react-native-flash-message";
import { AppContext } from "../../context/context";
import { useRouter } from "expo-router";
import Dropdown from "../../assets/icons/dropdown";

const Dashboard = () => {
  const { profile, currMerch } = useContext(AppContext);
  const router = useRouter();

  const transactions = [
    {
      date: "Today",
      img: Hometown,
      text: "Hometown Pharmacy",
      address: "123 Main St, Cityville",
    },
    {
      date: "Last month",
      img: PrimeLine,
      text: "PrimeLine",
      address: "456 Elm St, Townsville",
    },
    {
      date: "12th Jan 2025",
      img: Shoprite,
      text: "Shoprite Commerce",
      address: "789 Oak St, Villagetown",
    },
    {
      date: "23rd Dec 2024",
      img: Spar,
      text: "SPAR Supermarket",
      address: "101 Pine St, Hamletville",
    },
  ];

  return (
    <ScrollView>
      <View className="bg-primary h-full px-4">
        <Header />

        <View>
          <Text className="font-sbold text-lg -mb-1">
            Hi {profile?.username}!
          </Text>
          <Text className="text-xs font-sLight">
            Ready to scan and shop smarter?
          </Text>
        </View>

        <Banner />

        <View className="flex flex-row justify-between w-full mt-4">
          <Pressable
            className="w-[48%] p-2 h-20 bg-[#FEC9FC] rounded-lg"
            onPress={() => router.push("/findStores")}
            underlayColor="#DFDFDF"
          >
            <View className="h-full">
              <View className="w-5 h-5 flex items-center justify-center rounded-full bg-primary">
                {<Store color="#61088E" height="10" />}
              </View>

              <View className="gap-0">
                <Text className="font-sbold text-secondary text-lg -mb-1">
                  Find stores
                </Text>
                <Text className="font-sbold text-[#636363] text-[8px]">
                  33 stores currently open
                </Text>
              </View>
            </View>
          </Pressable>
          <View
            className={`w-[48%] p-2 h-20 ${
              Object.values(currMerch).length !== 0
                ? "bg-[#CFFEC8]"
                : "bg-[#e0e0e0] border border-[#bdbdbd]"
            } rounded-lg`}
            onPress={() => router.push(to)}
            underlayColor="#DFDFDF"
          >
            <View className="h-full">
              <Text
                className={`font-sbold  ${
                  Object.values(currMerch).length !== 0
                    ? "text-[#2E8A26]"
                    : "text-[#5e5e5e]"
                } text-sm`}
              >
                Current store
              </Text>

              {Object.values(currMerch).length !== 0 ? (
                <View className="flex flex-row items-center mt-1">
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
                  <View className="pl-3 -mt-2">
                    <Text
                      className={`${"text-sm"} font-sbold -mb-1 text-[#2E8A26]`}
                    >
                      {currMerch.name.length > 12
                        ? currMerch.name.slice(0, 12) + "..."
                        : currMerch.name}
                    </Text>
                    <View className="flex flex-wrap flex-row">
                      <Text className="text-[8px] font-bold text-[#767676]">
                        {currMerch.address.length > 20
                          ? currMerch.address.slice(0, 20) + "..."
                          : currMerch.address}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  <Text className="font-sbold text-lg -mb-1 text-[#5e5e5e]">
                    No Merchant
                  </Text>
                  <Text className="text-[8px]">Please enter a store</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View className="my-3">
          <View className="flex flex-row justify-between items-baseline mb-3 mr-5">
            <Text className="text-xl font-semibold">Transaction History</Text>
            <Pressable className="flex flex-row items-center border-b border-b-secondary">
              <Text className="text-xs font-sregular text-secondary -mb-1">
                Show all
              </Text>
              <Dropdown
                height={20}
                width={20}
                color="#61088E"
                className="-mb-1"
              />
            </Pressable>
          </View>

          {transactions.map((store, index) => {
            return (
              <View
                className="px-3 py-2 border-b-[0.5px] border-b-[#858585] flex flex-row "
                key={index}
              >
                <View className="flex-grow">
                  <Text className="text-secondary text-[10px]">
                    {store.date}
                  </Text>

                  <View className="flex flex-row items-center ">
                    <View className="h-12 aspect-square mr-4">
                      <Image
                        source={store.img}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="contain"
                        alt={store.text}
                      />
                    </View>

                    <View className="flex-1">
                      <Text className="text-sm uppercase w-full font-sbold text-[#767676]">
                        {store.text.length > 10
                          ? store.text.slice(0, 10) + "..."
                          : store.text}
                      </Text>
                      <Text className="text-[10px] text-[#767676]">
                        {store.address}
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="h-full ml-5 flex flex-row items-center">
                  <Pressable className="bg-[#FFEDFF] rounded-md px-2 py-2 flex items-center justify-center">
                    <Text className="text-secondary text-xs">See details</Text>
                  </Pressable>
                </View>
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
