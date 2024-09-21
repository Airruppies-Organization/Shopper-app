import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import React, { useRef, useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/context";
import { useRouter } from "expo-router";

const Verify = () => {
  const { session, setSession, payType } = useContext(AppContext);
  const inputRef = useRef(null);
  const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "<"];
  const [pin, setPin] = useState("");
  const router = useRouter();

  const PIN = "2468";

  useEffect(() => {
    const check = () => {
      if (PIN === pin) {
        setPin("");
        payType("Wallet");
      }
    };
    check();
  }, [pin]);

  const handleClick = (num) => {
    if (num === "<") {
      setPin((prev) => prev.slice(0, -1));
    } else if (pin.length < 4 && num !== "") {
      setPin((prev) => prev + num);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className={`h-[60px] w-[60px] rounded-full bg-[#e0e0e0] flex items-center justify-center mx-4 ${
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
      <Text className="font-sbold ml-4 text-2xl">Verify transaction</Text>
      <View className="absolute bottom-0 pb-20 px-3">
        <View className="w-full flex items-center">
          <Text className="text-lg">Enter your PIN</Text>
          <TextInput
            ref={inputRef}
            onFocus={() => Keyboard.dismiss()}
            showSoftInputOnFocus={false}
            secureTextEntry={true}
            value={pin}
            className="w-full border-b-black border-b-[0.5px] text-6xl leading-tight mb-8 text-center"
            style={{ letterSpacing: 35 }}
          />
        </View>

        <FlatList
          data={keypad}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
          columnWrapperStyle={styles.columnWrapper}
        />

        {/* <Button title="Summary page" onPress={() => router.push("summary")} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
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

export default Verify;
