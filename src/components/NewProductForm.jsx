import React, { useState } from 'react';
import { useInventory } from './useInventory';

const NewProductForm = () => {
  const { addProduct } = useInventory([
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 3', description: 'Description 3' },
  ]);

  const [newProduct, setNewProduct] = useState({ id: '', name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.id || !newProduct.name || !newProduct.description) return;

    addProduct(newProduct);
    setNewProduct({ id: '', name: '', description: '' }); 
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Product ID"
          value={newProduct.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;