import React from "react";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <header className="page_header">
      <HeaderContent/>
      <Navbar />
    </header>
  );
};

export default Header;
