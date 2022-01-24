import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {MenuPage} from './screens/MenuPage';
import {ProductDetails} from './screens/ProductDetails';
import { Cart } from './screens/Cart';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import DeliveryLocation from './screens/DeliveryLocation';
//import StripeApp from "./screens/StripeApp";
//import { StripeProvider } from "@stripe/stripe-react-native";
//import AppPay from "./AppPay";
import Payment from './screens/Payment';
//import PaymentSuccess from './screens/PaymentSuccess';
import Success from './screens/Success';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="MenuPage" component={MenuPage}
        options={({ navigation }) => ({
          title: 'Menu Page',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation}/>,
        })} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />        
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='DeliveryLocation' component={DeliveryLocation} 
          options={({ navigation }) => ({
            title: 'Delivery Location',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Payment' component={Payment}
          options={({ navigation }) => ({
            title: 'Payment',
            headerTitleStyle: styles.headerTitle,
            //headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Success' component={Success}
          options={({ navigation }) => ({
            title: 'Success',
            headerTitleStyle: styles.headerTitle,
            //headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});