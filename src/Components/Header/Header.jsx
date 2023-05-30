import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import './header.scss'
import logo from '../../Images/nanduchefRound.png'
import {
  // FavoriteBorderSharp, PersonSharp, ShoppingCartOutlined
  RoomSharp, Search, Menu, Close
} from "@material-ui/icons";



const Header = () => {
  const [menu, setMenu] = useState("menu")
  const navigate = useNavigate();
  const header__nav = useRef(null);

  const handleMenuBtn = () => {
    if (menu === "menu") {
      setMenu("x")
      header__nav.current.classList.add("active");
      
    } else {
      setMenu("menu")
      header__nav.current.classList.remove("active");

    }
  }
  const handleLinks = () => {
    header__nav.current.classList.remove("active");
    setMenu("menu")

  }

  const searchOnChangeHandler = (e) => {
    navigate(`/search?query=${e.target.value}`)
  }



  return (
    <header className="page_header">
      <div className="header_content">
        <a className="logo" href="/">
          <img src={logo} alt="nandu-chef" />
        </a>
        <div className="search_box">
          <input type="text" onChange={searchOnChangeHandler} placeholder="Search" />
          <button type="submit">
            <Search className='icon' />
          </button>
        </div>
        <div className="quick_links">
          <Link to="/findStore">
            <span>Find Our Store</span>
            <RoomSharp />
          </Link>
          {/* <Link to="#">/*
              <PersonSharp />
            </Link>
            <Link to="#">
              <FavoriteBorderSharp />
              </Link>
            <Link to="#">
            <Badge badgeContent={4} color="secondary" overlap="rectangular">
                <ShoppingCartOutlined />
              </Badge>
            </Link> */}
          <div className="menubtn" onClick={handleMenuBtn}>
            {menu === "menu" ? (<Menu />) : (<Close />)}
          </div>
        </div>
      </div>
      <nav className="header-nav"  >
        <ul ref={header__nav}>
          {navItems.map((item, index) => {
            return (
              <li className="nav-items" key={index}>
                <Link onClick={handleLinks} to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;






const navItems = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "Confectionery",
    url: "/confectionery",
  },

  {
    title: "Live Bakery",
    url: "/liveBakery",
    submenu: [
      {
        title: "Breads",
        url: "breads",
      },
      {
        title: "cakes",
        url: "cakes",
      },
      {
        title: "pastries",
        url: "pastries",
      },
      {
        title: "velvet cups",
        url: "velvetCups",
      },
      {
        title: "muffins",
        url: "muffins",
      },
      {
        title: "snacks",
        url: "snacks",
      },
    ],
  },
  {
    title: "Bakery Biscuits",
    // url: "/bakeryBiscuits",
  },
  {
    title: "Grocery",
    // url: "/grocery",
    submenu: [
      {
        title: "Pulses",
        url: "pulses",
      },
      {
        title: "Dry Fruits",
        url: "dryFruits",
      },
      {
        title: "Spices",
        url: "spices",
      },
    ],
  },
  {
    title: "Go for Wheat!",
    // url: "/goForWheat",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
  {
    title: "About Us",
    url: "/About",
  },
  // {
  //   title: "Wholesale Enquiry",
  //   url: "/wholesaleEnquiry",
  // },
];
