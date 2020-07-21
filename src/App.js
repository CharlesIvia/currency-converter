import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./components/CurrencyRow";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyRow />
      <div className="equal">=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
