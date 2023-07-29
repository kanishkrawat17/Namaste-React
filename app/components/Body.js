import React, { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
// import { restaurantsList } from "./Utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.687091&lng=77.262533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestaurants([
        ...json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
        ...json.data.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      ]);
    } catch (err) {
      console.log(err, "error");
    }
  };

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
    <div className="resto-food__search-wrapper">
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
      </div>
      <div className="resto-food__restaurant-list">
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  );
};

export default Body;
