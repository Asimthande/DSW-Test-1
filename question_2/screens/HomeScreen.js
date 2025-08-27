import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';
import styles from './HomeScreenStyles';

function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function() {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setProducts(data);
        setLoading(false);
      })
      .catch(function(err) {
        setError('Failed to fetch products.');
        setLoading(false);
        console.error(err);
      });
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  function renderProductItem({ item }) {
    function handlePress() {
      navigation.navigate('Detail', { productId: item.id });
    }
    
    return (
      <ProductCard 
        product={item} 
        onPress={handlePress}
      />
    );
  }

  function keyExtractor(item) {
    return item.id.toString();
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderProductItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default HomeScreen;