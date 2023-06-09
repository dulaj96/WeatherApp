import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

//set date and time 2
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const WeatherItem = ({title, value, unit}) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({current, timezone, lat, lon}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    //to set date and time 1
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? 'pm' : 'am';

      setTime(
        (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
          ':' +
          (minutes < 10 ? '0' + minutes : minutes) +
          ampm,
      );

      setDate(days[day] + ', ' + date + ' ' + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subheading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidity" value={current? current.humidity : ''} unit="%" />
          <WeatherItem title="Pressure" value={current? current.pressure : ''} unit="hPA" />
          <WeatherItem title="Sunrise" value={current? current.sunrise : ''} unit="am" />
          <WeatherItem title="Sunset" value={current? current.sunset : ''} unit="pm" />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>{timezone}</Text>
        <Text style={styles.latlong}>{lat}N {lon}E</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  heading: {
    fontSize: 35,
    color: 'white',
    fontWeight: '100',
  },
  subheading: {
    fontSize: 20,
    color: '#eee',
    fontWeight: '300',
  },
  rightAlign: {
    textAlign: 'right',
    marginTop: 20,
  },
  timezone: {
    fontSize: 16,
    color: 'white',
  },
  latlong: {
    fontSize: 14,
    color: 'white',
    fontWeight: '700',
  },
  weatherItemContainer: {
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherItemTitle: {
    color: '#eee',
    fontSize: 14,
    fontWeight: '100',
  },
});

export default DateTime;
