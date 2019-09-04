import React, { useState } from "react";
import "./gameWindow.css";
import AvatarImage from "./showData/avatarImage/avatarImage";
import UserName from "./showData/userName/userName";
import Image from "./main/index"
import SubmitSection from "./submitSection"

const GameWindow = ({data}) => {
  const {avatar_url, name}= data;
  return (
    <div id="gameWindow">
      <AvatarImage avatar_url={avatar_url} />
      <UserName name={avatar_url} />
      <Image />
      <SubmitSection />

    </div>
  );
};

export default GameWindow;
