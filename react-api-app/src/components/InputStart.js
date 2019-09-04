import React from "react";
import AvatarImage from "./gameWindow/showData/avatarImage/avatarImage";
import UserName from "./gameWindow/showData/userName/userName";

import GetGithubData from "../getData/githubData";
console.log(GetGithubData);

const MyFunctionalComponentFunction = () => {
  const [input, setInput] = React.useState("");

  const [numberOfSeconds, setNumberOfSeconds] = React.useState(30);
  const { avatar_url, name } = display;

  React.useEffect(() => {
    setNumberOfSeconds(numberOfSeconds - 1);
  }, [numberOfSeconds]);

  return (
    <div>
      <div>
        <AvatarImage url={avatar_url} />
      </div>
      <div>
        <UserName username={name} />
      </div>
      <div>Timer {numberOfSeconds}</div>
      <label>Please enter your GitHub username:</label>
      <input value={input} onInput={e => setInput(e.target.value)} />
      <button
        onClick={() => {
          setNumberOfSeconds(29);
          const user = input;
          GetGithubData(user).then(data => {
            setDisplay(data);
            console.log("Data from github", data);
          });
        }}
      >
        START
      </button>
      {console.log("Test", input)}
    </div>
  );
};

export default MyFunctionalComponentFunction;
