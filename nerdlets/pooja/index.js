// import React from 'react';

// // https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

// export default class PoojaNerdlet extends React.Component {
//   render() {
//     return <h1>Hiii</h1>;
//   }
// }
import React from 'react';
import {LineChart, SparklineChart, PieChart} from "nr1";
// import NRQL from "./NRQL"

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class PoojaNerdlet extends React.Component {
  render() {
    return <>
    <p style={{color: "red", padding:"10px", alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is LineChart</p>
    <LineChart style={{width:"90%", height:"95%"}}
    accountId = {3930388}
    query = "SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'MzkzMDM4OHxJTkZSQXxOQXw0NTkyMDE1NTk3OTU1OTIwNTQ2' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    
    <p style={{color: "red", padding:"10px" , alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is Pie-Chart</p>
    <PieChart
    accountId = {3930388}
    query = "SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'MzkzMDM4OHxJTkZSQXxOQXw0NTkyMDE1NTk3OTU1OTIwNTQ2' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    {/* <NRQL/> */}
    </>;
  }
}

