import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigationWithStoreProps } from "../constants/types";

export default class ScreenTab3 extends React.Component<
  TabNavigationWithStoreProps<"Tab3">,
  {}
> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab3</Text>
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
