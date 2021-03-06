import React from "react";
import "./App.css";
import GameWindow from "./components/gameWindow/gameWindow";
import FirstElement from "../src/components/githubSearch/start/InputStart";

function App() {
  const [data, setData] = React.useState(null);
  const [display, setDisplay] = React.useState(false);
  let [score, setScore] = React.useState(0);
  let [displayPoints, setDisplayPoints] = React.useState(false);
  return (
    <div>
      <div>
        <FirstElement
          setData={setData}
          setDisplay={setDisplay}
          score={score}
          setDisplayPoints={setDisplayPoints}
        />
      </div>
      <div>
        {display ? (
          <GameWindow
            data={data}
            setScore={setScore}
            score={score}
            displayPoints={displayPoints}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
