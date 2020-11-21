import { React, useState } from 'react';

const handleSubmission = (combine) => {
  alert(`Combine Data:
  Auger: ${combine.auger} feet
  Wheel: ${combine.wheel} inches
  Type: ${combine.type}`);
}

function Form() {

  let initialCombine = {
    auger: 8.7,
    wheel: 60,
    type: "diesel"
  }

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
          value={combine.auger}
          onChange={(event) => updateCombine({...combine, auger: event.target.value})}
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
          value={combine.wheel}
          onChange={(event) => updateCombine({...combine, wheel: event.target.value})}
         />
      </label>
      <br />
      <br />

      <label htmlFor="fuelType">Fuel Type
        <input
          name="fuelType"
          type="radio"
          value={combine.type}
          checked={combine.type === "diesel"}
          onChange={() => updateCombine({...combine, type: "diesel"})}
        />
        Diesel
      </label>

      <label htmlFor="fuelType">
        <input
          name="fuelType"
          type="radio"
          value={combine.type}
          checked={combine.type === "electric"}
          onChange={() => updateCombine({...combine, type: "electric"})}
        />
        Electric
      </label>
      <br />
      <br />

      <input
        value="Create Combine"
        name="submit"
        type="button"
        onClick={() => handleSubmission(combine)}
      />
    </form>
  );
}

export default Form;