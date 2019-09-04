import React from "react";
import "./App.css";
import GameWindow from "./components/gameWindow/gameWindow";
import FirstElement from "../src/components/githubSearch/start/InputStart";

function App() {
  const [data, setData] = React.useState(null);
  const [display, setDisplay] = React.useState(false);
  const [numberOfSeconds, setNumberOfSeconds] = React.useState(30);

  return (
    <div>
      <div>
        <FirstElement setData={setData} setDisplay={setDisplay} />
      </div>
      <div>{display ? <GameWindow data={data} /> : null}</div>
    </div>
  );
}

export default App;
