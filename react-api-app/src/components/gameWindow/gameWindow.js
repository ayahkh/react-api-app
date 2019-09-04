import React, { useState } from "react";
import "./gameWindow.css";
import Image from "./main";

import SubmitSection from "./submitSection/SubmitSection";

const GameWindow = () => {
  return (
    <div>
      <div id="gameWindow" class="all">
        <h1>Guess the IMG</h1>
        <Image />
        <SubmitSection />
      </div>
    </div>
  );
};

export default GameWindow;
