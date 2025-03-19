import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../Items/Item";
import "./Popular.css";

const Popular = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://oscarvikky.vercel.app/Api/products/popularinwomen")
      .then((res) => {
        // console.log("res", res.data);

        const fetchdata = res.data;
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
