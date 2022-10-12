import React from "react";
import {  Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { onBordingScreen } from "../screens";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { goBack, canGoBack } = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="OnBordingScreen"
      screenOptions={{
        headerLeft: () =>
          canGoBack() && (
            <Pressable onPress={goBack}>
              <FontAwesome5
                name="long-arrow-alt-left"
                size={24}
                color="black"
              />
            </Pressable>
          ),
      }}
    >
      <Stack.Screen
        options={{ headerShown: false, animation: "slide_from_right" }}
        name="OnBordingScreen"
        component={onBordingScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          animation: "slide_from_right",
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
        name="BottomStack"
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
