import React from "react";
import "./App.css";
import CurrencyRow from "./components/CurrencyRow";

function App() {
  return (
    <div className="App">
      <CurrencyRow />
      <div>=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
