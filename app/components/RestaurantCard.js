import React from "react";
import { imgBaseURL } from "./Utils/constants";

import "../css/index.css";

const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, areaName } = props;

  return (
    <div className="resto-food-card">
      <div className="resto-food-card__img-wrapper">
        <img
          className="resto-food-card__img"
          alt={name}
          src={`${imgBaseURL}${cloudinaryImageId}`}
        />
      </div>
      <div>
        <h3 className="resto-food-card__foodname">{name}</h3>
        <h4 className="resto-food-card__rating">{avgRating} stars</h4>
        <h4 className="resto-food-card__place">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
