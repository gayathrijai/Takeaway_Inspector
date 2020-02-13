import React, { Component } from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import QRCode from "../Views/03_QRscan";
import StartInspection from "../Views/02_StartInspection";
import FinishInspection from "../Views/04_FinishInspection";
import LocationPermission from "../Views/01_LocationsFetch";
export class Navigation extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Location: LocationPermission,
  Inspection: StartInspection,
  Finish: FinishInspection,
  QRCode: QRCode
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
