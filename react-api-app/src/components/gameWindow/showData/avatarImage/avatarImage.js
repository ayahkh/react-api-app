import React from "react";
import "./avatarImage.css";

const AvatarImage=(props)=>{


  return (
    <div>
    <img src={props.avatar_url} >
    </div>
  );
}

export default AvatarImage;
