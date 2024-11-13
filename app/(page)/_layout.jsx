import React from "react";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import Dashboard from "./dashboard";
import Scan from "./scan";
import Settings from "./settings";
import Cart from "./cart";
import Home from "../../assets/icons/home.jsx";
import ScanIcon from "../../assets/icons/scan.jsx";
import CartIcon from "../../assets/icons/cart.jsx";
import SettingsIcon from "../../assets/icons/settings.jsx";
import { useContext } from "react";
import { AppContext } from "../../context/context.js";

const PageLayout = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
          },
          pressColor: "#ffffff",
        }}
      >
        <Tabs.Screen
          name="dashboard"
          element={Dashboard}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <View className="p-2 bg-[#F1F1F1] rounded-full">
                <Home
                  height={20}
                  width={20}
                  color={focused ? "#61088E" : "#000000"}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                className="text-[10px] mt-1"
                style={{ color: focused ? "#61088E" : "#000000" }}
              >
                Dashboard
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="scan"
          element={Scan}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <View className="p-2 bg-[#F1F1F1] rounded-full">
                <ScanIcon
                  height={20}
                  width={20}
                  color={focused ? "#61088E" : "#000000"}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                className="text-[10px] mt-1"
                style={{ color: focused ? "#61088E" : "#000000" }}
              >
                Scan
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          element={Cart}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <View className="p-2 bg-[#F1F1F1] rounded-full relative">
                <CartIcon
                  height={20}
                  width={20}
                  color={focused ? "#61088E" : "#000000"}
                />
                {cart.length >= 1 && (
                  <View className="absolute right-[-5px] top-[-4px] h-4 w-4 flex items-center justify-center rounded-full bg-[#0EC423]">
                    <Text className="text-[11px] text-text-white">
                      {cart.length}
                    </Text>
                  </View>
                )}
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                className="text-[10px] mt-1"
                style={{ color: focused ? "#61088E" : "#000000" }}
              >
                Cart
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          element={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <View className="p-2 bg-[#F1F1F1] rounded-full">
                <SettingsIcon
                  height={20}
                  width={20}
                  color={focused ? "#61088E" : "#000000"}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                className="text-[10px] mt-1"
                style={{ color: focused ? "#61088E" : "#000000" }}
              >
                Settings
              </Text>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default PageLayout;
