import React from "react";
import "./App.css";
import GameWindow from "./components/gameWindow/gameWindow";
import FirstElement from "../src/components/githubSearch/start/InputStart";

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
