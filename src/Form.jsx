import React, { useState } from 'react';
import { Combine, timeToHarvest, costPerRun, totalEfficiency, setRock, calcCoverage } from './helpers'

const handleSubmission = (c) => {
  // because the methods associated with the combine passed in dissappear after a single refresh, a new Combine is created
  // and used to display the alert (because some data depends on the methods of the combine class)
  const rocks = [ setRock(), setRock(), setRock() ];
  const combine = new Combine(c.augerLength, c.fuelType, c.wheelSize);
  const coverage = calcCoverage(Number(combine.augerLength), rocks);

  alert(`Combine Data:
    Auger: ${combine.augerLength} feet
    Wheel: ${combine.wheelSize} inches
    Type: ${combine.fuelType}
    Weight: ${combine.weight.toFixed(0)} lbs
    Cost Per Run: $${costPerRun(combine).toFixed(2)}
    Time to Harvest: ${(timeToHarvest(combine)/60).toFixed(2)} hours
    Total Efficiency: ${(totalEfficiency(combine) * 100).toFixed(1)}% efficient
    There are rocks in rows: ${rocks[0].y}, ${rocks[1].y}, ${rocks[2].y} 
    Coverage of the field: ${coverage}
  `);
}

function Form() {

  let initialCombine = new Combine(8.7, 'diesel', 60);
  
  const [combine, updateCombine] = useState(initialCombine);

  return (
    <form>
      <label htmlFor="auger">Auger
        <input
          name="auger"
          id="auger"
          type="number"
          min="8.7"
          max="25.7"
          step="1"
          value={combine.augerLength}
          onChange={(event) => updateCombine({...combine, augerLength: event.target.value})}
        />
      </label>
      <br />
      <br />

      <label htmlFor="wheel">Wheel Size
        <input
          name="wheel"
          id="wheel"
          type="number"
          min="60"
          max="90"
          step="1"
          value={combine.wheelSize}
          onChange={(event) => updateCombine({...combine, wheelSize: event.target.value})}
         />
      </label>
      <br />
      <br />

      <label htmlFor="fuelType">Fuel Type
        <input
          name="fuelType"
          type="radio"
          value={combine.fuelType}
          checked={combine.fuelType === "diesel"}
          onChange={() => updateCombine({...combine, fuelType: "diesel"})}
        />
        Diesel
      </label>

      <label htmlFor="fuelType">
        <input
          name="fuelType"
          type="radio"
          value={combine.type}
          checked={combine.fuelType === "electric"}
          onChange={() => updateCombine({...combine, fuelType: "electric"})}
        />
        Electric
      </label>
      <br />
      <br />

      <input
        value="Generate Report"
        name="submit"
        type="button"
        onClick={() => handleSubmission(combine)}
      />
      <br />
      <input
        value="Reset"
        name="submit"
        type="button"
        onClick={() => updateCombine(new Combine(8.7, 'diesel', 60))}
      />
    </form>
  );
}

export default Form;