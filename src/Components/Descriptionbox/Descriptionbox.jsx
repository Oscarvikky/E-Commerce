import React from "react";
import "./Descriptionbox.css";

function Descriptionbox() {
  return (
    <div className="descriptionbox">
      <div className="decriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          voluptates sint animi odio. Magnam eum, assumenda error odit deleniti
          corrupti obcaecati id perferendis quaerat quod vitae illum
          praesentium? Asperiores, ab?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          asperiores id quidem non quod blanditiis repellendus autem hic porro
          nemo iusto, earum, sequi corrupti veritatis, esse atque.
          Necessitatibus, rem nesciunt?
        </p>
      </div>
    </div>
  );
}

export default Descriptionbox;
