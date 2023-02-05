import React, { useState } from "react";
import Product from "./Product";
import { nanoid } from "nanoid";

const Products = () => {
  function id() {
    return nanoid();
  }
  const initProds = [
    { id: id(), name: "product1", cost: 400 },
    { id: id(), name: "product2", cost: 200 },
    { id: id(), name: "product3", cost: 300 },
  ];

  const [prods, setProds] = useState(initProds);

  const result = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        name={prod.name}
        cost={prod.cost}
        id={prod.id}
      ></Product>
    );
  });
  return <div>{result}</div>;
};

export default Products;
