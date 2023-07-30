import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import  Logo  from "../assets/images/Logo.png";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const handleAuthClick = () => {
      setIsLoggedIn(!isLoggedIn);
    };

    const handleHeaderItemClick = (e) => {
      const path = e.target.id;
      // navigate(path);
    };

    return (
      <header className="resto-header">
        <div className="resto-header__logo">
          <a href="/" onClick={(e) => {
            e.preventDefault();
          }}>
            <img
                className="resto-header__logo--img"
                src={Logo}
                alt="RestoChef"
              />
          </a>
        </div>
        <ul className="resto-header__right-actions" onClick={handleHeaderItemClick}>
          <li className="resto-header__right-actions--home" id="/">
            <Link to='/'>Home</Link>  
            {/* using normal anchor tag will make the page reload so we use Link from "react-router-dom" */}
          </li>
          <li className="resto-header__right-actions--aboutus" id="about">
            <Link to='/about'>About us</Link>
          </li>
          <li className="resto-header__right-actions--contacts" id="contacts">
            <Link to='/contact'>Contacts</Link>
          </li>
        </ul>
        <button onClick={handleAuthClick}>{isLoggedIn ? 'Logout' : 'Login'}</button> 
      </header>
    );
  };


export default Header;


/*
  1. SPA -> A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.
     Link - https://www.bloomreach.com/en/blog/2018/what-is-a-single-page-application

  2. Two types of routing:
    a) Server side routing -> All our pages come from the server. If there is change in route to "/about" then About page will be coming from the server.
    b) Client side routing -> Our App has all the pages so there is no need to make a network call and fetch that page for that route.
*/