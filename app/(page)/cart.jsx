import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import Product from "../../pageComponents/product";
import CartSub from "../../pageComponents/cartSub";
import { AppContext } from "../../context/context";
import FlashMessage from "react-native-flash-message";
import EmptyCart from "../../assets/illustration/empty_cart";

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <View className="w-screen h-screen flex items-center justify-center pb-20 pl-10">
        <EmptyCart width={350} height={350} />
        <Text className="font-thin text-4xl pr-10 pt-8">Cart is Empty</Text>
        <Text className="font-light text-lg pr-10 text-secondary">
          Please scan some items
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="h-full pt-16 relative">
        <View className="px-5 pt-10">
          <Text className="text-3xl mb-5">View Cart</Text>
          <CartSub />
          <View className="mt-5">
            {cart?.map((item, index) => {
              return (
                <Product
                  id={item._id}
                  key={index}
                  name={item.product_name}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
          </View>
        </View>
      </View>
      <FlashMessage position="top" />
    </ScrollView>
  );
};

export default Cart;
