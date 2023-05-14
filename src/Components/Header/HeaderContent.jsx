import React from "react";
import './HeaderContent.scss'
import logo from "../../Images/nanduchefRound.png";
import "./header.scss";
import { Link } from "react-router-dom";
import { FavoriteBorderSharp, PersonSharp, RoomSharp, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const HeaderContent = () => {
  return (
    <div className="header_content">
      <a className="logo" href="/nanduchef">
        <img src={logo} alt="nandu-chef" />
      </a>
      <div className="search_box">
        <input type="text" placeholder="Search" />
        <button>
          <Search />
        </button>
      </div>
      <div className="quick_links">
        <Link to="/findStore">
          <span>Find Our Store</span>
          <RoomSharp />
        </Link>
        <Link to="#/">
          <PersonSharp />
        </Link>
        <Link to="#">
          <FavoriteBorderSharp />
        </Link>
        <Link to="/cart">
          <Badge badgeContent={4} color="secondary" overlap="rectangular">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default HeaderContent;
