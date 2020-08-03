import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, ScrollView, SafeAreaView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#09060D', '#7E6278', '#020303'],
    title: 'Thunderstorm',
    subtitle: '안전사고에 유의하세요.',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#C2D5E7', '#809FB0', '#2D393D', '#121514'],
    title: 'Drizzle',
    subtitle: '가늘고 조용히 보슬비가 내립니다.',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Rain',
    subtitle: '우산 꼭 챙기세요',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#ddddee', '#ccddff', '#bbccee', '#aaaacc', '#B9B6E5'],
    title: 'Snow',
    subtitle: 'Do you want to build a snowman?',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Atmosphere',
    subtitle: '현재 대기 상태를 알려드립니다.',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FEF253', '#FF7300'],
    gradient: ['#9FDBF8', '#7CC7F7', '#5EB5F7', '#3383E6'],
    title: 'Clear',
    subtitle: '광합성 하세요^^',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#EEF2F3', '#C1C1C1', '#AAAAAA'],
    title: 'Clouds',
    subtitle: '구름낀 날씨로 흐릿하지만 선크림은 꼭 바르세요. ',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#f8f8f8', '#ececec', '#e0e0e0', '#d4d4d4', '#c7c7c7', '#b6b6b6', '#aaaaaa'],
    title: 'Mist!',
    subtitle: '옅은 안개(박무)가 낀 날입니다. 운전 조심하세요.',
  },

  Smoke: {
    iconName: 'weather-hail',
    gradient: ['#99aaaa', '#AB9484', '#A38B79'],
    title: 'Smoke',
    subtitle: '마스크 준비하세요.',
  },
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#E1DDD4', '#E5E6E4', '#DBD7CE', '#DFDBD2', '#9B9B9B'],
    title: 'Haze',
    subtitle: '연무가 낀 날입니다.',
  },
  Dust: {
    //미세먼지
    iconName: 'weather-hail',
    gradient: ['#b8cbb8', '#e2c58b', '#c2ce9c', '#7edbdc'],
    title: 'Dusty',
    subtitle: 'Thanks a lot China',
  },

  Fog: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Fog',
    subtitle: '안개가 짙습니다. 가시거리가 매우 짧으니 교통 안전에 유의하세요.  ',
  },

  Sand: {
    //황사
    iconName: 'weather-hail',
    gradient: ['#A29E9D', '#D1C5B9', '#E8D9C6', '#E1D1C1', '#E7CFB5'],
    title: 'Sand',
    subtitle: '윽 황사😡',
  },
  Ash: {
    iconName: 'weather-hail',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Ash',
    subtitle: '화산재가 날린다고오? 이게 나올 일이 있을까?;',
  },
  Squall: {
    iconName: 'weather-hail',
    gradient: ['#a2b6df', '#6b8cce', '#0c3483'],
    title: 'Squall',
    subtitle: '돌풍을 동반한 많은 비가 내립니다. 가능한 외출을 자제하세요.',
  },
  Tornado: {
    iconName: 'weather-hail',
    gradient: ['#360033', '#0b8793'],
    title: 'Tornado',
    subtitle: '토네이도, 혹시나 요게 나오면 지하로 대피하세요',
  },
};

export default function Weather({ temp, condition, description, icon, name, sunrise, sunset, humidity, feels_like, temp_min, temp_max, dt, pressure, visibility }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content" />

          <View style={styles.inner1}>
            <Text style={styles.cityname}>{name}</Text>
          </View>

          <View style={styles.inner2}>
            <View style={styles.halfContainer}>
              <View>
                <Image
                  style={styles.image}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                  }}
                />
              </View>
              <Text style={{ ...styles.temp, ...styles.textShadow }}>{temp}º</Text>
              <Text style={{ ...styles.desc, ...styles.textShadow }}>{description}</Text>
            </View>

            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
              {/* <Text>오늘({date})의 날씨</Text> */}
              <Text style={{ ...styles.title, ...styles.textShadow }}>{weatherOptions[condition].title}</Text>
              <Text style={{ ...styles.subtitle, ...styles.textShadow }}>{weatherOptions[condition].subtitle}</Text>
              <Text style={styles.desc2}>
                오늘({dt}) : 현재 날씨 {description}. 현재 기온은 {temp}º이며, 오늘 예상 최고 기온은 {temp_max}º, 최저기온은 {temp_min}º입니다.
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
                <View style={styles.halfTable}>
                  <View style={styles.halfTableInner}>
                    <Text style={styles.tableSubtit}>기압</Text>
                    <Text style={styles.tableValue}>{pressure}hPa</Text>
                  </View>
                  <View style={styles.halfTableInner}>
                    <Text style={styles.tableSubtit}>가시거리</Text>
                    <Text style={styles.tableValue}>{visibility}km</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  pressure: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  inner1: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inner2: {
    flex: 10,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  cityname: {
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },

  temp: {
    fontSize: 48,
    color: 'white',
  },

  desc: {
    color: 'white',
    fontSize: 24,
    marginTop: 10,
  },
  desc2: {
    color: 'white',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
    marginBottom: 2,
    ...Platform.select({
      android: {
        marginBottom: 0,
      },
    }),
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  table: {
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
    borderBottomColor: 'white',
    borderStyle: 'dotted',
    borderBottomWidth: 1,
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
