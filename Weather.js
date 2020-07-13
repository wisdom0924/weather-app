import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
//import { Ionicons } from '@expo/vector-icons'; //1)
import { MaterialCommunityIcons } from '@expo/vector-icons'; //2)

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name="weather-lightning-rainy" size={96} />
        <Text style={styles.temp}>{temp}º</Text>
        <Text>{condition}</Text>
      </View>
      <View style={styles.halfContainer} />
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds', 'Haze', 'Mist', 'Dust']).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/*
1) 공식문서에서 icon을 import해줌
⇒ 공식문서 보면, 아이콘 디렉토리 링크가 있음. 이걸 참고해서 아이콘을 봐봐
⇒ 검색에 sun을 검색해보면, feather묶음도 sun을 가지고 있고, fontawesome도 sun을 가지고 있어. 이중에서 맘에 드는 세트(그룹)을 import해서 사용해 주면 되는 방식임
또는 Filters 버튼 눌러보면 그룹들 이름이 쭉 나옴. 이중에서 하나 선택해서 import해서 사용
⇒ 여기서는 MaterialCommunityIcons 사용
2) 1)에서 import한 Ionicons를 MaterialCommunityIcons로 변경해줌
3) 아이콘을 렌더링해줌.(공식문서 참조해서 하면 됨)
4) 위치를 조정하기 위해, 컨테이너를 하나 더 만들어줌
5) 추가된 컨테이너에 스타일링을 해줌
*/
