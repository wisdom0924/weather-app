import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types'; //5)

export default function Weather({ temp }) {
  //6-1)
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/*
5) props를 가져야 하므로 prop types를 설치해줌 [yarn add prop-types] 또는 [npm install prop-types]
6) View와 Text를 렌더링해줌. Text는 temperature가 될 예정임
7) stylesheet를 작성해줌
8) stylesheet를 View에 적용해줌
9) App.js에 Weather.js를 연결해줌

*/
