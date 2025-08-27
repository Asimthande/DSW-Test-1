import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(function() {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data); 
        setLoading(false); 
      } catch (err) {
        setError('Failed to fetch products'); 
        setLoading(false); 
      }
    }

    fetchProducts();
  }, []);

  function handleProductClick(productId) {
    navigate('/product/' + productId); 
  }


  if (loading) {
    return (
      <div className="loading">
        <h2>Loading products...</h2>
        <p>Please wait while we load the products</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <p>Click on any product to see more details</p>
      
      <div className="products-grid">
        {products.map(function(product) {
          return (
            <div 
              key={product.id} 
              className="product-card"
              onClick={function() { handleProductClick(product.id); }}
            >
              <img src={product.image} alt={product.title} />
              <h3>{product.title.length > 50 ? product.title.substring(0, 50) + '...' : product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="category">{product.category}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;