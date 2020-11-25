import React, { useState } from 'react';

function Form(props) {

  let initialParams = {augerLength: 8.7, wheelSize: 60, fuelType: 'diesel'};
  const [params, updateParams] = useState(initialParams);

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
          value={params.augerLength}
          onChange={(event) => updateParams({...params, augerLength: event.target.value})}
        />
      </label>
      <br />

      <label htmlFor="wheel">Wheel Size
        <input
          name="wheel"
          id="wheel"
          type="number"
          min="60"
          max="90"
          step="1"
          value={params.wheelSize}
          onChange={(event) => updateParams({...params, wheelSize: event.target.value})}
         />
      </label>
      <br />

      <label htmlFor="fuelType">
        <input
          name="fuelType"
          type="radio"
          value={params.fuelType}
          checked={params.fuelType === "diesel"}
          onChange={() => updateParams({...params, fuelType: "diesel"})}
        />
        Diesel
      </label>

      <label htmlFor="fuelType">
        <input
          name="fuelType"
          type="radio"
          value={params.type}
          checked={params.fuelType === "electric"}
          onChange={() => updateParams({...params, fuelType: "electric"})}
        />
        Electric
      </label>
      <br />
      <br />
      
      <br />
      <input
        value="Add Combine"
        type="button"
        onClick={() => props.addCombine(params)}
      />
      <br />
      <input
        value="Change Rock Positions"
        type="button"
        onClick={() => props.updateRocks()}
      />

      <input
        value="Run Combines"
        type="button"
        onClick={() => props.runCombines()}
      />
    </form>
  );
}

export default Form;