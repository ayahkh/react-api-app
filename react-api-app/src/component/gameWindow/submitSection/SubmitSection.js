import React from "react";
import "./submitSection.css";

import Submit from "./submit/Submit";
import Answer from "./answer/Answer";

const SubmitSection = () => {
  return (
    <div id="submitSection">
      <Answer />
      <Submit />
    </div>
  );
};

export default SubmitSection;
