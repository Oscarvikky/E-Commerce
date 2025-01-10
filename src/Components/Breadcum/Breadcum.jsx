import React from "react";
import "./Breadcum.css";
import { IoIosArrowForward } from "react-icons/io";
const Breadcum = ({ oneproduct }) => {
  // const oneproduct = props;
  return (
    <div className="breadcum">
      Home{" "}
      <span>
        <IoIosArrowForward />
      </span>{" "}
      Shop{" "}
      <span>
        <IoIosArrowForward />
      </span>
      {oneproduct?.category} <img src="" alt="" />
      {oneproduct?.ProductName}
    </div>
  );
};

export default Breadcum;
