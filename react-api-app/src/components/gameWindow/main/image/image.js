  import React from "react";
  import "./style.css";

  export const Image = ({ url }) => (
    <figure >
      <img class="pixabay-image" src={url} />
    </figure>
  );
