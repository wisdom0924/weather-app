import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios'; //2)

const API_KEY = '542c2571d30ab8d9f358dc8b5dd0530f'; //1)

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    //3) //5)
    //const weathers = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`); //6)
    //console.log(weathers); //7)

    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`); //8)
    console.log(data); //9)
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude); //4)
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  componentDidMount() {
    this.getLocation();
    //this.getWeather();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

/*
1) openweathermap.org에서 발급받은 key를 변수로 만들어줌
⇒ openweathermap.org로 가서 발급받은 key로 뭘 할수 있는지 봐봐~ 메뉴>API>Current weather data에서 By geographic coordinates를 사용하면 됨.(우리는 CITY NAME도 없고, city ID도 없음)
⇒ By geographic coordinates부분에 API call을 이렇게 하라고 나와있음
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
http://api.openweathermap.org/data/2.5/weather?lat=37.4219678&lon=-122.0839831&appid=542c2571d30ab8d9f358dc8b5dd0530f
브라우저에, 이전에 콘솔로 나왔던 위도 경도와 key값을 넣어서 결과물 확인
⇒ API를 잘 가져오는데 단, 시뮬레이터의 디폴트값이 US라서 위도 경도가 그렇게 나오는 거야

2) API데이터 fetch를 위해 axios 설치 [yarn add axios] 또는 [npm install axios] + import해줌
3) 새로운 함수를 만들어줌(getWeather)
4) getWeather함수를 호출해줌
5) 위도와 경도 인자가 함수에 넘겨질 수 있게 getWeather함수에도 인자를 넣어줌
6) 브라우저에서 확인한 API URL을 변수값 넣어서 axios가 받아올 수 있게 작성해줌
7) 콘솔로 데이터를 찍어봐
8) 그런데 콘솔에 나온 데이터 중 우리는 data부분만 필요하니까 변수명을 수정해줌
9) data를 콘솔에 찍어줌
Object {
  "base": "stations",
  "clouds": Object {
    "all": 40,
  },
  "cod": 200,
  "coord": Object {
    "lat": 37.42,
    "lon": -122.08,
  },
  "dt": 1594441227,
  "id": 5375480,
  "main": Object {
    "feels_like": 292.74,
    "humidity": 56,
    "pressure": 1015,
    "temp": 294.83,
    "temp_max": 296.48,
    "temp_min": 293.71,
  },
  "name": "Mountain View",
  "sys": Object {
    "country": "US",
    "id": 5845,
    "sunrise": 1594385777,
    "sunset": 1594438251,
    "type": 1,
  },
  "timezone": -25200,
  "visibility": 16093,
  "weather": Array [
    Object {
      "description": "scattered clouds",
      "icon": "03n",
      "id": 802,
      "main": "Clouds",
    },
  ],
  "wind": Object {
    "deg": 330,
    "speed": 4.1,
  },
}
이렇게 정보가 잘 나오는걸 알수 있음
*/
