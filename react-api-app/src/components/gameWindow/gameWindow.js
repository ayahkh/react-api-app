import React from "react";
import "./gameWindow.css";
import { ImageUrl } from "./main";
import AvatarImage from "./showData/avatarImage/avatarImage";
import UserName from "./showData/userName/userName";
import SubmitSection from "./submitSection/SubmitSection";

const GameWindow = ({ data, setScore, score }) => {
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

        <h1>Guess the Image</h1>
        <ImageUrl />
        <SubmitSection setScore={setScore} score={score} />

      </section>
    </div>
  );
};

export default GameWindow;
