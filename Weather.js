import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  //10)
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FF7300', '#FEF253'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
  },
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subtitle: "Just don't go outside.",
  },
};
export default function Weather({ temp, condition }) {
  //13)
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}º</Text>
        <Text>{condition}</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds', 'Haze', 'Mist', 'Dust']).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/*
10) 큰 오브젝트를 생성해줌 - 그라디언트를 처리해주기 위함
11) 날씨가 name을 가질때, 예를 들어 Haze를 가질때(소문자로 쓰면 안되고, propTypes에 쓴 스펠 그대로 써줘야 함) 
⇒ Haze일때 iconName을 설정해줘야 하는데, 이 아이콘 이름은 공식문서의 MaterialCommunityIcons에서 Haze와 관련있는 아이콘 명을 찾아서 적어주면 됨
12) 렌더링한 MaterialCommunityIcons의 name을 weatherOptions으로 변경해줌
13) props에 condition을 넣어주고
14) name={weatherOptions}에 condition을 넣어줌. 그러면 name={weatherOptions[condition]} 이렇게 됨. 그리고, condition에 맞는 icon이 렌더링되게 하기 위해 뒤에 iconName붙여줌. 그러면 name={weatherOptions[condition].iconName}
⇒ 잘 렌더링 되는지 보기 위해 condition대신 Haze를 넣어서 확인 name={weatherOptions["Haze"].iconName}

15) 날씨가 name을 가질때 배경색상을 변경하기 위해 gradient색상을 줌
16) 그라디언트 컴포넌트에도 이름에 맞는 색상이 나오게 color값에 object명을 넣어줌
17) 그런데, 정의하지 않은 name 외의 것이 나오면 에러(TypeError)가 나오므로, 디폴트 아이콘을 넣어주도록 설정해줌 (추후에 해볼것)
*/
