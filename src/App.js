import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Report from './Report';
import { Combine, setRock } from './helpers';

const c = [new Combine(10.7, 'diesel', 60), new Combine(15.7, 'electric', 60), new Combine(12.7, 'diesel', 65)];
const r = [setRock(), setRock(), setRock()];

function App() {

  const runCombines = () => {
    const newCombines = combines.map((c) => {
      c.run();
      return c;
    });
    setCombines(newCombines);
  }
  
  const updateCombines = (params) => {
    setCombines([...combines, new Combine(params.augerLength, params.fuelType, params.wheelSize)]);
  }

  const updateRocks = () => {
    setRocks([setRock(), setRock(), setRock()]);
  }

  const [combines, setCombines] = useState(c);
  const [rocks, setRocks] = useState(r); 

  console.log(combines);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://freesvg.org/img/combine-harvester-5.png" className="App-logo" alt="logo" />
        <h1>C.A.R.S.</h1>
        <Form addCombine={updateCombines} updateRocks={updateRocks} runCombines={runCombines}/>
        <Report combines={combines} rocks={rocks}/>    
      </header>
    </div>
  );
}

export default App;
