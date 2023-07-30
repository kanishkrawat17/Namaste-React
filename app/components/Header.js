import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Logo  from "../assets/images/Logo.png";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const handleAuthClick = () => {
      setIsLoggedIn(!isLoggedIn);
    };

    const handleHeaderItemClick = (e) => {
      const path = e.target.id;
      navigate(path);
    };

    return (
      <header className="resto-header">
        <div className="resto-header__logo">
          <img
            className="resto-header__logo--img"
            src={Logo}
            alt="RestoChef"
          />
        </div>
        <ul className="resto-header__right-actions" onClick={handleHeaderItemClick}>
          <li className="resto-header__right-actions--home" id="/">Home</li>
          <li className="resto-header__right-actions--aboutus" id="about">About us</li>
          <li className="resto-header__right-actions--contacts" id="contacts">Contacts</li>
        </ul>
        <button onClick={handleAuthClick}>{isLoggedIn ? 'Logout' : 'Login'}</button> 
      </header>
    );
  };


export default Header;
