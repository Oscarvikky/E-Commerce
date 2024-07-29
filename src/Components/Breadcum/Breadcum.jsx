import React from "react";
import "./Breadcum.css";
const Breadcum = ({ oneproduct }) => {
  // const oneproduct = props;
  return (
    <div className="breadcum">
      Home <img src="" alt="" /> Shop <img src="" alt="" />
      {oneproduct?.category} <img src="" alt="" />
      {oneproduct?.ProductName}
    </div>
  );
};

export default Breadcum;
