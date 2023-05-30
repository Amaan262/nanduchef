import React from "react";
import "./about.scss";
import about1 from "../../Images/about2.jpg";
import about2 from "../../Images/about1.jpg";
import about3 from "../../Images/about3.jpg";
const About = () => {
  return (
    <div className="about">
      <h1 className="center">About Us</h1>
      <div className="container">
        <div className="box box1">
          <img src={about1} alt="" />
          <div className="info">
            <p>Nandu Chef was established in 2018, an enticing food brand that takes culinary delight to a new level. With an unwavering commitment to exceptional taste, quality ingredients and innovative creations, Nandu Chef captures the essence of culinary art in every gourmet offering.</p>
          </div>
        </div>
        <div className="box box2">
          <img src={about2} alt="" />
          <p>The brand prides itself on  culinary innovation that constantly pushes boundaries and explores new frontiers of taste. Inspired by world cuisines and culinary trends, Nandu Chef offers unique flavor combinations that awaken the senses and leave a lasting impression. Whether  bold spices, unexpected combinations or reinvented classics, each creation demonstrates the brand's commitment to culinary excellence.</p>
        </div>
        <div className="box box3">
          <img src={about3} alt="" />
          <p>What sets Nandu Chef apart is their unwavering commitment to using only the finest, all-natural ingredients from trusted suppliers. From rich green pulses to handpicked lentils and spices, each ingredient is carefully selected to ensure optimal freshness and flavor.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
