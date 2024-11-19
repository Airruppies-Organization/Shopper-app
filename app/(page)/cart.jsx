import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import Product from "../../pageComponents/product";
import CartSub from "../../pageComponents/cartSub";
import { AppContext } from "../../context/context";

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);
  return (
    <ScrollView>
      <View className="h-full pt-16 relative bg-primary">
        <View className="px-5 pt-10">
          <Text className="text-3xl mb-5">View Cart</Text>
          <CartSub />
          <View className="mt-5">
            {cart?.map((item) => {
              return (
                <Product
                  id={item._id}
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
