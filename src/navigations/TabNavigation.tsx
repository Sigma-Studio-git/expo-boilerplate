import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TabParams } from "../constants/types";
import { ScreenTab1, ScreenTab2, ScreenTab3, ScreenTab4 } from "../screens";

const Tab = createBottomTabNavigator<TabParams>();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={ScreenTab1} />
        <Tab.Screen name="Tab2" component={ScreenTab2} />
        <Tab.Screen name="Tab3" component={ScreenTab3} />
        <Tab.Screen name="Tab4" component={ScreenTab4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
