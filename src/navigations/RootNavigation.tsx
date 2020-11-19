import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { RootStackParams } from "../constants/types";
import { ScreenSplash } from "../screens";
import TabNavigation from "./TabNavigation";

const RootStack = createStackNavigator<RootStackParams>();
const screenOptions: StackNavigationOptions = {};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen name="Splash" component={ScreenSplash} />
        <RootStack.Screen name="Tab" component={TabNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
