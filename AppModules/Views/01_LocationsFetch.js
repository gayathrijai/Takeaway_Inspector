import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { findCoordinates } from "../Modules/Permissions/01_LocationPermission";
import { location } from "../Modules/Permissions/01_LocationPermission";

export default class LocationsPermissions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={findCoordinates}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {location}</Text>
          {console.log("Location in the View", location)}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
