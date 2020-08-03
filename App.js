import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';
import moment from 'moment';
import 'moment/locale/ko';

const API_KEY = '542c2571d30ab8d9f358dc8b5dd0530f';
moment.locale('ko');
export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp, humidity, feels_like, temp_min, temp_max, pressure },
        weather,
        name,
        sys: { sunrise, sunset },
        dt,
        visibility,
      },
    } = await axios({
      method: 'get',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      params: {
        lat: `${latitude}`,
        lon: `${longitude}`,
        // lat: 38.0194,
        // lon: 118.41134,
        // 지역테스트
        // lat: 37.620846,
        // lon: 126.69757999999997,
        APPID: `${API_KEY}`,
        units: 'metric',
        lang: 'kr',
      },
    });
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      // condition: 'Tornado',
      temp,
      humidity,
      feels_like,
      description: weather[0].description,
      icon: weather[0].icon,
      name,
      sunrise: moment.unix(sunrise).format('a hh:mm'),
      sunset: moment.unix(sunset).format('a hh:mm'),
      temp_min,
      temp_max,
      dt: moment.unix(dt).format('MMMM Do dddd'),
      visibility: visibility / 1000,
      pressure,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      // console.log(response);
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, description, icon, name, sunrise, sunset, humidity, feels_like, temp_min, temp_max, nowtime, dt, pressure, visibility } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        description={description}
        icon={icon}
        name={name}
        sunrise={sunrise}
        sunset={sunset}
        humidity={humidity}
        feels_like={feels_like}
        temp_min={temp_min}
        temp_max={temp_max}
        dt={dt}
        pressure={pressure}
        visibility={visibility}
      />
    );
  }
}
