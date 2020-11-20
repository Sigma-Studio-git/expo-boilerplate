import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

interface Props {}
interface States {
  appReady: boolean;
}

export default class ScreenSplash extends React.Component<Props, States> {
  state = {
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
      this.props.navigation.navigate("Tab");
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
