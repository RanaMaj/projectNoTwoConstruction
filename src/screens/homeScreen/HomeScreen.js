import { View, Text, Pressable } from "react-native";
import React from "react";
import HomeComponent from "../../components/homeComponent/HomeComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import NavigationComponent from "../../components/navigationComponent/NavigationComponent";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { navigate, goBack, canGoBack } = useNavigation();
  return (
    <>
      <HeaderComponent />
      <HomeComponent />
      {/* <NavigationComponent /> */}
    </>
  );
};

export default HomeScreen;
