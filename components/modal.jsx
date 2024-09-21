import { View, Text, Modal, Pressable } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Cancel from "../assets/icons/cancel";
import Add from "../assets/icons/add";
import Minus from "../assets/icons/minus";

const QtyModal = () => {
  const { pop, setPop, setScanned, prod, setProd, qty, setQty, cartAction } =
    useContext(AppContext);

  const closeModal = () => {
    setPop(false);
    setScanned(false);
    setQty(1);
  };

  const update = (type) => {
    setQty((prevQty) => {
      const newQty =
        type === "minus" ? (prevQty > 1 ? prevQty - 1 : prevQty) : prevQty + 1;

      setProd((prevProd) => {
        const basePrice = prevProd.price / (prevQty || 1);
        const newPrice = basePrice * newQty;

        return { ...prevProd, price: Number(newPrice.toFixed(2)) };
      });

      return newQty;
    });
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={pop}
      onRequestClose={closeModal}
    >
      <View className="w-full h-full flex justify-end bg-opacity-0">
        <View className="bg-primary w-full h-80 mx-auto p-4">
          <View className="flex flex-row w-full justify-between items-center mb-4">
            <Text className="text-lg">Specify Quantity</Text>
            <Pressable onPress={() => closeModal()}>
              <Cancel
                stroke="#000000"
                width={20}
                height={20}
                className="mr-4"
              />
            </Pressable>
          </View>

          <View className="w-full border-y-[0.5px] flex flex-row justify-between mb-4 py-2">
            <View className="h-full max-w-[60%] mr-3">
              <Text className="text-md">{prod.name}</Text>
              <Text className="text-xs font-thin">Black</Text>
              <Text className="text-md font-bold">N {prod.price}</Text>
            </View>

            <View className="h-full flex flex-row items-center">
              <Pressable
                onPress={() => update("minus")}
                className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center"
              >
                <Minus stroke="#ffffff" />
              </Pressable>
              <View className="h-8 w-8 flex items-center justify-center mx-2">
                <Text className="font-bold text-lg">{qty}</Text>
              </View>
              <Pressable
                onPress={() => update("add")}
                className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center"
              >
                <Add color="#ffffff" />
              </Pressable>
            </View>
          </View>
          <View>
            <Pressable
              onPress={() => cartAction("toView", prod.name)}
              className="h-14 w-full rounded-lg mb-2 border-2 border-secondary flex items-center justify-center"
            >
              <Text className="text-secondary font-bold">View Cart</Text>
            </Pressable>
            <Pressable
              onPress={() => cartAction("toCart", prod.name)}
              className="h-14 w-full rounded-lg mb-4 bg-secondary flex items-center justify-center"
            >
              <Text className="text-text-white font-bold"> Add to Cart</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default QtyModal;
