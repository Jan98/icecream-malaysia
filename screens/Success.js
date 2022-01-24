import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Success({navigation}) {
  return (
    <View style={styles.container}>
     <Text>
      Payment Successful!
    </Text>
    <TouchableOpacity
        onPress={() => {
          navigation.navigate('MenuPage', {
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ok</Text>
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
    fontSize: 40,
},
button: {
    alignItems: "center",
    backgroundColor: 'orange',
    padding: 10,
    marginBottom: 10,
    borderRadius: 22 / 2,
  },
buttonText: {
   fontSize: 20,
   color: 'white',
   fontWeight: 'bold',
},
Text: {
  fontSize: 20,
}
});

