import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Country from "./country";

function App() {
  return (
    <div className="App">
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Colombia.png"
        name="Colombia"
        population={50000000}
        region="America"
        capital="Bogota"
      />
    </div>
  );
}

export default App;
