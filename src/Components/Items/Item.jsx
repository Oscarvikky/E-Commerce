import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="itembg">
      <div className="item">
        <Link to={`/product/${props.id}`}>
          <img src={props.ProductImage} alt="" />
        </Link>
        <p>{props.ProductName}</p>

        <div className="item-price">
          <p>${props.ProductPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
