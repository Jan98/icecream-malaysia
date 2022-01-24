import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker} from "react-native-maps";
import * as Location from 'expo-location';

let apiKey = 'AIzaSyBcRwxz2B3rws6fh8C17B_ydD0l73sw5sc'; // https://console.cloud.google.com/

export default function DeliveryLocation({navigation}) {
  const [location, setLocation] = useState(null);
  
  const [region, setRegion ] = React.useState({
      latitude: 3.25166566,
      longitude: 101.73583039,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
  });

  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      Location.setGoogleApiKey(apiKey);
      console.log(status)
      let { coords } = await Location.getCurrentPositionAsync();
      setLocation(coords);
      console.log(coords);
      if (coords) {
        let { longitude, latitude } = coords;
        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
      }
    })();
  };

  return (
    <View style={styles.container}>
      
        <MapView style={{height:'60%', width:'100%'}}
          initialRegion={{
            latitude: 3.25166566,
            longitude: 101.73583039,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
            provider={PROVIDER_GOOGLE}
        >
          <Marker coordinate={region} />
        </MapView>
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}> Get Specific Coordinate </Text> 
      </TouchableOpacity>      
      <Text style={styles.big}>
        {!location
          ? ' '
          : `Latitude: ${location.latitude}, Longitude: ${
              location.longitude
            } `}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Payment', {
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Payment</Text>
      </TouchableOpacity>  
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 12 / 2,
    alignItems: "center",
    //marginBottom: 10,
  },
  buttonPay: {
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding: 10,
    marginBottom: 10,
  },
  buttonBack: {
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding: 10,
  },
  title: {
  fontSize: 20,
  textAlign: 'center',
  margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
