import React from "react";
import { restaurantsList, imgBaseURL } from "./constants";

import "./css/index.css";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const Header = () => {
  return (
    <header className="resto-header">
      <div className="resto-header__logo">
        <img
          className="resto-header__logo--img"
          src="https://elements-cover-images-0.imgix.net/b75e4852-12f5-4412-8a8d-f7eb511faec7?auto=compress%2Cformat&fit=max&w=2038&s=0196813888b6871f4461834b11344906"
          alt="RestoChef"
        />
      </div>
      <ul className="resto-header__right-actions">
        <li className="resto-header__right-actions--home">Home</li>
        <li className="resto-header__right-actions--aboutus">About us</li>
        <li className="resto-header__right-actions--contacts">Contacts</li>
      </ul>
    </header>
  );
};

const RestaurantList = (props) => {
  const {restaurants} = props;

  return restaurants.map((restaurant, index) => {
      return <RestaurantCard {...restaurant?.info} key={index}/>
  });
};

const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, areaName } = props;

  return (
    <div className="resto-food-card">
        <img className="resto-food-card--img" alt="Burger" src={`${imgBaseURL}${cloudinaryImageId}`}/>
        <h3 className="resto-food-card--foodname">{name}</h3>
        <h4 className="resto-food-card--rating">{avgRating} stars</h4>
        <h5 className="resto-food-card--place">{areaName}</h5>
    </div>
  );
};

const Body = () => {
  const[restaurants, setRestaurants] = React.useState([...restaurantsList]);
  const [searchedValue, setSearchedValue] = React.useState('');

  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  };

  const handleFilterData = (searchedValue) => {
    const searchedText = searchedValue;
    const filteredRestaurantList = restaurants.filter((restaurant, index) => {
      return restaurant.info?.name.toLowerCase().includes(searchedText.toLowerCase());
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
        <button className="resto-food__search-btn" aria-label='search' onClick={() => handleFilterData(searchedValue)}>Search</button>
        <RestaurantList restaurants={restaurants}/>
    </div>
    ) 
};

const Footer = () => {
  return <h3>footer</h3>;
};

export default App;
