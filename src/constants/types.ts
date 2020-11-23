import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { GestureResponderEvent } from "react-native";
import RootStore from "../stores/RootStore";

export type ButtonListener = (event: GestureResponderEvent) => void;

export type RootStackParams = {
  Splash: undefined;
  Tab: undefined;
};
export type TabParams = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
  Tab4: undefined;
};

export interface StackNavigationProps<
  ScreenName extends keyof RootStackParams
> {
  route: RouteProp<RootStackParams, ScreenName>;
  navigation: StackNavigationProp<RootStackParams, ScreenName>;
}

export interface TabNavigationProps<ScreenName extends keyof TabParams> {
  route: RouteProp<TabParams, ScreenName>;
  navigation: BottomTabNavigationProp<TabParams, ScreenName>;
}

export interface TabNavigationWithStoreProps<ScreenName extends keyof TabParams>
  extends TabNavigationProps<ScreenName> {
  store: RootStore;
}

export interface StackNavigationWithStoreProps<
  ScreenName extends keyof RootStackParams
> extends StackNavigationProps<ScreenName> {
  store: RootStore;
}
