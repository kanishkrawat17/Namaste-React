import React, { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Skeleton from "./Skeleton";
import { SWIGGY_API_URL } from "./Utils/constants";
// import { restaurantsList } from "./Utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      console.log(json.data);

      const apiData = json?.data?.cards;

      const restaurantList = [];

      apiData.forEach((item) => {
        const validRestaurantsArray = item?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(validRestaurantsArray?.length) {
          restaurantList.push(...validRestaurantsArray);
        }
      });

      setRestaurants([...restaurantList]);
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

    setFilteredRestaurants([...filteredRestaurantList]);
  };

  console.log(restaurants);
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
      {restaurants.length === 0 ? (
        <div className="resto-food-restautants--loading"><Skeleton number={8} /></div>
      ) : (
        !filteredRestaurants.length ? <div className="resto-food__restaurant-list">
          <RestaurantList restaurants={restaurants} />
        </div> : null
      )}
    </div>
  );
};

export default Body;
