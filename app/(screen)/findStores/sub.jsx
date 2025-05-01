import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Search from "../../../assets/icons/search";
import { useContext } from "react";
import { AppContext } from "../../../context/context";

const Sub = () => {
  const { storeSrch, setStoreSrch, merch, setMerch, handleSearchStore } =
    useContext(AppContext);

  const searchHandler = (e) => {
    setStoreSrch(e);
  };

  const submitHandler = () => {
    setMerch((prev) => {
      // const searched = prev.filter((store) => store.name.includes(storeSrch));
      // console.log(searched);
      // return prev;
    });
  };

  return (
    <View>
      <View className="border border-[#969696] w-full flex flex-row space-x-2 items-center h-10 rounded-md ">
        <View className="flex-grow">
          <TextInput
            value={storeSrch}
            onChangeText={searchHandler}
            onSubmitEditing={handleSearchStore}
            returnKeyType="search"
            placeholder="Find stores..."
            className="flex-grow text-sm h-full py-0 px-2 text-[#767676]"
          />
        </View>

        <Pressable
          onPress={handleSearchStore}
          className="bg-secondary h-full aspect-square rounded-r-sm flex items-center justify-center"
        >
          <Search
            width={25}
            height={25}
            className="stroke-primary fill-primary"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Sub;
