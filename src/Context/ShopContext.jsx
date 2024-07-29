// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const [product, setproduct] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:4000/Api/Products/fetchProduct").then((res) => {
//       const fetchdata = res.data.product;
//       setproduct(fetchdata);
//       console.log("see product:", product);
//     });
//   }, []);

//   const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < product.length + 1; index++) {
//       cart[index] = 0;
//     }
//     return cart;
//   };

//   const [cartItems, setcartItems] = useState(getDefaultCart());

//   const addToCart = (item_Id) => {
//     setcartItems((prev) => ({ ...prev, [item_Id]: prev[item_Id] + 1 }));
//     console.log("adddddd:", cartItems);
//   };
//   // const removeFromCart = (item_Id) => {
//   //   setcartItems((prev) => ({ ...prev, [item_Id]: prev[item_Id] - 1 }));
//   // };
//   const contextValue = { product, cartItems, addToCart };
//   console.log("you:", cartItems);

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

  const [cartItems, setCartItems] = useState({});
  useEffect(() => {
    if (product.length > 0) {
      setCartItems(getDefaultCart(product));
    }
  }, [product]);

  const addToCart = (item_Id) => {
    setCartItems((prev) => ({ ...prev, [item_Id]: (prev[item_Id] || 0) + 1 }));
  };
  const removefromcart = (item_Id) => {
    setCartItems((prev) => ({ ...prev, [item_Id]: (prev[item_Id] || 0) - 1 }));
  };

  const contextValue = { product, cartItems, addToCart, removefromcart };

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

// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const [product, setProduct] = useState([]);
//   const [cartItems, setCartItems] = useState({});

//   useEffect(() => {
//     axios.get("http://localhost:4000/Api/Products/fetchProduct").then((res) => {
//       const fetchData = res.data.product;
//       setProduct(fetchData);
//       console.log("see product:", fetchData);

//       // Initialize cart with the fetched products
//       const initialCart = getDefaultCart(fetchData);
//       setCartItems(initialCart);
//     });
//   }, []);

//   const getDefaultCart = (products) => {
//     let cart = {};
//     for (let i = 0; i < products.length + 1; i++) {
//       cart[i] = 0; // Assuming products have an 'id' field
//     }
//     return cart;
//   };

//   const addToCart = (item_Id) => {
//     setCartItems((prev) => ({ ...prev, [item_Id]: prev[item_Id] + 1 }));
//     console.log("addddd:", cartItems);
//   };

//   const removeFromCart = (item_Id) => {
//     setCartItems((prev) => ({ ...prev, [item_Id]: prev[item_Id] - 1 }));
//   };

//   const contextValue = { product, cartItems, addToCart, removeFromCart };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const [product, setProduct] = useState([]);
//   const [cartItems, setCartItems] = useState({});

//   useEffect(() => {
//     axios.get("http://localhost:4000/Api/Products/fetchProduct").then((res) => {
//       const fetchdata = res.data.product;
//       setProduct(fetchdata);
//     });
//   }, []);

//   useEffect(() => {
//     const getDefaultCart = () => {
//       let cart = {};
//       for (let index = 0; index < product.length; index++) {
//         cart[product[index].id] = 0; // Assuming each product has a unique 'id'
//       }
//       return cart;
//     };
//     setCartItems(getDefaultCart());
//   }, [product]);

//   useEffect(() => {
//     console.log("Updated cartItems:", cartItems);
//   }, [cartItems]);

//   const addToCart = (item_Id) => {
//     setCartItems((prev) => ({ ...prev, [item_Id]: (prev[item_Id] || 0) + 1 }));
//   };

//   const removeFromCart = (item_Id) => {
//     setCartItems((prev) => ({ ...prev, [item_Id]: (prev[item_Id] || 0) - 1 }));
//   };

//   const contextValue = { product, cartItems, addToCart, removeFromCart };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const [product, setProduct] = useState([]);
//   const [cartItems, setCartItems] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/Api/Products/fetchProduct")
//       .then((res) => {
//         const fetchData = res.data.product;
//         console.log("dfecth:", fetchData);
//         setProduct(fetchData);
//         console.log("cartproduct:", product);
//       })
//       .catch((error) => {
//         console.error("error fecting products:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (product.length > 0) {
//       const initialCart = getDefaultCart();
//       setCartItems(initialCart);
//       console.log("productdata:", product);
//       console.log("initial cartiii:", initialCart);
//     }
//   }, [product]);

//   const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < product.length + 1; index++) {
//       cart[index._id] = 0;
//     }
//     return cart;
//   };

//   const addToCart = (item_Id) => {
//     setCartItems((prev) => ({ ...prev, [item_Id]: prev[item_Id] + 1 }));
//     console.log("adddddd:", cartItems);
//   };

//   const contextValue = { product, cartItems, addToCart };
//   console.log("you:", cartItems);

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
