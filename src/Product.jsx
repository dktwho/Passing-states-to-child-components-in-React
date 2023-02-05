import React from "react";

const Product = ({ name, cost, id }) => {
  return (
    <div>
      id: <span>{id} </span>
      name: <span> {name} </span>
      cost: <span> {cost}</span>
    </div>
  );
};

export default Product;
