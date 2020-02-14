import React, { Component } from "react";
import { Text, View, Alert, Button } from "react-native";
import { PermissionsAndroid } from "react-native";
import Location from "../Modules/LocationCheck/LocationCheck";
import { responseData } from "../Modules/API/NetworkRequest";
import { FlatList } from "react-native-gesture-handler";

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
        <Text>{responseData.title}</Text>
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
