import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
  Pressable,
} from "react-native";
import React, { useRef, useState, useEffect, useContext } from "react";
import { AppContext } from "../../../context/context";
import { useRouter } from "expo-router";

const PinSetting = () => {
  const { session, setSession, payType } = useContext(AppContext);
  const inputRef = useRef(null);
  const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "<"];
  const [pin, setPin] = useState("");
  const router = useRouter();

  const PIN = "2468";

  const handleClick = (num) => {
    if (num === "<") {
      setPin((prev) => prev.slice(0, -1));
    } else if (pin.length < 4 && num !== "") {
      setPin((prev) => prev + num);
    }
  };

  const handleVerify = () => {
    if (pin === PIN) {
      router.push("paymentSettings/setPin?source=pinSetting");
      console.log("PIN verified");
    } else {
      alert("Invalid PIN");
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className={` flex-1 rounded-md bg-[#eeeeee] h-11 flex items-center justify-center mx-1 ${
        item === "" && "opacity-0"
      }`}
      onPress={() => {
        handleClick(item);
      }}
      disabled={item === ""}
    >
      <Text className="text-[#000000] text-xl">{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="bg-primary h-full pt-20">
      <Text className="font-sbold text-2xl px-3">Verify Payment PIN</Text>
      <Text className="text-xs px-3">Enter your previous payment PIN.</Text>
      <View className="absolute bottom-0 pb-5 px-3">
        <View className="w-full flex items-center">
          <Text className="text-lg ">Enter your current PIN</Text>

          <TextInput
            ref={inputRef}
            onFocus={() => Keyboard.dismiss()}
            showSoftInputOnFocus={false}
            secureTextEntry={true}
            value={pin}
            className="w-full text-xl leading-tight mb-2 text-center"
            style={{ letterSpacing: 35 }}
          />
        </View>

        <View className="mb-10">
          <Pressable
            onPress={handleVerify}
            className="bg-secondary w-full h-12 rounded-md flex items-center justify-center"
          >
            <Text className="text-text-white">Verify</Text>
          </Pressable>
          <Pressable className="flex flex-row justify-end mt-2 px-4">
            <Text className="text-secondary">Forgot PIN?</Text>
          </Pressable>
        </View>

        <FlatList
          data={keypad}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
  },
  columnWrapper: {
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  keyText: {
    color: "#000", // Adjust the text color as needed
    fontSize: 24,
  },
});

export default PinSetting;
