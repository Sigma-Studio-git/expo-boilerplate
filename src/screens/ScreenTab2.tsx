import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}

export default class ScreenTab2 extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Tab2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
