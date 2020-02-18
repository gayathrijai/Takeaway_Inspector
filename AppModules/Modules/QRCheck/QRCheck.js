import React, { Component } from "react";
import moment from 'moment';
import { withNavigation } from 'react-navigation';


class QRCheck extends Component {
  
  
  getTimeDiff = (differenceIn = 'minutes', floating= false) => {
    var  data= JSON.stringify(this.props.qrdata)
  
    const  QR_Time = moment(data, "DD-MM-YYYY HH:mm:ss");
    const  Device_Time = moment(new Date(), "DD-MM-YYYY HH:mm:ss");
    console.log(Device_Time)
    
     
    const  timeDifference = Math.abs(QR_Time.diff(Device_Time, differenceIn, floating));
    if(timeDifference===0 || timeDifference <=30)
    {
      this.props.navigation.navigate('Finish');
    
    }
    else if(timeDifference > 30){
      alert("sorry this QR code is expired ! regenrate agin")
    }
    console.log("Time difference -> " + timeDifference + ' ' + differenceIn);
  }

  render() {
    console.log(this.props)
    {this.getTimeDiff()}
    return (
     <>
     </>
    );
  }
}

export default withNavigation (QRCheck);