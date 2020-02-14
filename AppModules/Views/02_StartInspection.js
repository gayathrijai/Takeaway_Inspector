import React, { Component } from "react";
import { Text, View, Alert, Button, Image, StyleSheet } from "react-native";
import { PermissionsAndroid } from "react-native";
import Location from "../Modules/LocationCheck/LocationCheck";
import { responseData } from "../Modules/API/NetworkRequest";
import { locationPermissionAlert } from "../Modules/Alert/LocationPermissionAlert";

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
        locationPermissionAlert();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    console.log(responseData);
    const response =
      responseData != null ? (
        // <FlatList
        //   data={responseData}
        //   keyExtractor={() => responseData.title}
        //   renderItem={item => {
        //     return (
        //       <View>
        //         <Text>{item.title}</Text>
        //         <Text>{item.lat}</Text>
        //       </View>
        //     );
        //   }}
        // />
        <View>
          <Text>{responseData.title}</Text>
          <Text>{responseData.owners_name}</Text>
          <Text></Text>
        </View>
      ) : (
        <Text>Not working</Text>
      );
    return (
      <View>
        {response}
        <Button
          title="Start Inspect"
          onPress={() => {
            this.onInspect();
            Location.findCoordinates();
          }}
        />
      </View>
    );
  }
}
