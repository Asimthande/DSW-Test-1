import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import styles from './DetailScreenStyles';

function DetailScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    fetchProduct();
  }, [productId]);

  function fetchProduct() {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setProduct(data);
        setLoading(false);
      })
      .catch(function(err) {
        console.error('Failed to fetch product details:', err);
        setLoading(false);
      });
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
      </View>
    </ScrollView>
  );
}

export default DetailScreen;