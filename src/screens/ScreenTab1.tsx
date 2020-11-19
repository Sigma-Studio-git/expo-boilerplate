import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}

export default class ScreenTab1 extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Tab1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
