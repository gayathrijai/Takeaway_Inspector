import React, { Component } from "react";
import { Text, View, TouchableOpacity,Image } from "react-native";
import { requestLocationPermission } from "../Modules/Permissions/LocationPermission";
import { fetchAPI } from "../Modules/API/NetworkRequest";
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button'
import { LocationFetchStyle } from "../Styles/LocationFetchStyle";

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
      <View style={LocationFetchStyle.locationFetchcontainer}>
          <View >
        <Image source={{ uri: 'https://lh3.googleusercontent.com/_8qSKwDwtaqo3M2IFkzftOcBfXzaEFMWUHfbwc8rvwY4Yck7T-BzWSopqVcc1Y-c8EU' }} style={{ width: 200, height: 200 }} />
        <RNSlidingButton
          style={LocationFetchStyle.locationFetchSlider}
          height={35}
          onSlidingSuccess={this.onStart}
          SlideDirection={SlideDirection.RIGHT} >
          <View >
            <Text style={LocationFetchStyle.sliderTextStyle}>
              Swipe to begin</Text>
          </View>
        </RNSlidingButton>
      </View>
      </View>

    );
  }
}
