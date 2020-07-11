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
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`); //5)
    this.setState({
      isLoading: false,
      //condition: 'Clear', //3)
      condition: weather[0].main,
      temp, //5)
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
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
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

/*
3) setState안에다가 condition을 넣어줌(확인을 위해 일단 name은 clear로 넣어줌)
4) condition이 화면에 렌더링되게 Weather에 넣어줌
근데 condition value는 Weather에 있다고 경고 뜸. 콘솔에 찍힌 정보를 확인해보니 이름 컨디션 코드는 weather 배열 안에 들어있는 걸 알수 있음
5) es6문법 써서 변경
6) 4)에서 weather 배열안에 들어있는 날씨 정보 코드를 읽어오기 위해 배열명을 추가해줌
7) 
8) 
9) 
*/
