import React from "react";
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


const RestaurantCard = () => {
    return (
        <div>
            RestaurantCard
        </div>
    )
};

const Body = () => {
    return <RestaurantCard/>;
};
const Footer = () => {
    return <h3>footer</h3>
};

export default App;
