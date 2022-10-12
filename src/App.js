import React from "react";
import { Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { onBordingScreen } from "./screens";
import { useNavigation } from "@react-navigation/native";
import BottomTabs from "./navigator/BottomTabs";

const Stack = createNativeStackNavigator();

const AppIndex = () => {
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
        options={{ headerShown: false }}
        name="OnBordingScreen"
        component={onBordingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomStack"
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
};

export default AppIndex;
