import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AboutScreen, ContactScreen } from "../screens";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeStack"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "الرئيسية",
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="phone"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "تواصل معنا",
        }}
        name="ContactScreen"
        component={ContactScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="infocirlce"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "من نحن",
        }}
        name="AboutScreen"
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
