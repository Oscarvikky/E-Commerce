// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:4000/Api/Products/fetchProduct").then((res) => {
//       const fetchData = res.data.product;
//       setProduct(fetchData);
//     });
//   }, []);

//   const getDefaultCart = (products) => {
//     let cart = {};
//     products.forEach((item) => {
//       cart[item._id] = 0;
//     });
//     return cart;
//   };

//   const [cartItems, setCartItems] = useState({});
//   useEffect(() => {
//     if (product.length > 0) {
//       setCartItems(getDefaultCart(product));
//     }
//   }, [product]);

//   const addToCart = (item_Id) => {
//     setCartItems((prev) => ({ ...prev, [item_Id]: (prev[item_Id] || 0) + 1 }));
//   };
//   const removefromcart = (item_Id) => {
//     setCartItems((prev) => ({ ...prev, [item_Id]: (prev[item_Id] || 0) - 1 }));
//   };

//   const contextValue = { product, cartItems, addToCart, removefromcart };

//   useEffect(() => {
//     console.log("Updated cart items:", cartItems);
//   }, [cartItems]);

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/Api/Products/fetchProduct").then((res) => {
      const fetchData = res.data.product;
      setProduct(fetchData);
    });
  }, []);

  const getDefaultCart = (products) => {
    let cart = {};
    products.forEach((item) => {
      cart[item._id] = 0;
    });
    return cart;
  };

  // Initialize cartItems only once with an empty object or from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  useEffect(() => {
    if (product.length > 0 && Object.keys(cartItems).length === 0) {
      setCartItems(getDefaultCart(product));
    }
  }, [product]);

  const addToCart = (item_Id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [item_Id]: (prev[item_Id] || 0) + 1 };
      localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Persist to localStorage
      return updatedCart;
    });
  };

  const removefromcart = (item_Id) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [item_Id]: Math.max((prev[item_Id] || 0) - 1, 0),
      };
      localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Persist to localStorage
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product.find((product) => product._id === Number(item));
        totalAmount += itemInfo.ProductPrice * cartItems[item];
      }
      return totalAmount;
    }
  };
  const contextValue = {
    getTotalCartAmount,
    product,
    cartItems,
    addToCart,
    removefromcart,
  };

  useEffect(() => {
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
