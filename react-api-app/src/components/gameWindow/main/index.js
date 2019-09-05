import * as React from "react";
import { useState, useEffect } from "react";

import ErrorBoundary from "../../../error_boundary";
import { getPixabayData } from "../../../getData/pixabayData.js";
import { Image } from "./image/image";
import "./style.css";

// import REACT_APP_pixabay_api_key from '../../../.env';
const API_URL = "https://pixabay.com/api/";
let largeImageData= [];
let randomImages = "";
let tags = [];
let selectTag = [];
const ImageUrl=()=> {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const url = `${API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}`;
    getPixabayData(url)
    .then(data => 
      {
        console.log("data " , data)
          setImageData(data)
      });
  },[]);

      if(imageData != null)
        {
      largeImageData = Object.keys(imageData).map(obj => { 
        return  imageData[obj].largeImageURL ;
          })
      tags = Object.keys(imageData).map(obj => { 
        return  imageData[obj].tags ;
          })
  
    let rand = Math.random();
    let totalImages = largeImageData.length;
    let randIndex = Math.floor(rand * totalImages);
    randomImages = largeImageData[randIndex];
    var tagResult = tags[randIndex];
    var res = tagResult.split(", ");
    selectTag = res;
    console.log("selectTag " , selectTag)
  }
    
    return (
      <div className="card--wrapper"> 
      
        <Image url={randomImages ? randomImages : ""} />
      </div>
    );

}

    export { ImageUrl , selectTag};
  
  





export default ErrorBoundary(ImageUrl);
