import React, { useState } from "react";
import "./submitSection.css";
import {selectTag} from '../main'
import Submit from "./submit/Submit";
import Answer from "./answer/Answer";

const SubmitSection = () => {
  const [answer, setAnswer] = useState("");

const checkSolution=()=>{
  for(var i=0 ; i<selectTag.length ; i++)
  {
    if({answer}.answer === selectTag[i])
    {
      console.log("true answer");
      
    }
    
  }
}
  
  return (
    <div id="submitSection">
      <Submit check={checkSolution} />
      <Answer setAnswer={setAnswer} answer={answer} />
    </div>
  );
};

export default SubmitSection;
