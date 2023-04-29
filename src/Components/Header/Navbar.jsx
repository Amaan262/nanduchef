import React from "react";
const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/",
  },
  {
    title: "Confectionery",
    url: "/",
  },
  {
    title: "Bakery Biscuits",
    url: "/",
  },
  {
    title: "Go for Wheat!",
    url: "/",
  },
  {
    title: "Contact Us",
    url: "/",
  },
  {
    title: "Wholesale Enquiry",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="header-nav">
      <ul>
        {navItems.map((item, index) => {
          return (
            <li className="nav-items" key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
