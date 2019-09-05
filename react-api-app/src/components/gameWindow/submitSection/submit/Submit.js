import React from "react";
import "./submit.css";

const Submit = (props) => {
  return <button id="submit" 
  onClick={(e)=>{props.check(e)}}
  >↳</button>;
};

export default Submit;
