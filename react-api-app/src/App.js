import React from "react";
import "./App.css";
import GameWindow from "./components/gameWindow/gameWindow";
import FirstElement from "../src/components/githubSearch/start/InputStart";
import Image from "./components/gameWindow/main";


function App() {
  return (
    <div>

      <div>
        <FirstElement />
      </div>
      <div>
        <GameWindow />
        <Image />
      </div>
    </div>
  );

}

export default App;
