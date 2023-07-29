import React, { useState } from "react";
import RestaurantList from "./RestaurantList";
import { restaurantsList } from "./Utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([...restaurantsList]);
  const [searchedValue, setSearchedValue] = useState("");

  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  };

  const handleFilterData = (searchedValue) => {
    const searchedText = searchedValue;
    const filteredRestaurantList = restaurants.filter((restaurant) => {
      return restaurant.info?.name
        ?.toLowerCase()
        .includes(searchedText.toLowerCase());
    });

    setRestaurants([...filteredRestaurantList]);
  };

  return (
    <div className="resto-food__body">
      <input
        className="resto-food__searchbox"
        placeholder="Search restaurant"
        type="text"
        value={searchedValue}
        onChange={handleSearch}
      />
      <button
        className="resto-food__search-btn"
        aria-label="search"
        onClick={() => handleFilterData(searchedValue)}
      >
        Search
      </button>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Body;
