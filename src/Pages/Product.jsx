import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcum from "../Components/Breadcum/Breadcum";
import Productdisplay from "../Components/ProductDisplay/Productdisplay";
import Descriptionbox from "../Components/Descriptionbox/Descriptionbox";

const Product = () => {
  const { product } = useContext(ShopContext);
  // console.log("new:", product);
  const { productId } = useParams();
  // console.log("anew:", productId);
  console.log("Product array:", product);
  console.log("Product array type:", typeof product);
  console.log("Product ID from URL params:", productId);
  console.log("Product ID type:", typeof productId);
  const oneproduct = product.find((e) => e._id === productId);
  console.log("one:", oneproduct);
  return (
    <div>
      <Breadcum oneproduct={oneproduct} />
      <Productdisplay oneproduct={oneproduct} />
      <Descriptionbox />
    </div>
  );
};

export default Product;
