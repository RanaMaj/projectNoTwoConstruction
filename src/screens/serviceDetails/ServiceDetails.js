import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ServiceDetails = () => {
  const { params } = useRoute();
  const { item } = params;
  return (
    <View>
      <Text>{item.subTitle}</Text>
      <Image source={item.iconImage} />
    </View>
  );
};

export default ServiceDetails;
