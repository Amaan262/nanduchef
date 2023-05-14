import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
// Usme dropdown me breads, cakes, pastries, velvet cups, muffins vagera dalenge snacks
// sme Dropdown me Pulses, Dry Fruits, Spices add karna hai

const navItems = [
  {
    title: "Home",
    url: "/nanduchef",
  },
  
  {
    title: "Confectionery",
    url: "/confectionery",
  },
  {
    title: "Bakery Biscuits",
    url: "/bakeryBiscuits",
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
    title: "Grocery",
    url: "/grocery",
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
    url: "/goForWheat",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
  {
    title: "About Us",
    url: "/About",
  },
  {
    title: "Wholesale Enquiry",
    url: "/wholesaleEnquiry",
  },
];

const Navbar = () => {
  return (
    <nav className="header-nav">
      <ul>
        {navItems.map((item, index) => {
          return (
            <li className="nav-items" key={index}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
