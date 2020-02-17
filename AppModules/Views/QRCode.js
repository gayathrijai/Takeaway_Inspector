import React, { Component } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCheck from '../Modules/QRCheck/QRCheck';
 

class Qrcode extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      qrdata: "" 
    }
  }
  
  onSuccess = (e) => {
    data: e.data
    this.setState({ qrdata: e.data })
   
  }
  render() {
  
    {this.state.qdata}
    console.log(this.state.qdata)
    return (
      <>
        <QRCodeScanner
        onRead={this.onSuccess}
        showMarker={true}  
        bottomContent={
          <View style={{ marginTop: 57 }}>
            <Text style={{ fontSize: 20, color: 'rgb(0,125,0)' }}>
            Scan the Fusion QR
            </Text> 
          </View>}
      />
      <QRCheck qrdata = {this.state.qrdata}/> 
      </>
      
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
