import React from "react";
import Timer from "../../gameWindow/timer/timer";

import "./style.css";
import GetGithubData from "../../../getData/githubData";

const MyFunctionalComponentFunction = ({ setData, setDisplay }) => {
  const [input, setInput] = React.useState("");
  let [time, setTime] = React.useState(60);

  function count() {
    var counter = setInterval(seconds, 1000);
    function seconds() {
      if (time === 0) {
        clearInterval(counter);
      } else {
        setTime(time - 1);
        time--;
        console.log("Time", time);
      }
    }
  }

  return (
    <div>
      <section class="searchSection">
        <input
          class="startInput"
          placeholder="Github Username"
          value={input}
          onInput={e => setInput(e.target.value)}
        />

        <button
          class="startButton"
          onClick={() => {
            count();
            const user = input;
            GetGithubData(user)
              .then(data => {
                setData(data);
              })
              .then(() => {
                setDisplay(true);
              });
          }}
        >
          ↳
        </button>
      </section>
      <section id="timer">
        <Timer seconds={time} />
      </section>
    </div>
  );
};

export default MyFunctionalComponentFunction;
