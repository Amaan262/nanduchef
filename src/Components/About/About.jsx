import React from "react";
import "./about.scss";
import about1 from "../../images/about2.jpg";
import about2 from "../../images/about1.jpg";
import about3 from "../../images/about3.jpg";
const About = () => {
  return (
    <div className="about">
      <h1 className="center">About Us</h1>
      <div className="container">
        <div className="box box1">
          <img src={about1} alt="" />
          <div className="info">
            <p>Nandu Chef was established in 2018. </p>
          </div>
        </div>
        <div className="box box2">
          <img src={about2} alt="" />
            <p>Nandu Chef was established in 2018. </p>
        </div>
        <div className="box box3">
          <img src={about3} alt="" />
            <p>Nandu Chef was established in 2018. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
