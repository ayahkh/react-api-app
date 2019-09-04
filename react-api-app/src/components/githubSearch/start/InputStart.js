import React from "react";
import AvatarImage from "../../gameWindow/showData/avatarImage/avatarImage";
import UserName from "../../gameWindow/showData/userName/userName";
import './style.css';
import GetGithubData from "../../../getData/githubData";
console.log(GetGithubData);

const MyFunctionalComponentFunction = ({setData, setDisplay}) => {
  const [input, setInput] = React.useState("");


  return (
    <div>

      <label>Please enter your GitHub username:</label>
      <input value={input} onInput={e => setInput(e.target.value)} />
      <button
        onClick={() => {
          const user = input;
          GetGithubData(user).then(data => {
            setData(data);
            setDisplay(true);

          });
        }}
      >
        START
      </button>

    </div>
  );
};

export default MyFunctionalComponentFunction;
