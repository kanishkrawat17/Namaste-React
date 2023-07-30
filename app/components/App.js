import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"

import "../css/index.css";

const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export default App;

/*
 -> Diff algo is written in React and in not in react-dom
 ->  
 */