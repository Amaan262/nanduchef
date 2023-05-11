import React from "react";
// import logo from "../../images/NanduChef.png";
import logo from "../../images/nanduchefRound.png";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
const HeaderContent = () => {
  return (
    <div className="header_content">
      <a className="logo" href="/nanduchef">
        <img src={logo} alt="nandu-chef" />
      </a>
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
        <Link to="/findStore">
          <span>Find Our Store</span>
          {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "} */}
          <GoLocation />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon="fa-regular fa-user" />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon="fa-regular fa-heart" />
        </Link>
        <Link to="#">{/* <img src={shopping} alt="" /> */}</Link>
      </div>
    </div>
  );
};

export default HeaderContent;
