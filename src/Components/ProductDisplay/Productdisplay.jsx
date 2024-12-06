import React, { useContext } from "react";
import "./Productdisplay.css";
import star from "../Assets/star.png";
import starr from "../Assets/starr.png";
import { ShopContext } from "../../Context/ShopContext";

const Productdisplay = ({ oneproduct }) => {
  const { addToCart } = useContext(ShopContext);
  // const [oneproduct] = props;
  console.log("dplay:", oneproduct);
  if (!oneproduct) {
    return <div>loadinggg..............</div>;
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={oneproduct.ProductImage} alt="" />
          <img src={oneproduct.ProductImage} alt="" />
          <img src={oneproduct.ProductImage} alt="" />
          <img src={oneproduct.ProductImage} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={oneproduct.ProductImage}
            alt=""
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{oneproduct.ProductName}</h1>
        <div className="productdisplay-rigt-star">
          <img className="yuy" src={star} alt="" />
          <img className="yuy" src={star} alt="" />
          <img className="yuy" src={star} alt="" />
          <img className="yuy" src={star} alt="" />
          <img className="yuy yu" src={starr} alt="" />

          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price">
            ${oneproduct.ProductPrice}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {/* A lightweight, usually knitted, pullover, shirt, close-fitting and
          wear a round neckline and short sleeves, worn as an undershirt or
          outen */}
          {oneproduct.ProductDescription}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(oneproduct._id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, T-Shirt, Crop top
        </p>

        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
