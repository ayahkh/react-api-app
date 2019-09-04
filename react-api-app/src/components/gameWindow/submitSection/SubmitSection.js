import React, { useState } from "react";
import "./submitSection.css";

import Submit from "./submit/Submit";
import Answer from "./answer/Answer";

const SubmitSection = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div id="submitSection">
      <Submit />
      <Answer setAnswer={setAnswer} answer={answer} />
      <p>{answer}</p>
    </div>
  );
};

export default SubmitSection;
