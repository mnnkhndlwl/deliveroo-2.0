import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { useSelector } from "react-redux";
import * as Animatable from 'react-native-animatable'

const DeliveryScreen = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
    <SafeAreaView>
      <Text>DeliveryScreen</Text>
    </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen