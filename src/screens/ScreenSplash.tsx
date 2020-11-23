import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationWithStoreProps } from "../constants/types";
import * as SplashScreen from "expo-splash-screen";
import NavigationService from "../navigations/NavigationService";

interface State {
  appReady: boolean;
}

export default class ScreenSplash extends React.Component<
  StackNavigationWithStoreProps<"Splash">,
  State
> {
  state: State = {
    appReady: false,
  };

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (err) {
      console.error(err);
    }
    this.prepareResource();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi Splash!</Text>
      </View>
    );
  }

  prepareResource = async () => {
    //Prepare your resourses
    this.setState({ appReady: true }, async () => {
      await SplashScreen.hideAsync();
      NavigationService.replace(this.props.navigation, "Tab");
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
