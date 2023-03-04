import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { useNavigation } from "@react-navigation/native";

const FeaturedCard = ({
    id,
    imgUrl,
    address,
    title,
    dishes,
    rating,
    description,
    long,
    lat,
    genre
}) => {
  const navigation = useNavigation();
  return (
   <TouchableOpacity
    onPress={() =>
      navigation.navigate("Restaurant", {
        id,
        imgUrl,
        address,
        title,
        dishes,
        rating,
        description,
        long,
        lat,
        genre,
      })
    }
    className="bg-white mr-3 rounded-lg shadow">
     <Image 
      source={{
        uri:imgUrl,
      }}
      className="h-36 w-64 rounded-lg"
      />
       <View className="px-3 pb-4">
        <Text className="font-bold text-base pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color={"green"} opacity={0.5} size={20}/>
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color={"gray"} opacity={0.4} size={20}/>
            <Text className="text-xs text-gray-500 ">{address}</Text>
        </View>
      </View>
   </TouchableOpacity>
  )
}

export default FeaturedCard