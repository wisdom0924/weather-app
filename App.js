import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
  state = {
    //10)
    isLoading: true,
  };

  geoLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      //const { coords } = await Location.getCurrentPositionAsync(); //6)
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync(); //8)

      this.setState({ isLoading: false }); //13)

      console.log(coords.latitude, coords.longitude); //7)

      //Send to API and get weather //9)
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  componentDidMount() {
    this.geoLocation();
  }
  render() {
    const { isLoading } = this.state; //11)
    return isLoading ? <Loading /> : null; //12)
  }
}

/*
6) coords를 가져오기 위해 비구조화할당해줌
7) 37.4219635 -122.0839871 이렇게 뜸
8) coords에 latitude, longitude를 넣어서 coords.latitude, coords.longitude 이렇게 길게 안쓰게 변경해줌
9) 콘솔에 나타나는 정보를 API로 전송해서 날씨를 가져옴
10) 날씨를 가져오기 전에 state를 작성해줌
11) render안에 넣어줌
12) true일때 <Loading/>을 리턴하고 아니면 null을 리턴하게 작성해서 잘 작동하는지 확인
13) setState를 작성해줌
*/
