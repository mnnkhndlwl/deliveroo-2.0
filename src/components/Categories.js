import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";
import CategoriesCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard imgUrl='https://qph.cf2.quoracdn.net/main-qimg-a934f02ccafae975aef2c8a04711058e-lq' title='shinchan'/>
      <CategoriesCard imgUrl='https://qph.cf2.quoracdn.net/main-qimg-a934f02ccafae975aef2c8a04711058e-lq' title='shinchan'/>
      <CategoriesCard imgUrl='https://qph.cf2.quoracdn.net/main-qimg-a934f02ccafae975aef2c8a04711058e-lq' title='shinchan'/>
      <CategoriesCard imgUrl='https://qph.cf2.quoracdn.net/main-qimg-a934f02ccafae975aef2c8a04711058e-lq' title='shinchan'/>
      <CategoriesCard imgUrl='https://qph.cf2.quoracdn.net/main-qimg-a934f02ccafae975aef2c8a04711058e-lq' title='shinchan'/>
      <CategoriesCard imgUrl='https://qph.cf2.quoracdn.net/main-qimg-a934f02ccafae975aef2c8a04711058e-lq' title='shinchan'/>
    </ScrollView>
  );
};

export default Categories;
