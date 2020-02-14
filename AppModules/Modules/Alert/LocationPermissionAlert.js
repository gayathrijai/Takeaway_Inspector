import { Alert } from "react-native";
import AndroidOpenSettings from "react-native-android-open-settings";
export const locationAlert = () => {
  Alert.alert("You know its wrong", "Go to takeaway", [
    {
      text: "Cancel",
      style: "cancel"
    },
    { text: "OK" }
  ]);
};

export const locationPermissionAlert = () => {
  Alert.alert("", "Go to Settings ", [
    {
      text: "Settings",
      onPress: () => AndroidOpenSettings.appDetailsSettings()
    },
    { text: "OK" }
  ]);
};
