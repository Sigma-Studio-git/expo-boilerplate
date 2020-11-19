import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "mobx-react";
import RootStore from "./src/stores/RootStore";
import RootNavigation from "./src/navigations/RootNavigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={new RootStore()}>
        <StatusBar style="auto" />
        <RootNavigation />
      </Provider>
    );
  }
}
