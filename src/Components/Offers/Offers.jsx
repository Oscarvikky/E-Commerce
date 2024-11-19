import React from "react";
import "./Offers.css";
import offer_img from "../Assets/offers_img.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>only on best sellers products</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={offer_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
