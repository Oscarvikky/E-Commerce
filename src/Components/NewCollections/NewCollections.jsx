import React, { useState, useEffect } from "react";
import "./NewCollection.css";
import Item from "../Items/Item";
import axios from "axios";

const NewCollections = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://oscarvikky.vercel.app/Api/Products/fetchProduct")
      .then((res) => {
        const fetchdata = res.data.product || [];
        setproduct(fetchdata);
        console.log(product);
      })
      .catch((err) => {
        console.error("error fecthing new collections:", err);
      });
  }, []);

  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              ProductImage={item.ProductImage}
              ProductName={item.ProductName}
              ProductPrice={item.ProductPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
