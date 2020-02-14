import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { requestLocationPermission } from "../Modules/Permissions/LocationPermission";
import { fetchAPI, responseData } from "../Modules/API/NetworkRequest";

export default class LocationsPermissions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null
    };
  }

  onStart = () => {
    requestLocationPermission();
  };

  render() {
    fetchAPI();
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.onStart();
            navigation.navigate("Inspection");
          }}
        >
          <Text style={styles.welcome}>Start Here</Text>
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
