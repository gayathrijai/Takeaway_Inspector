import React, { Component } from "react";
import { Text, View, Alert, Button } from "react-native";
import { PermissionsAndroid } from "react-native";

export default class StartInspection extends Component {
  onInspect = async () => {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted) {
        console.log("Location Permission Granted.");
      } else {
        console.log("Location Permission Not Granted");
        Alert.alert(
          "App requires location permissions, go to Setting and enable permissions!"
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };
  render() {
    return (
      <View>
        <Button title="Start Inspect" onPress={() => this.onInspect()} />
      </View>
    );
  }
}
