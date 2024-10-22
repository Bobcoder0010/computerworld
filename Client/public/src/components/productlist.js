import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList; 