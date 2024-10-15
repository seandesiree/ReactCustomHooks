import React from 'react';
import { useInventory } from './useInventory';


const initialProducts = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
  { id: 3, name: 'Product 3', description: 'Description 3' },
];

const ProductList = () => {
  const { products, removeProduct } = useInventory(initialProducts);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;