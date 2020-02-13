import React, { Component } from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class Qrcode extends Component {

  state = { qdata: "", date: '', hrs: null }

  onSuccess = (e) => {
    data: e.data
    this.setState({ qdata: e.data })
    var a = this.state.qdata; var b = parseInt(a); console.log(typeof (a)); console.log(typeof (b));
    console.log('hrs', this.state.hrs)
    if (b === this.state.hrs) {
      alert("success")
    }

    console.log("QR hrs", b)
  }

  componentDidMount() {

    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    this.setState({ date: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec, hrs: hours });
  }
  render() {

    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        permissionDialogMessage="there is no camera permission"

        bottomContent={
          <View style={{ marginTop: 57 }}>
            <Text style={{ fontSize: 20, color: 'rgb(0,125,0)' }}>
              {this.state.date}
            </Text>
            <Text style={{ fontSize: 20, color: 'rgb(0,125,0)' }}>{
              this.state.qdata}
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