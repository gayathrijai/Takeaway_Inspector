import * as geolib from "geolib";
import { lat, lng } from "../API/NetworkRequest";
import Geolocation from "react-native-geolocation-service";

export const findCoordinates = () => {
  Geolocation.getCurrentPosition(
    position => {
      const getDistance = distance(position.coords);
      console.log("Inside Find Function");
      console.log(`You are , ${getDistance}, meters away from ${lat}, ${lng}`);
      location = JSON.stringify(position.coords);
      console.log("Location inside function", location);
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

export const distance = position => {
  return geolib.getDistance(position, {
    latitude: lat,
    longitude: lng
  });
};
