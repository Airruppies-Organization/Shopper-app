import { View, Text, Pressable } from "react-native";
// import Pattern from "../assets/icons/pattern";
import Add from "../assets/icons/add";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import CurlyArrow from "../assets/illustration/curly_arrow";
import DotGrid from "../assets/illustration/dot_grid";

const Banner = () => {
  const { currVirtAccount, setCurrVirtAccount, fundHandler } =
    useContext(AppContext);

  return (
    <View className="relative w-full h-32 rounded-xl bg-[#1A0B1E] mt-12">
      <Image
        className="absolute bottom-0 left-5"
        source={require("../assets/images/banner_img.png")}
        style={{ width: 160, height: 160 }}
      />

      <View className="absolute top-0 right-5 h-full py-4">
        <View>
          <Text className="text-text-white text-lg font-sbold">SAVE TIME</Text>
          <Text className="text-text-white text-lg font-sbold">
            SHOP SMARTER
          </Text>
        </View>

        <CurlyArrow className="scale-75 mt-2" />
        <DotGrid className="absolute -top-5 " />
      </View>
    </View>
  );
};

export default Banner;
