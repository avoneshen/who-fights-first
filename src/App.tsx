import React from "react";
import FightsFirstProvider from "./state/FightsFirstProvider";
import FightsFirst from "./components/FightsFirst";
import "./App.css";

function App() {
  return (
    <FightsFirstProvider>
      <div className="App">
        <FightsFirst />
      </div>
    </FightsFirstProvider>
  );
}

export default App;
