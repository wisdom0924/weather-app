import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components';

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
    gradient: ['#FEF253', '#FF7300'],
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

export default function Weather({ temp, condition, description, icon, name, sunrise, sunset, humidity, feels_like, temp_min, temp_max, dt }) {
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
          <Text style={styles.desc2}>
            오늘({dt}) : 현재 날씨 {description}. 현재 기온은 {temp}이며, 오늘 예상 최고 기온은 {temp_max}, 최저기온은 {temp_min}입니다.
          </Text>

          <View style={styles.table}>
            <View style={styles.halfTable}>
              <View style={styles.halfTableInner}>
                <Text style={styles.tableSubtit}>일출</Text>
                <Text style={styles.tableValue}>{sunrise}</Text>
              </View>
              <View style={styles.halfTableInner}>
                <Text style={styles.tableSubtit}>일몰</Text>
                <Text style={styles.tableValue}>{sunset}</Text>
              </View>
            </View>
            <View style={styles.halfTable}>
              <View style={styles.halfTableInner}>
                <Text style={styles.tableSubtit}>습도</Text>
                <Text style={styles.tableValue}>{humidity}%</Text>
              </View>
              <View style={styles.halfTableInner}>
                <Text style={styles.tableSubtit}>체감온도</Text>
                <Text style={styles.tableValue}>{feels_like}º</Text>
              </View>
            </View>
          </View>
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
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  feels_like: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  dt: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    // marginTop: Constants.StatusBarHeight,
  },
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
    // backgroundColor: 'skyblue',
    // borderColor: 'yellow',
    // borderWidth: 2,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    // flex: 1,
  },
  cityname: {
    color: '#333',
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
    fontSize: 20,
    marginTop: 10,
  },
  desc2: {
    color: 'white',
    marginTop: 10,
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  table: {
    // flex: 1,
    width: '100%',
    borderTopColor: 'white',
    borderBottomColor: 'white',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  halfTable: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 5,
  },
  halfTableInner: {
    width: '50%',
  },
  tableSubtit: {
    fontSize: 12,
    color: 'white',
  },
  tableValue: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});
