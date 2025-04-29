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
import { useLocalSearchParams } from "expo-router";
import FlashMessage from "react-native-flash-message";

const SetPin = () => {
  const { handleSetPin } = useContext(AppContext);
  const [values, setValues] = useState([null, null, null, null]);
  const [values2, setValues2] = useState([null, null, null, null]);
  //   const inputRef = useRef(null);
  const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "<"];

  const { source } = useLocalSearchParams();

  const inputs = useRef([]);

  const PIN = "2468";

  const handleClick = (item) => {
    const newValues = [...values];

    if (item === 0 || typeof item === "number") {
      // Find the first empty spot and insert the number
      const index = newValues.findIndex((v) => v === null);
      if (index !== -1) {
        newValues[index] = item;
        setValues(newValues);
        if (index < 3) {
          inputs.current[index + 1]?.focus(); // Move focus forward
        }
      }
    } else if (item === "<") {
      // Find the last filled index
      let index = newValues.findLastIndex((v) => v !== null);

      if (index >= 0) {
        newValues[index] = null; // Clear the last filled digit
        setValues(newValues);
        if (index > 0) {
          inputs.current[index - 1]?.focus(); // Move focus back
        }
      }
    }
  };

  const handleVerify = () => {
    handleSetPin(values.join(""));
    alert("PIN Setting Successful");
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
      <Text className="text-[#424242] text-xl">{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="bg-primary w-full h-full pt-20 relative">
      <View className="px-3">
        <Text className="font-sbold text-2xl">
          {source === "pinSetting" ? "Change " : source === "signup" && "Set "}
          Payment PIN
        </Text>
        <Text>This new pin should be kept secure</Text>
      </View>

      <View className="absolute bottom-0 pb-5 px-3">
        <View className="mb-16">
          <View className="w-full flex mb-3">
            <Text className="text-base font-sregular">
              Enter New Payment PIN
            </Text>
            <View className="flex flex-row space-x-3">
              {values.map((value, index) => (
                <TextInput
                  key={index}
                  ref={(el) => (inputs.current[index] = el)} // Assign each input to inputs.current
                  showSoftInputOnFocus={false}
                  secureTextEntry={true}
                  value={value !== null ? value.toString() : ""}
                  caretHidden={true}
                  className="w-12 h-12 border text-center border-[#c2c2c2] rounded-lg text-xl mb-2 bg-[#f7f7f7] focus:border-secondary focus:border-2 focus:drop-shadow-md focus:shadow-secondary"
                />
              ))}
            </View>
          </View>

          {/* <View className="w-full flex">
            <Text className="text-base font-sregular">
              Confirm New Payment PIN
            </Text>
            <View className="flex flex-row space-x-3">
              {values.map((value, index) => (
                <TextInput
                  key={index}
                  ref={(el) => (inputs.current[index] = el)} // Assign each input to inputs.current
                  showSoftInputOnFocus={false}
                  secureTextEntry={true}
                  value={value ? value.toString() : ""}
                  caretHidden={true}
                  className="w-12 h-12 border text-center border-[#c2c2c2] rounded-lg text-xl mb-2 bg-[#f7f7f7] focus:border-secondary focus:border-2 focus:drop-shadow-md focus:shadow-secondary"
                />
              ))}
            </View>
          </View> */}
        </View>

        <View className="my-5">
          <Pressable
            onPress={handleVerify}
            className="bg-secondary w-[85%] mx-auto h-12 rounded-full flex items-center justify-center"
          >
            <Text className="text-text-white">Confirm</Text>
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
      {/* <FlashMessage position="botttom" /> */}
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

export default SetPin;
