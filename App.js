import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 1, //2)
    backgroundColor: 'yellow',
  },
  blueView: {
    flex: 2, //3)
    backgroundColor: 'blue',
  },
});

/*
리액트 네이티브에서 flex작동 확인하기
1) View안에 또다른 View 두개를 더 만들어서 배경 색상을 다르게 적용해준다
2) flex:1을 줘서 모든 공간이 사용 가능하게 설정해주는데, 여기서의 경우에는 이게 불가능함. 왜냐하면, 또다는 flex컨테이너가 옆에 붙어있기 때문임
3) 여기에 flex:2를 주면 파랑바탕이 2/3을 차지하는 걸 볼 수 있음
⇒ 따라서, 전체 공간을 다 차지하고 싶다면 flex:1을 주고, 형제들(yellow, blue)가 있다면 숫자를 변경해서 주면 됨
이 외의 flexWrap, noWrap, justifyContent, alignItems 등도 마찬가지 임.
⇒ 즉, 리액트 네이티브에서는 width, height등을 (많이) 쓰지 않고 flex로 레이아웃 코딩을 권장함 - 이렇게 해야 디바이스 사이즈에 맞게 맞춰짐. 
*/
