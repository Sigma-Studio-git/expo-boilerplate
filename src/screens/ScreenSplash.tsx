import React from "react";
import SplashScreen from "expo-splash-screen";
import { View, Text, StyleSheet } from "react-native";

interface Props {}
interface States {
  appReady: boolean;
}

export default class ScreenSplash extends React.Component<Props, States> {
  state = {
    appReady: false,
  };

  async componentDidMount() {
    await SplashScreen.preventAutoHideAsync();
    this.prepareResource();
  }

  render() {
    if (!this.state.appReady)
      return (
        <View style={styles.container}>
          <Text>Hi Splash!</Text>
        </View>
      );

    //TODO : navigate
  }

  prepareResource = async () => {
    //Prepare your resourses

    setTimeout(() => {
      this.setState({ appReady: true });
    }, 2000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
