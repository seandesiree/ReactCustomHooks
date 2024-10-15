import { useState } from 'react';


export function useInventory(initialProducts = []) {
  const [products, setProducts] = useState(initialProducts);

  const getProducts = () => {
    return products;
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return {
    products: getProducts(),
    addProduct,
    removeProduct,
  };
}