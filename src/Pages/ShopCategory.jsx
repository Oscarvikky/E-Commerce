import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Items/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { product } = useContext(ShopContext);
  console.log("normal:", product);
  console.log("cat:", props.category);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12</span> out of 36 product
        </p>

        <div className="shopcategory-sort">
          <div className="shopcat">
            sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
      </div>
      {
        <div className="shopcategory-products">
          {product.map((item, i) => {
            if (props.category === item.ProductCategory) {
              return (
                <Item
                  key={i}
                  id={item._id}
                  ProductImage={item.ProductImage}
                  ProductName={item.ProductName}
                  ProductPrice={item.ProductPrice}
                  u
                />
              );
            }
          })}
        </div>
      }
      <div className="shopcategory-loadmore">explore more</div>
    </div>
  );
};

export default ShopCategory;
