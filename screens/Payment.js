import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';


export default function Payment({navigation}) {
  
    return (
    <View style={styles.container}>
      <Text>Enter your payment details</Text>
      <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiring MM/YY"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV Code"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
      />
    <TouchableOpacity
        onPress={() => {
          navigation.navigate('Success', {
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity> 
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: "gray",
      width: "100%",
      borderRadius: 5,
    },
    button: {
      marginHorizontal: 8,
      backgroundColor: 'orange',
      height: 40,
      width: 100,
      padding: 12,
      borderRadius: 12 / 2,
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    }
  });


