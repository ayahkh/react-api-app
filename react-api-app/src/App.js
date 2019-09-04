import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstElement from "./components/InputStart";
import GameWindow from "./components/gameWindow/gameWindow";

function App() {
  return (
    <div>
      <div>
        <FirstElement />
      </div>
      <div>
        <GameWindow />
      </div>
    </div>
  );
}

export default App;
