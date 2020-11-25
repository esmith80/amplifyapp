import React from 'react';
import { timeToHarvest, costPerRun, totalEfficiency, calcCoverage } from './helpers'

function ReportRows(props) {
  const rows = props.combines.map((c) => {
    return (
      <tr>
        <th>{c.augerLength} ft</th>
        <th>{c.wheelSize}"</th>
        <th>{c.fuelType}</th>
        <th>{c.weight.toFixed(0)} lbs</th>
        <th>{(timeToHarvest(c)/60).toFixed(1)} hrs</th>
        <th>{calcCoverage(Number(c.augerLength), props.rocks).toFixed(1)}%</th>
        <th>${costPerRun(c).toFixed(2)}</th>
        <th>{(totalEfficiency(c, props.rocks) * 100).toFixed(1)}</th>
        <th>{c.runs}</th>
      </tr>
    )
  })
  return rows.reverse();
}

export default ReportRows;