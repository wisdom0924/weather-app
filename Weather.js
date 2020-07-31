import React from 'react';
import { AppRegistry, StyleSheet, View, Text, StatusBar, Image } from 'react-native';
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
    subtitle: 'Is like rain, but gay 🏳️‍🌈',
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
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Dusty',
    subtitle: 'Thanks a lot China 🖕🏻',
  },
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subtitle: "Just don't go outside.",
  },
};
export default function Weather({ temp, condition, description, icon }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        {/* <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" /> */}
        <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }} />
        <Text style={styles.temp}>{temp}º</Text>
        <Text style={styles.miniTitle}>{description}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds', 'Haze', 'Mist', 'Dust']).isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
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
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  miniTitle: {
    color: 'white',
    marginTop: 10,
  },
});
