import React from "react";
import "./style.css";

export const Image = ({ url }) => (
  <figure className="card-image--container">
    <img className="card-image--img" src={url} />
  </figure>
);
