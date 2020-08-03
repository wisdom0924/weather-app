import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading() {
  return (
    <LinearGradient colors={['#C6FFDD', '#FBD786', '#f7797d']} style={styles.container}>
      <View style={styles.doubleBD}>
        <StatusBar barStyle="dark-content" />

        {/* <Image style={styles.loadingImg} source={require('./assets/loading_image.png')} /> */}

        <Text style={styles.text}>WEATHER FORECAST</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
    // backgroundColor: '#fdf6aa',
  },
  text: {
    // color: '#2c2c2c',
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'white',
    padding: 30,
    // backgroundColor: 'red',
    margin: 4,
    marginTop: 4,
  },
  loadingImg: {
    width: 75,
    height: 75,
  },
  doubleBD: {
    borderWidth: 1,
    borderColor: 'white',
  },
});

/*
8) StatusBar를 import해주고
9) barStyle을 넣어줌
*/
