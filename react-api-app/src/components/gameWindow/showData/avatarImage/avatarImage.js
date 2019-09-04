import React from "react";
import "./avatarImage.css";

const AvatarImage = props => {
  return (
    <div>
      <img src={props.url} />
    </div>
  );
};

export default AvatarImage;
