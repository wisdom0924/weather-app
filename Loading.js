import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'; //8)

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fdf6aa',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
  },
});

/*
8) StatusBar를 import해주고
9) barStyle을 넣어줌
*/
