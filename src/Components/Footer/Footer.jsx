import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        {/* <p className="title">Nandu Chef</p> */}
        <div className="footer_container">
          <div className="products">
            <p className="footer_sub_head">Top Products</p>
            <ul>
              <li>
                {" "}
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Product 1
                </a>
              </li>
              <li>
                {" "}
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Product 2
                </a>
              </li>
              <li>
                {" "}
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Product 3
                </a>
              </li>
            </ul>
          </div>
          <div className="quicklinks">
            <p className="footer_sub_head">Quick Links</p>
            <ul>
              <li>
                <a href="/">
                  <i className="fas fa-chevron-circle-right"></i> Home
                </a>
              </li>
              <li>
                <a href="about">
                  <i className="fas fa-chevron-circle-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="confectionery">
                  <i className="fas fa-chevron-circle-right"></i> Confectionery
                </a>
              </li>
              <li>
                <a href="bakeryBiscuits">
                  <i className="fas fa-chevron-circle-right"></i> Bakery
                  Biscuits
                </a>
              </li>
              <li>
                <a href="liveBakery">
                  <i className="fas fa-chevron-circle-right"></i> Live Bakery
                </a>
              </li>
              <li>
                <a href="grocery">
                  <i className="fas fa-chevron-circle-right"></i> Grocery
                </a>
              </li>
              <li>
                <a href="goForWheat">
                  <i className="fas fa-chevron-circle-right"></i> Go For Wheat!
                </a>
              </li>
              <li>
                <a href="contact">
                  <i className="fas fa-chevron-circle-right"></i> Contact Us
                </a>
              </li>
              <li>
                <a href="wholesaleEnquiry">
                  <i className="fas fa-chevron-circle-right"></i> Wholesale
                  Enquiry
                </a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3 className="footer_sub_head">Contact Info</h3>
            <div className="contactInfo">
              <p>
                {" "}
                <i className="fas fa-phone"></i> +91 9410261235, +91 9458763387
              </p>
              <p>
                {" "}
                <i className="fas fa-envelope"></i> nand@nanduchef.com
              </p>
              <p>
                {" "}
                <i className="fas fa-map-marked-alt"></i> Bareilly,Uttar
                Pradesh, India
              </p>
            </div>
            <div className="share">
              <p className="footer_sub_head">Follow</p>

              <a
                href="https://www.instagram.com/nanduchef_/"
                rel="noreferrer"
                className="insta fab fa-instagram"
                aria-label="Instagram"
                target="_blank"
              >
                {" "}
              </a>
              <a
                href="https://www.facebook.com/PKNamkeenandLiveBakery"
                rel="noreferrer"
                className="fb fab fa-facebook"
                aria-label="facebook"
                target="_blank"
              >
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="credits">
        <span> &copy; Copyright @ NanduChef 2023</span>
        <span>
          Website Designed & Developed by{" "}
          <a href="http://iamaan.me/" target="_blank" rel="noreferrer">
            Amaan Ahmad
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
