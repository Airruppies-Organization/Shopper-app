import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import Input from "../../../components/input";

const AddCard = () => {
  return (
    <View className="bg-primary h-full px-5 pt-10">
      <Text className="text-2xl font-sbold mb-5">Add Card</Text>

      <View>
        <Input label="Cardholder name" />

        <Input label="Card number" />

        <View className="flex flex-row justify-between">
          <View className="w-[48%]">
            <Input type="date" label="Expiration date" />
          </View>

          <View className="w-[48%]">
            <Input label="CVV" />
          </View>
        </View>

        <TouchableHighlight
          underlayColor={"#3D0659"}
          className="h-14 flex justify-center items-center rounded-lg bg-[#61088E] mt-5"
        >
          <Text className="text-sm font-sbold text-primary text-center">
            Add Card
          </Text>
        </TouchableHighlight>
      </View>

      <View className="rounded-xl p-4 mx-auto w-full bg-[#f8ebff] mt-5">
        <Text className="text-[10px] underline font-bold">
          How safe is my information?
        </Text>

        <Text className="text-[10px]">
          We do <Text style={{ fontWeight: "bold" }}>not</Text> store your card
          details (like your card number or CVV) on Airruppies' servers.{"\n\n"}
          All sensitive information is transmitted{" "}
          <Text style={{ fontStyle: "italic" }}>securely</Text> to your bank for
          verification.{"\n\n"}
          Once confirmed, we simply receive authorization to proceed with the
          charge.
        </Text>
      </View>
    </View>
  );
};

export default AddCard;
