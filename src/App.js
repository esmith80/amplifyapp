import React from 'react';
import './App.css';

function sayHello() {
  alert("Hello from CARS!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://freesvg.org/img/combine-harvester-5.png" className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <input type="submit" value="Submit"></input>
        <button onclick={sayHello()}>Say Hello</button>
      </header>
    </div>
  );
}

export default App;
