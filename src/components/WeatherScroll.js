import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

import FutureForecast from './FutureForecast';

const WeatherScroll = () => {
  return (
    <ScrollView style={styles.scrollView}  horizontal showsHorizontalScrollIndicator={false}>
      <CurrentTempE1 />
      <FutureForecast />
    </ScrollView>
  );
};

const CurrentTempE1 = () => {
  return (
    <View style={styles.currentTempContainer}>
      <Image
        source={{uri: 'http://openweathermap.org/img/wn/10d@2x.png'}}
        style={styles.image}
      />
      <View style={styles.otherContainer}>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.temp}>Night - 28&#176;C</Text>
        <Text style={styles.temp}>Day - 35&#176;C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: '#18181bcc',
    padding: 30,
    
  },
  currentTempContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 50,
  },
  image: {
    width: 150,
    height: 150,
  },
  otherContainer: {
    paddingRight: 5,
  },
  day: {
    fontSize: 18,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    fontWeight: '200',
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
});

export default WeatherScroll;
