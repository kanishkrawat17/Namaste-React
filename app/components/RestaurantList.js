import React from "react";
import RestaurantCard from "./RestaurantCard";

import "../css/index.css";

const RestaurantList = (props) => {
  const {restaurants} = props;

  return restaurants.map((restaurant, index) => {
      return <RestaurantCard {...restaurant?.info} key={index}/>
  });
};

export default RestaurantList;