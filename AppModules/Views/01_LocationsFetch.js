import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import { requestLocationPermission } from "../Modules/Permissions/LocationPermission";
import { fetchAPI } from "../Modules/API/NetworkRequest";
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button'

export default class LocationsPermissions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null
    };
  }

  onStart = () => {
    requestLocationPermission();
    this.props.navigation.navigate('Inspection'
    )
  };

  render() {
    fetchAPI();
    const { navigation } = this.props;
    return (
      <View style={styles.locationFetchcontainer}>
          <View >
        <Image source={{ uri: 'https://lh3.googleusercontent.com/_8qSKwDwtaqo3M2IFkzftOcBfXzaEFMWUHfbwc8rvwY4Yck7T-BzWSopqVcc1Y-c8EU' }} style={{ width: 200, height: 200 }} />
        <RNSlidingButton
          style={styles.locationFetchSlider}
          height={35}
          onSlidingSuccess={this.onStart}
          SlideDirection={SlideDirection.RIGHT} >
          <View >
            <Text style={styles.sliderTextStyle}>
              Swipe to begin</Text>
          </View>
        </RNSlidingButton>
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  locationFetchcontainer:
  {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  locationFetchSlider:
  {
    top: 20,
    width: 210,
    borderRadius: 15,
  },
  sliderTextStyle:
  {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});
