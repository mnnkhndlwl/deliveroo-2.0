import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./FeaturedCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row justify-between items-center px-4">
        <Text className="font-bold text-base uppercase">
          {title}
          <ArrowRightIcon color={"#00CCBB"} />
        </Text>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <FeaturedCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          address="chandni chowk"
          title="yo sushi"
          dishes={[]}
          rating={4.5}
          description="for japenese food"
          long={20}
          lat={0}
          genre="japanese"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
