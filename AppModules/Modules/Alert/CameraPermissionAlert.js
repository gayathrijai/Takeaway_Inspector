import { Alert } from "react-native";
import AndroidOpenSettings from "react-native-android-open-settings";
export const CameraPermissionAlert = () => {
  Alert.alert("Camera permission needed", "please go to settings", [
    {
      text: "Settings",
      onPress: () => AndroidOpenSettings.appDetailsSettings()
    },
    { text: "OK" }
  ]);
};

 