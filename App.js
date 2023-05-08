import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import DateTime from './src/components/DateTime';
import WeatherScroll from './src/components/WeatherScroll';
import Geolocation from '@react-native-community/geolocation';

const API_KEY = 'ff6e484aff9b10e07bfb6c6fd3d3292b';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      let {latitude, longitude} = success.coords;
      fetchDataFromApi(latitude, longitude)
    }, (err) => {
      if(err) {
        fetchDataFromApi('7.8731', '80.7718')
      }
    })
    // (async () => {
    //   let {status} = await Location.requestForegroundPermissionsAsync();
    //   if (status !== 'granted') {
    //     fetchDataFromApi('7.8731', '80.7718'); //change your need location's latitude and longitude
    //     return;
    //   }

    //   let location = await Location.getCurrentPositionAsync({});
    //   fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    // })();
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setData(data);
      });
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('./src/assets/image.png')}
        style={{flex: 1, justifyContent: 'center', resizeMode: 'cover'}}>
        <DateTime
          current={data.current}
          timezone={data.timezone}
          lat={data.lat}
          lon={data.lon}
        />
        <WeatherScroll />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
