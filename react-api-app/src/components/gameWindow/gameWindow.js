import React from "react";
import "./gameWindow.css";
import {ImageUrl} from "./main";

import SubmitSection from "./submitSection/SubmitSection";

const GameWindow = () => {
  return (
    <div>
    <div id="gameWindow"  class="all">
      <h1>Please Guess What Is The Image</h1>
      <ImageUrl  />
      <SubmitSection />
    </div>
    </div>
  );
};

export default GameWindow;
