import React from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';

const App = () => {
  return (
    <div>
      <h1>Product Inventory Management</h1>
      <NewProductForm />
      <ProductList />
    </div>
  );
};

export default App;