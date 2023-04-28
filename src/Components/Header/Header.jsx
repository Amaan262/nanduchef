import React from "react";
import Navbar from "./Navbar";
import Header_content from "./Header_content";

const Header = () => {
  return (
    <header className="page_header">
      <Header_content/>
      <Navbar />
    </header>
  );
};

export default Header;
