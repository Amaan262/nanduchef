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
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Home
                </a>
              </li>
              <li>
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Confectionery
                </a>
              </li>
              <li>
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Bakery
                  Biscuits
                </a>
              </li>
              <li>
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Go For Wheat!
                </a>
              </li>
              <li>
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Contact Us
                </a>
              </li>
              <li>
                <a href="#hero">
                  <i className="fas fa-chevron-circle-right"></i> Wholesale
                  Enquiry
                </a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3 className="footer_sub_head">Contact Info</h3>
            <p>
              {" "}
              <i className="fas fa-phone"></i> +91 00000000
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope"></i> 00000000@gmail.com
            </p>
            <p>
              {" "}
              <i className="fas fa-map-marked-alt"></i> Bareilly,Uttar Pradesh,
              India
            </p>
            <div className="share">
              <p className="footer_sub_head">Follow</p>
              <a
                href="https://www.instagram.com/nanduchef_/"
                rel="noreferrer"
                className="fab fa-instagram"
                aria-label="Instagram"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="credits">
        <span> &copy; Copyright @ NanduChef 2023</span>
        <span>
          Website Designed & Developed by{" "}
          <a href="http://iamaan.me/" target="_blank">
            {" "}
            Amaan Ahmad
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
