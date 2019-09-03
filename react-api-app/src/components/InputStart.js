import React from "react";

import GetGithubData from "../getData/githubData";
console.log(GetGithubData);

const MyFunctionalComponentFunction = () => {
  const [input, setInput] = React.useState("");

  const funct = () => {
    const user = input;
    GetGithubData(user).then(data => {
      console.log(data);
    });
  };

  return (
    <div>
      <label>Please specify:</label>
      <input value={input} onInput={e => setInput(e.target.value)} />
      <button onClick={funct()}>START</button>
      {console.log("Test", input)}
    </div>
  );
};

export default MyFunctionalComponentFunction;
