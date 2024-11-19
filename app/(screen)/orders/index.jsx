import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import OrderSession from "../../../pageComponents/orderSession";
import { AppContext } from "../../../context/context";

const Orders = () => {
  const { orders, setOrders } = useContext(AppContext);

  return (
    <ScrollView>
      <View className="h-full pt-16 relative bg-primary">
        <View className="px-5 pt-10">
          <Text className="text-3xl mb-5">Order history</Text>

          <View className="mt-5">
            {orders?.map((item, index) => {
              return (
                <OrderSession
                  key={index}
                  id={item.id}
                  code={item.code}
                  status={item.status}
                  timestamp={item.timestamp}
                  ref_id={item.ref_id}
                  paymentMethod={item.method}
                  total={item.total}
                />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Orders;
