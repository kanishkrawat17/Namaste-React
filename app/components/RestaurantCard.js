import React from "react";
import { imgBaseURL } from "./Utils/constants";

import "../css/index.css";

const RestaurantCard = (props) => {
    const { name, avgRating, cloudinaryImageId, areaName } = props;
  
    return (
      <div className="resto-food-card">
          <img className="resto-food-card--img" alt={name} src={`${imgBaseURL}${cloudinaryImageId}`}/>
          <h3 className="resto-food-card--foodname">{name}</h3>
          <h4 className="resto-food-card--rating">{avgRating} stars</h4>
          <h5 className="resto-food-card--place">{areaName}</h5>
      </div>
    );
  };

  export default RestaurantCard;