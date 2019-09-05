import React from "react";
import "./submit.css";

const Submit = (props) => {
  return <button id="submit" 
  onClick={props.check}
  >↳</button>;
};

export default Submit;
