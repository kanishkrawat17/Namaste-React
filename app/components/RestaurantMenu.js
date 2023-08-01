import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API_URL } from './Utils/constants';


const RestaurantMenu = () => {
  const [ menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getMenuItems();
  }, []);

  const getMenuItems = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL+resId);
    const json = await data.json();

    console.log(json.data.cards);
    json.data.cards.forEach((item ) => {
        console.log(item?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    });
  }
  return (
    <div></div>
  )
}

export default RestaurantMenu