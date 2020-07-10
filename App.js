import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
  geoLocation = async () => {
    //6)
    //const location = await Location.getCurrentPositionAsync(options); //7)
    const location = await Location.getCurrentPositionAsync(); //10)
    console.log(location); //8)
  };
  componentDidMount() {
    this.geoLocation(); //9)
  }
  render() {
    return <Loading />;
  }
}

/*

6) 근데 이거는 await functionality임. 따라서 함수를 만들어서(geoLocation), 이걸 async로 해주고 
7) 공식문서에서 getCurrentPositionAsync를 await로 만들고 변수만들어서 넣어줌
8) location을 콘솔로 찍어보고, 
9) geoLocation함수를 componentDidMount에 넣어줌
10) 그런데, 아직 7)에서 option이 정의되지 않았으므로, 다시 공식문서에서 option을 보고 넣어줌
⇒ accuracy의 경우, Lowest, Low, High 등등 여러개가 있음. 근데 다 필요없고 그냥 디폴트로 두기 위해 options을 지워줌 ㅎㅎ
⇒ 여기까지 하고 시뮬레이터 또는 안드로이드 폰 또는 
*/
