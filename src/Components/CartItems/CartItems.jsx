// import React, { useContext } from "react";
// import "./CartItem.css";
// import { ShopContext } from "../../Context/ShopContext";
// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

// // const element = <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} />;

// // ReactDOM.render(element, document.body);

// const CartItems = () => {
//   const { product, cartItems, removefromCart, addToCart } =
//     useContext(ShopContext);
//   console.log("cartpro:", product);
//   console.log("newcart:", cartItems);
//   console.log(addToCart);
//   if (!product || !Array.isArray(product)) {
//     return <div>No products available.</div>;
//   }

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {product.map((e) => {
//         if (cartItems[e._id] > 0) {
//           return (
//             <div key={e._id} className="cartitems-format">
//               <img
//                 src={e.ProductImage}
//                 alt=""
//                 className="carticon-product-icon"
//               />
//               <p>{e.ProductName}</p>
//               <p>${e.ProductPrice}</p>
//               <button className="cartitems-quantity">{cartItems[e._id]}</button>
//               <p>{e.ProductPrice * cartItems[e._id]}</p>
//               <img
//                 src=""
//                 alt=""
//                 onClick={() => {
//                   removefromCart(e._id);
//                 }}
//               />
//             </div>
//           );
//         }
//       })}
//       <hr />

//       <div>{/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}</div>
//     </div>
//   );
// };

// export default CartItems;

import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, product, cartItems, removefromcart, addToCart } =
    useContext(ShopContext);

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
            <div>
              <div
                key={e._id}
                className="cartitems-format, cartitems-format-main"
              >
                <img
                  src={e.ProductImage}
                  alt={e.ProductName}
                  className="carticon-product-icon"
                />
                <p>{e.ProductName}</p>
                <p>${e.ProductPrice}</p>
                <div className="cartitems-actions">
                  <button onClick={() => addToCart(e._id)}>+</button>
                  <span>{cartItems[e._id]}</span>
                  <button onClick={() => removefromcart(e._id)}>-</button>
                </div>
                <p>
                  ${parseFloat(e.ProductPrice || 0) * (cartItems[e._id] || 0)}
                </p>

                <button className="del" onClick={() => removefromcart(e._id)}>
                  x
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null; // Hide products with zero quantity
      })}
      {/* <hr /> */}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECHOUT</button>
        </div>

        <div className="cartitems-promocode ">
          <p>if you have a promo code enter it here </p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="enter promo code " />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
