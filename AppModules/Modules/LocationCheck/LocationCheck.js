import * as geolib from "geolib";
import { lat, lng } from "../API/NetworkRequest";
import Geolocation from "react-native-geolocation-service";

import React, { Component } from "react";
import { Alert } from "react-native";

class LocationCheck extends Component {
  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        const getDistance = distance(position.coords);
        if (getDistance > 100) {
          Alert.alert("You know its wrong", "Go to takeaway", [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK" }
          ]);
        }
        console.log("Inside Find Function");
        console.log(
          `You are , ${getDistance}, meters away from ${lat}, ${lng}`
        );
        locationNew = JSON.stringify(position.coords);
        console.log("Location inside function", location);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  render() {
    return <></>;
  }
}

export const distance = position => {
  return geolib.getDistance(position, {
    latitude: lat,
    longitude: lng
  });
};

const Location = new LocationCheck();
export default Location;
