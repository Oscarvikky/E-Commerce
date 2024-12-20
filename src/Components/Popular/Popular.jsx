import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../Items/Item";
import "./Popular.css";

const Popular = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/Api/Products/fetchProduct").then((res) => {
      const fetchdata = res.data.product;
      setproduct(fetchdata);
      // console.log(product);
    });
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular-item">
        {product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              ProductImage={item.ProductImage}
              ProductName={item.ProductName}
              ProductPrice={item.ProductPrice}
            />
            // <img src={item.ProductImage} alt="" />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
