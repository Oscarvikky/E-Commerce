import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} />;

// ReactDOM.render(element, document.body);

const CartItems = () => {
  const { product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log("cartpro:", product);
  console.log("newcart:", cartItems);
  if (!product || !Array.isArray(product)) {
    return <div>No products available.</div>;
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {product.map((e) => {
        if (cartItems[e._id] > 0) {
          return (
            <div key={e._id} className="cartitems-format">
              <img
                src={e.ProductImage}
                alt=""
                className="carticon-product-icon"
              />
              <p>{e.ProductName}</p>
              <p>${e.ProductPrice}</p>
              <button className="cartitems-quantity">{cartItems[e._id]}</button>
              <p>{e.ProductPrice * cartItems[e._id]}</p>
              <img
                src=""
                alt=""
                onClick={() => {
                  removeFromCart(e._id);
                }}
              />
            </div>
          );
        }
      })}
      <hr />

      <div>{/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}</div>
    </div>
  );
};

export default CartItems;
