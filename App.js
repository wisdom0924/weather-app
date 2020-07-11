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
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    //console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp }); //11)
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
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />; //10) //12)
  }
}

/*
10) null대신에 <Weather />을 넣어줌 
11) <Weather />에 temp를 불러와야 하는데, 얘를 하려면 우리가 원하는 데이터 구조를 먼저 봐야함
⇒ 브라우저에 켜둔 API정보 구조를 보고 temp의 구조를 확인하면, data.main.temp로 되어있는걸 알 수 있음
⇒ 기존의 getLocation에 있던 setState를 getWeather로 위치 변경해주고, temp데이터를 넣어줌
⇒ 여기까지 하면 화면에 온도가 뜨게 됨(브라우저꺼로 보면 현재 위치 온도가 나오고, 시뮬레이터는 미국 온도가 나옴. 안드로이드 폰 앱, 아이폰 앱에서도 확인해봤더니 위치온도가 나옴)
12) 소수점 처리하기 위해 Math함수 사용해줌
*/
