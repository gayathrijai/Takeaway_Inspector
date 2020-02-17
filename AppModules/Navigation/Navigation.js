import React, { Component } from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import QRCode from "../Views/QRCode";
import StartInspection from "../Views/StartInspection";
import FinishInspection from "../Views/FinishInspection";
import LocationPermission from "../Views/LocationsPermissions";
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
},
{
  initialRouteName:'QRCode'
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
