import React from "react";
import AvatarImage from "./gameWindow/showData/avatarImage/avatarImage";
import UserName from "./gameWindow/showData/userName/userName";

import GetGithubData from "../getData/githubData";
console.log(GetGithubData);

const MyFunctionalComponentFunction = () => {
  const [input, setInput] = React.useState("");

  const placeholder = {
    avatar_url:
      "https://static.boredpanda.com/blog/wp-content/uploads/2015/07/donald-trump-funny-look-alike-1__700.jpg",
    name: "Donald"
  };

  const [display, setDisplay] = React.useState(placeholder);
  const [numberOfSeconds, setNumberOfSeconds] = React.useState(30);

  const { avatar_url, name } = display;

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
