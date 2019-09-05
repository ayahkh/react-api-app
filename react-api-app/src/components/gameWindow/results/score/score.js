import React from "react";
import "./style.css";

const Score = ({ recentScore }) => (
  <div>
    <h3>Score: </h3>
    <label>{recentScore}</label>
  </div>
);

export default Score;
