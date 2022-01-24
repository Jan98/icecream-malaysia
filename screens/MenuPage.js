import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export function MenuPage ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  
  return (
    <FlatList
      style={styles.menuPage}
      contentContainerStyle={styles.menuPageContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
    menuPage: {
    backgroundColor: '#eeeeee',
  },
  menuPageContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});