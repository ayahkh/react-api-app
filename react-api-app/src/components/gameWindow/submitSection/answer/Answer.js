import React from "react";
import "./answer.css";

const Answer = props => {
  return (
    <input
      type="text"
      id="input"
      placeholder="Answer"
      value={props.answer}
      onInput={e => props.setAnswer(e.target.value)}
    ></input>
  );
};

export default Answer;
