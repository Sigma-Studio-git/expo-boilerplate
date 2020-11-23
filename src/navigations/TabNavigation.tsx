import React from "react";
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TabParams } from "../constants/types";
import { ScreenTab1, ScreenTab2, ScreenTab3, ScreenTab4 } from "../screens";
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { Color } from "../constants/color";

const Tab = createBottomTabNavigator<TabParams>();
const tabBarOptions: BottomTabBarOptions = { activeTintColor: Color.primary };

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Tab1"
        component={ScreenTab1}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={ScreenTab2}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={ScreenTab3}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="mail" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={ScreenTab4}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-more" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
