import { View, Text, Modal, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import { router } from "expo-router";
// import { AppContext } from "../context/context";
// import Cancel from "../assets/icons/cancel";
// import Add from "../assets/icons/add";
// import Minus from "../assets/icons/minus";

const EnterStore = () => {
  const { currMerch } = useContext(AppContext);

  //   const closeModal = () => {
  //     setPop(false);
  //     setScanned(false);
  //     setQty(1);
  //   };

  //   const update = (type) => {
  //     setQty((prevQty) => {
  //       const newQty =
  //         type === "minus" ? (prevQty > 1 ? prevQty - 1 : prevQty) : prevQty + 1;

  //       setProd((prevProd) => {
  //         const basePrice = prevProd.price / (prevQty || 1);
  //         const newPrice = basePrice * newQty;

  //         return { ...prevProd, price: Number(newPrice.toFixed(2)) };
  //       });

  //       return newQty;
  //     });
  //   };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      //   visible={pop}
      //   onRequestClose={closeModal}
    >
      <View className="w-full h-full flex justify-end bg-opacity-0">
        <View className="bg-primary w-full h-40 mx-auto">
          <View
            className="w-full flex flex-row justify-between items-center"
            style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 10 }}
          >
            <View className="w-[70%]">
              <Text className="text-xl font-semibold">{currMerch.name}</Text>
              <Text className="text-xs ">{currMerch.address}</Text>
            </View>
            <View className="w-20 h-10">
              <Image
                source={require("../../../assets/images/spar.png")} // Adjust the path as necessary
                style={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                alt="Spar"
              />
            </View>
          </View>
          <Pressable
            onPress={() => router.push("/(page)/dashboard")}
            style={{ paddingHorizontal: 20 }}
          >
            <View
              style={{
                height: 48, // Equivalent to h-12 (12 * 4)
                backgroundColor: "#61088E", // Replace with your "secondary" color
                borderRadius: 8, // Rounded corners
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "white", // Replace with your "text-white" color
                  fontWeight: "600", // font-semibold
                  fontSize: 18, // text-lg
                }}
              >
                Enter store
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default EnterStore;
