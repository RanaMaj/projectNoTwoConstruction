import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const image1 = require("../../../assets/navigation/nav2.png");
const image2 = require("../../../assets/navigation/nav1.png");
const image3 = require("../../../assets/navigation/nav3.png");

const onPress = () => {
  console.log("Pressable");
};

const NavigationComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image source={image1}></Image>
      </Pressable>
      <Pressable onPress={onPress}>
        <Image source={image2}></Image>
      </Pressable>
      <Pressable onPress={onPress}>
        <Image source={image3}></Image>
      </Pressable>
    </View>
  );
};

export default NavigationComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    elevation: 0.9,
  },
  image: {
    flex: 1,
    width: 28,
    height: 48,
    paddingTop: 2,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    zIndex: 13,
    position: "absolute",
    marginTop: 58,
  },
});
