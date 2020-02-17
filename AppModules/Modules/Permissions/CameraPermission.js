import { PermissionsAndroid } from "react-native";
import { CameraPermissionAlert} from '../Alert/CameraPermissionAlert';

export async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log(" Permission Granted.");
    } else {
      CameraPermissionAlert()
      console.log("Location Permission Not Granted");
    }
  } catch (err) {
    console.warn(err);
  }
}