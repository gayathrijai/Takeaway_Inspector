import React, { Component } from "react";
import { Alert } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { distance } from "../LocationCheck/LocationCheck";
import { lat, lng } from "../API/NetworkRequest";

let location = '';


export const findCoordinates = () => {
  Geolocation.getCurrentPosition(
    position => {
      const getDistance = distance(position.coords);
      console.log("Inside Find Function");
      console.log(`You are , ${getDistance}, meters away from ${lat}, ${lng}`);
      location = JSON.stringify(position.coords);
      console.log("Location inside function", location);
      return location
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};
export const { location };

