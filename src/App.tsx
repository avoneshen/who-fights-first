import React from "react";
import FightsFirstProvider from "./state/FightsFirstProvider";
import "./App.css";

function App() {
  return (
    <FightsFirstProvider>
      <div className="App">Hello World!!</div>;
    </FightsFirstProvider>
  );
}

export default App;
