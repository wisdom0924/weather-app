import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '542c2571d30ab8d9f358dc8b5dd0530f';

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather, //6)
      },
    } = await axios({
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/weather',
      params: {
        lat: `${latitude}`,
        lon: `${longitude}`,
        // lat: 34.0194,
        // lon: 118.41134,
        APPID: `${API_KEY}`,
        units: 'metric',
        lang: 'kr',
      },
    });
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      // condition: 'Clouds',
      temp,
      description: weather[0].description,
      icon: weather[0].icon,
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
    const { isLoading, temp, condition, description, icon } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} description={description} icon={icon} />;
  }
}
