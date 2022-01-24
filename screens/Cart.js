import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CartContext } from '../CartContext';

export function Cart ({navigation}) {

  const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>RM {total}</Text>
       </View>
    );
  }

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>RM {item.totalPrice}</Text>
       </View>
    );
  }
  
  return (
    <View>
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DeliveryLocation', {
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Delivery Location</Text>
      </TouchableOpacity>
      </View> 
  );


}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  // button: {
  //   backgroundColor: '#0782F9',
  //   width: '60%',
  //   padding: 15,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   marginTop: 40,
  // },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});