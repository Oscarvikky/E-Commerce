import React from "react";
import "./Offers.css";

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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4C7xpEAAbHPrh_aZWJc63XiLt9UjH0K8Q3LROZYZjHnM_LAUshJqLFRukOKyK3sBPuyg&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Offers;
