import React from "react";
import "../style/Cocktails.css";
import products from "../data";

const Cocktails = () => {
  return (
    <div>
      {products.map((prod, i) => (
        <img key={i} src={prod.img} />
      ))}
    </div>
  );
};
