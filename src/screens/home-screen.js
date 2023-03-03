import { Text, View, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1 mb-2">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={25} color="#00CCBB" />
          </View>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>
      <View className="flex-row mx-4 items-center pb-2 space-x-2">
        <View className="flex-row space-x-2 bg-gray-200 px-2 py-2 rounded-full items-center flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100 flex-1">
          <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

// useLayoutEffect is a hook in React that works similarly to useEffect, but it fires synchronously after all DOM mutations.

// The difference between useEffect and useLayoutEffect is that useEffect fires after rendering, which means that it doesn't
// block the browser from painting
// the DOM. On the other hand, useLayoutEffect fires before rendering, which means that it
//  can block the browser from painting the DOM.s
