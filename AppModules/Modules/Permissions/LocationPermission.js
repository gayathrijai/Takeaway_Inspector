import { Alert } from "react-native";
import { findCoordinates } from "../LocationCheck/LocationCheck";
import { PermissionsAndroid } from "react-native";

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "ReactNativeCode Location Permission",
        message: "ReactNativeCode App needs access to your location "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Location Permission Granted.");
    } else {
      console.log("Location Permission Not Granted");
    }
  } catch (err) {
    console.warn(err);
  }
}
