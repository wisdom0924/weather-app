import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Is like rain, but gay',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Rain',
    subtitle: '우산 챙기세요',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: 'Cold as balls',
    subtitle: 'Do you want to build a snowman? Fuck no.',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FF7300', '#FEF253'],
    title: 'Clear',
    subtitle: '광합성 하세요^^',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, fucking boring',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Mist!',
    subtitle: "It's like you have no glasses on.",
  },

  Smoke: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Smoke',
    subtitle: 'Thanks a lot China',
  },
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subtitle: 'Thanks a lot China',
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Dusty',
    subtitle: 'Thanks a lot China',
  },

  Fog: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Fog',
    subtitle: 'Thanks a lot China',
  },

  Sand: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Sand',
    subtitle: 'Thanks a lot China',
  },
  Ash: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Ash',
    subtitle: 'Thanks a lot China',
  },
  Squall: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Squall',
    subtitle: 'Thanks a lot China',
  },
  Tornado: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Tornado',
    subtitle: 'Thanks a lot China',
  },
};
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
export default function Weather({ temp, condition, description, icon, name, date }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.inner1}>
        <Text style={styles.cityname}>{name}</Text>
      </View>
      <View style={styles.inner2}>
        <View style={styles.halfContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
          />
          <Text style={styles.temp}>{temp}º</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          {/* <Text>오늘({date})의 날씨</Text> */}
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>

          {/* <View style={styles.table}>
            <View style={styles.halfTable}>
              <View style={styles.halfTableInner}>
                <Text>일출</Text>
                <Text>오전 5:35</Text>
              </View>
              <View style={styles.halfTableInner}>
                <Text>일몰</Text>
                <Text>오후 7:41</Text>
              </View>
            </View>
            <View style={styles.halfTable}>
              <View style={styles.halfTableInner}>
                <Text>습도</Text>
                <Text>76%</Text>
              </View>
              <View style={styles.halfTableInner}>
                <Text>체감온도</Text>
                <Text>32도</Text>
              </View>
            </View>
          </View> */}
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado']).isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    flex: 1,
  },
  inner1: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inner2: {
    flex: 10,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    // flex: 1,
  },
  cityname: {
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  desc: {
    color: 'white',
    marginTop: 10,
  },
  title: {
    fontSize: 44,
    color: 'white',
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  // table: {
  //   flex: 1,
  //   borderColor: 'red',
  //   borderWidth: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   // alignItems: 'stretch',
  //   // flexWrap: 'wrap',
  // },
  // halfTable: {
  //   borderColor: 'blue',
  //   borderWidth: 1,
  //   // flex: 1,
  //   // flex: 1,
  //   // flexDirection: 'row',
  //   // alignItems: 'stretch',
  //   // alignContent: 'stretch',
  // },
  // halfTableInner: {
  //   borderColor: 'green',
  //   borderWidth: 1,
  //   // alignItems: 'stretch',
  //   // flex: 1,
  // },
});
