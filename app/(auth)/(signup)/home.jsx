import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Social from "../../../components/social";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Google from "../../../assets/icons/google";
import Yahoo from "../../../assets/icons/yahoo";
import Outlook from "../../../assets/icons/microsoft-outlook";
import Apple from "../../../assets/icons/apple";

const Home = () => {
  return (
    <SafeAreaView edges={0}>
      <ScrollView>
        <View className="px-5 pt-14 pb-16 bg-primary">
          <Text className="text-3xl font-semibold">Welcome</Text>
          <Text className="text-xs w-[60%] mt-3">
            Scan items as you shop for a quick, hassle-free checkout
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/register")}
            className="mt-4 w-full flex items-center justify-center bg-secondary h-12 rounded-lg"
          >
            <Text className="text-text-white">Continue with Email</Text>
          </TouchableOpacity>

          <View className="my-2 h-8 flex flex-row w-full items-center">
            <View className="flex-grow h-0.25 border-b-[0.5px] border-[#636363] "></View>
            <Text className="mx-3 text-[#636363]">or continue with</Text>
            <View className="flex-grow h-0.25 border-b-[0.5px] border-[#636363] "></View>
          </View>

          <View className="h-64 flex w-full items-center justify-between">
            <Social icon={<Google />} label="Continue with Google" />
            <Social icon={<Yahoo />} label="Continue with Yahoo!" />
            <Social icon={<Outlook />} label="Continue with Outlook" />
            <Social icon={<Apple />} label="Continue with iPhone" />
          </View>

          <View className="my-2 h-8 flex flex-row w-full items-center">
            <View className="flex-grow h-0.25 border-b-[0.5px] border-[#636363] "></View>
            <Text className="mx-3 text-[#636363]">
              Already have an account?
            </Text>
            <View className="flex-grow h-0.25 border-b-[0.5px] border-[#636363] "></View>
          </View>

          <Pressable
            onPress={() => router.push("/(login)")}
            className="w-full border-[0.5px] border-black flex justify-center items-center h-12 rounded-lg"
          >
            <Text className="text-text-black">Login here</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
