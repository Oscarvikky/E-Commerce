import React from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import hero from "../Assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src="" alt="" />
          </div>
          <p>collection</p>
          <p> for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>latest collection</div>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
