import React from "react";
import "../tailwind.css";
import products from "../product.json";

import ProductItem from "./Product";

export default function Products({
  addToCart,
  removeFromCart,
  currentCategory,
}) {
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const filteredProducts = currentCategory !== "" ? products.filter(
    (product) => product.categoryName === currentCategory
  ) : products;
  const chunkedProducts = chunkArray(filteredProducts, 4);

  return (
    <>
      {chunkedProducts.map((chunk, index) => (
        <div key={index} className="flex mt-8">
          {chunk.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </div>
      ))}
    </>
  );
}