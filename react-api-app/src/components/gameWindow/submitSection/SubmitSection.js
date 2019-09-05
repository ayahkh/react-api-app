import React, { useState } from "react";
import "./submitSection.css";
import { selectTag } from "../main";
import Submit from "./submit/Submit";
import Answer from "./answer/Answer";

const SubmitSection = () => {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkSolution = () => {
    if (true === selectTag.includes(answer)) {
      setResult("✓ Right answer");
    } else {
      setResult("✗ wrong answer");
      setAnswer("");
    }
  };

  return (
    <div>
      <section id="submitSection">
        <Submit check={checkSolution} />
        <Answer setAnswer={setAnswer} answer={answer} />
      </section>
      <section>
        <h2>{result}</h2>
      </section>
    </div>
  );
};

export default SubmitSection;
