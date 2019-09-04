import React, { useState } from "react";
import "./gameWindow.css";
import AvatarImage from "./showData/avatarImage/avatarImage";
import UserName from "./showData/userName/userName";
import Image from "./main/index"
import SubmitSection from "./submitSection"

const GameWindow = ({data}) => {
  const {avatar_url, name}= data;
  return (
    <div id="gameWindow" class="all">
      <AvatarImage avatar_url={avatar_url} />
      <UserName name={avatar_url} />
        <h1>Please Guess What Is The Image</h1>
      <Image />
      <SubmitSection />

    </div>
    
  );
};

export default GameWindow;
