import React from 'react';
import ReportRows from './ReportRows';
import './Report.css';


function Report(props) {

  const rocks = props.rocks;

  return (
    <>
    <h2>Combine Fleet Report</h2>
    <table border="1">
    <tr>
      <th>Auger Length</th>
      <th>Wheel Size</th>
      <th>Fuel Type</th>
      <th>Weight</th>
      <th>Time Taken</th>
      <th>Coverage<br /> <small>3 rocks <br />in rows {rocks[0].y}, {rocks[1].y}, {rocks[2].y}</small> </th>
      <th>Cost of Run</th>
      <th>Total Efficiency</th>
      <th>Total Runs</th>
    </tr>        
    <ReportRows combines={props.combines} rocks={props.rocks}/>       
  </table>
  </>
  )
}

export default Report;