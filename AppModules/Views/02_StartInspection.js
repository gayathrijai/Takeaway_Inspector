import React, { Component } from "react";
import { Text, View, Alert, TouchableOpacity, Image, StyleSheet } from "react-native";
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
        <View >
          <View style={styles.locationINspectionTakeawayName}>
          <Text style={styles.takeawayNameText}>{responseData.title.slice(",",17)}</Text>
          </View>
          <Image source={{uri : 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/AN138-Pizza-732x549-Thumb.jpg?w=756&h=567'}} style={styles.StartInspectionTakeawayImage}/>
          <View >
          <Text style={styles.StartInspectionTextView}>Address: {responseData.city} </Text>
          <Text style={styles.StartInspectionTextView}>Postcode: {responseData.postcode}</Text>
          <Text style={styles.StartInspectionTextView}>Email : {responseData.email}</Text>
          <Text style={styles.StartInspectionTextView}>Owner : {responseData.owners_name}</Text>
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
            Location.findCoordinates();
          }}> 
          <Text style={styles.startinspectionopacity}>Start Inspection</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles=StyleSheet.create({
  locationINspectionTakeawayName:{
    width: '60%',
    height: 45,
    borderRadius:12,
    borderWidth: 4,
    marginVertical:10,
    left: 80,
    borderColor: '#177614',
    
  },
  takeawayNameText:{
    color: '#177614',
    fontSize:25,
    fontWeight: 'bold',
    textAlign:'center'
  },
  StartInspectionTakeawayImage:{
    width: '90%', 
    height: 300,
    left: 20,
    marginVertical:10,
    borderRadius:10,
    borderWidth:3,


  },
  StartInspectionTextView:{
  textAlign:'center',
  fontSize: 15,
  fontWeight: 'bold'
  },
  startinspectionopacity:{
    paddingTop:20,
    textAlign:'center',
    fontSize: 30,
    fontWeight:'bold',
    color: '#177614'
  }
})