import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigationWithStoreProps } from "../constants/types";

export default class ScreenTab4 extends React.Component<
  TabNavigationWithStoreProps<"Tab4">,
  {}
> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab4</Text>
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
