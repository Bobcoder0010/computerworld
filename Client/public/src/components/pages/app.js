import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);   


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3000/api/products');   

      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default App;