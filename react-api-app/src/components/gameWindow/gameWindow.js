import React, { useState } from "react";
import "./gameWindow.css";

import AvatarImage from "./showData/avatarImage/avatarImage";
import UserName from "./showData/userName/userName";
import Image from "./main/index";
import SubmitSection from "./submitSection/SubmitSection";
import Timer from "./timer/timer";

const GameWindow = ({ data }) => {
  console.log("Data in GameWindow", data);
  const { avatar_url, name } = data;
  console.log("AvatarURL", avatar_url);
  return (
    <div id="gameWindow" class="all">
      <AvatarImage url={avatar_url} />
      <UserName username={name} />
      <h1>Please Guess What Is The Image</h1>
      <SubmitSection />
    </div>
  );
};

export default GameWindow;
