import React from "react";
import "./Product.css";

const ProductsItem = (props) => {
  const {id, name, price, image}= props
  
  return (
    <div>
      <div className="onesp" key={id}>
        <div className="img">
          <img src={image} alt={name}></img>
        </div>
        <div className="small">
          <span>{name}</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
