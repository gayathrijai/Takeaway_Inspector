import React, { Component } from "react";
import { Text, View, Alert, TouchableOpacity, Image, StyleSheet } from "react-native";
import { PermissionsAndroid } from "react-native";
import Location from "../Modules/LocationCheck/LocationCheck";
import { responseData } from "../Modules/API/NetworkRequest";
import { locationPermissionAlert } from "../Modules/Alert/LocationPermissionAlert";
import {StartInspectionStyle} from '../Styles/StartInspectionStyle'


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
        <View >
          <View style={StartInspectionStyle.locationINspectionTakeawayName}>
          <Text numberOfLines={1} style={StartInspectionStyle.takeawayNameText}>{responseData.title.slice(",",17)}</Text>
          </View>
          <Image source={{uri : 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/AN138-Pizza-732x549-Thumb.jpg?w=756&h=567'}} style={StartInspectionStyle.StartInspectionTakeawayImage}/>
          <View >
          <Text style={StartInspectionStyle.StartInspectionTextView}>Address: {responseData.city} </Text>
          <Text style={StartInspectionStyle.StartInspectionTextView}>Postcode: {responseData.postcode}</Text>
          <Text style={StartInspectionStyle.StartInspectionTextView}>Email : {responseData.email}</Text>
          <Text style={StartInspectionStyle.StartInspectionTextView}>Owner : {responseData.owners_name}</Text>
          </View>
        </View>
      ) : (
        <Text>Not working</Text>
      );
    return (
      <View >
        {response}
        <TouchableOpacity onPress={() => {
            this.onInspect();

            Location.findCoordinates(this.props.navigation);
          

          }}> 
          <Text style={StartInspectionStyle.startinspectionopacity}>Start Inspection</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


