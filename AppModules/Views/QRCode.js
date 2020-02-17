import React, { Component } from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import moment from 'moment';

class Qrcode extends Component {

  state = { qdata: "", date: '', hrs: null }

  onSuccess = (e) => {
    data: e.data
    this.setState({ qdata: e.data })
    const devicestime=moment(new Date()).format('DD MM YYYY HH:mm:ss');
    console.log('devices-time==>',devicestime)
    console.log('devicestimetype==>',typeof(devicestime))
   this.getTimeDiff()
  }
  getTimeDiff = (differenceIn = 'minutes', floating= false) => {
    var  data= JSON.stringify(this.state.qdata)
    console.log('data=>',this.state.qdata)
    console.log('datatype==>',typeof(data))
    const  then = moment(data, "DD-MM-YYYY HH:mm:ss");
    const  now = moment(new Date(), "DD-MM-YYYY HH:mm:ss");
    console.log(then)
    console.log(now)
     
    const  timeDifference = now.diff(then, differenceIn, floating);
    if(timeDifference===0 || timeDifference <=30)
    {
      this.props.navigation.navigate('Finish')
    
    }
    else{
      alert('timeout retry')
    }
    console.log("Time difference -> " + timeDifference + ' ' + differenceIn);
  }

   
  render() {
    const today = this.state.currentDate;
const day = moment(today).format("dddd");
const date = moment(today).calendar();

    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        permissionDialogMessage="there is no camera permission"
        showMarker={true}  
        bottomContent={
          <View style={{ marginTop: 57 }}>
            <Text style={{ fontSize: 20, color: 'rgb(0,125,0)' }}>
              {this.state.date}
            </Text>
            <Text style={{ fontSize: 20, color: 'rgb(0,125,0)' }}>   
              {this.state.qdata}
              {console.log('render==>',this.state.qdata)}
              {this.getTimeDiff()}
            </Text>
          </View>}

      />
    );
    
  }

}
const styles = StyleSheet.create({
  centerText:
    { flex: 1, fontSize: 18, padding: 32, color: '#777', }
  , textBold:
    { fontWeight: '500', color: '#000', }

  , buttonText: { fontSize: 21, color: 'rgb(0,122,255)', }
  , buttonTouchable:
    { padding: 16, },
});
export default Qrcode; 