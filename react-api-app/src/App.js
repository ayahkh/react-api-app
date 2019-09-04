import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstElement from "./components/InputStart";

function App() {
  const [display, setDisplay] = React.useState(placeholder);
  const [numberOfSeconds, setNumberOfSeconds] = React.useState(30);
  return <FirstElement />;
}

export default App;
