import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; //1)

export default function Loading() {
  //4)
  //3)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //2)
  container: {
    flex: 1,
    justifyContent: 'flex-end', //7)
    //padding: 30,
    paddingHorizontal: 30, //8)
    paddingVertical: 100, //8)
    backgroundColor: '#fdf6aa',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
    // fontSize: '20px',
  },
});

/*
기본 구조 만들기
1) 리액트 네이티브에서는 StyleSheet, Text, View를 import해야함
2) styled-component를 작성해주고,
3) Loading함수를 만들어서 View를 리턴해줌.
4) export해줌
5) App.js에 import해줌
6) App.js 참조
7) 텍스트 위치를 조정하기 위해 flex작업을 해줌
8) paddingHorizontal, paddingVertical은 css에는 없지만 리액트 네이티브에서 사용하는 거임. 
9) 
*/
