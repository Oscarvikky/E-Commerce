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
    axios
      .get("https://oscarvikky.vercel.app/Api/Products/fetchProduct")
      .then((res) => {
        const fetchData = res.data.product;
        setProduct(fetchData);
      });

    if (localStorage.getItem("Token")) {
      // console.log("ytoken", localStorage.getItem("Token"));

      axios
        .post(
          "https://oscarvikky.vercel.app/Api/Users/getuser",
          {}, // Empty object as POST body (since no data is being sent)
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
          }
        )
        .then((res) => setCartItems(res.data)) // Axios automatically parses JSON
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      setCartItems([]);
    }
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
  }, []);

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => {
  //     const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
  //     localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Persist to localStorage
  //     let Token = localStorage.getItem("Token");
  //     console.log("Tokenffff", Token);
  //     if (Token) {
  //       axios
  //         .post(
  //           "http://localhost:4000/Api/Users/addtocart",
  //           { itemId },
  //           {
  //             headers: {
  //               Accept: "application/json",
  //               Authorization: `Bearer ${Token}`,
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         )
  //         .then((res) => {
  //           console.log("ese", res);

  //           // setCartItems(res.data.cart);
  //         });

  //       alert("successfully add to cart");
  //       return updatedCart;
  //     }
  //   });
  // };

  const addToCart = (itemId) => {
    let Token = localStorage.getItem("Token") || localStorage.getItem("token");
    // console.log("newtoken", Token);

    if (!Token) {
      alert("User not authenticated");
      return;
    }

    axios
      .post(
        "https://oscarvikky.vercel.app/Api/Users/addtocart",
        { itemId },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // console.log("Response:", res);

        setCartItems((prev) => {
          const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
          return updatedCart;
        });

        alert("Successfully added to cart");
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
        alert("Failed to add item to cart.");
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

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = product.find((onep) => onep._id === item);
        if (itemInfo) {
          totalAmount +=
            parseFloat(itemInfo.ProductPrice || 0) * (cartItems[item] || 0);
        }
      }
    }
    return totalAmount; // Moved outside of the loop
  };

  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,

    product,
    cartItems,
    addToCart,
    removefromcart,
  };

  useEffect(() => {
    // console.log("Updated cart items:", cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
