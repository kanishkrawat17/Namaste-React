import React from "react";
import Header from "./Header";
import Body from "./Body";

import "../css/index.css";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const Footer = () => {
  return <h3>footer</h3>;
};

export default App;
