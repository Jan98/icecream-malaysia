import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomecontainer}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.storeName}>I Scream Ice Cream</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MenuPage', {
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Menu Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    //ImageBackground: require('../assets/products/ice-cream-malaysia.png'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomecontainer: {
    //background: '#ffccff',
  },
   button: {
    backgroundColor: 'orange',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  storeName: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  welcome: {
    alignItems: 'center',
    fontSize: 20,
  }
})