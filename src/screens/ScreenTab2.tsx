import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigationWithStoreProps } from "../constants/types";

export default class ScreenTab2 extends React.Component<
  TabNavigationWithStoreProps<"Tab2">,
  {}
> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
