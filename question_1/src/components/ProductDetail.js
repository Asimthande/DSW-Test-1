import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function() {
    async function fetchProduct() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/' + id);
        setProduct(response.data);
        setLoading(false); 
      } catch (err) {
        setError('Failed to fetch product details'); 
        setLoading(false);
      }
    }

              fetchProduct();
                }, [id]); 

  function handleBackClick() {
    navigate(-1);
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading product details...</h2>
        <p>Please wait while we load the product information</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={handleBackClick}>Go Back</button>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="error">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={handleBackClick}>Go Back to Products</button>
      </div>
    );
  }
  return (
    <div className="product-detail">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Products
      </button>
      
      <div className="product-detail-content">
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        
        <div className="product-info">
          <h1>{product.title}</h1>
          
          <div className="price-section">
            <span className="price">${product.price.toFixed(2)}</span>
          </div>
          
          <div className="category-section">
            <span className="category-label">Category: </span>
            <span className="category">{product.category}</span>
          </div>
          
          <div className="description-section">
            <h3>Description</h3>
            <p className="description">{product.description}</p>
          </div>
          
          <div className="rating-section">
            <h3>Customer Reviews</h3>
            <p className="rating">
            {product.rating.rate} out of 5 stars
              <br />
              ({product.rating.count} reviews)
            </p>
          </div>
          
          <div className="action-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;