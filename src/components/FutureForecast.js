import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FutureForecast = () => {
  return (
    <View style={{flexDirection: 'row', }}>
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
    </View>
  );
};

const FutureForecastItem = () => {
  const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'};
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>Mon</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Night - 28&#176;C</Text>
      <Text style={styles.temp}>Day - 35&#176;C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  futureForecastItemContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000033',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  day: {
    fontSize: 18,
    color:"white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign:"center",
    borderRadius: 20,
    fontWeight: "200",
    marginBottom: 15
}, 
temp: {
    fontSize: 14,
    color:"white",
    fontWeight:"100",
    textAlign:"center"
},  
});

export default FutureForecast;
