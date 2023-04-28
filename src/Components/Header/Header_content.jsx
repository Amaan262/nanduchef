import React from "react";
// import logo from "../../images/NanduChef.png";
import logo from "../../images/nanduchefRound.png";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoLocation } from "react-icons/go";
const Header_content = () => {
  return (
    <div className="header_content">
      <div className="logo">
        <img src={logo} alt="nandu-chef" />
      </div>
      <div className="search_box">
        <input type="text" placeholder="Search" />
        <button>
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-magnifying-glass"
          />
        </button>
      </div>
      <div className="quick_links">
        <a href="#">
          <span>Find Our Store</span>
          {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "} */}
          <GoLocation/>
        </a>
        <a href="#">
          <FontAwesomeIcon icon="fa-regular fa-user" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon="fa-regular fa-heart" />
        </a>
        <a href="#">{/* <img src={shopping} alt="" /> */}</a>
      </div>
    </div>
  );
};

export default Header_content;
