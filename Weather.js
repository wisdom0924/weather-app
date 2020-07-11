import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds', 'Haze', 'Mist', 'Dust']).isRequired, //1)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/*
1) name의 종류를 다 알기 위해  openweathermap.org>메뉴>API>Current weather data에서 List of weather condition codes 확인 
⇒ 날씨 컨디션 코드 리스트들이 있음(weather condition codes) 
⇒ propTypes에 추가해줌
근데 에뮬레이터에 value가 undefined라고 경고 뜸  ⇒ condition name을 넣어줘야 한다는 의미임
2) App.js로 이동


*/
