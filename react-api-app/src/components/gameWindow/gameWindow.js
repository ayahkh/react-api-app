import React from "react";
import "./gameWindow.css";

import AvatarImage from "./showData/avatarImage/avatarImage";
import UserName from "./showData/userName/userName";
import SubmitSection from "./submitSection/SubmitSection";

const GameWindow = ({ data }) => {
  const { avatar_url, name } = data;
  return (
    <div id="gameWindow" class="all">
      <section class="gitSection">
        <AvatarImage url={avatar_url} />
        <div>
          <h3>Hello</h3>
          <UserName username={name} />
        </div>
      </section>
      <section class="game">
        <h1>Guess the IMG</h1>
        <SubmitSection />
      </section>
    </div>
  );
};

export default GameWindow;
