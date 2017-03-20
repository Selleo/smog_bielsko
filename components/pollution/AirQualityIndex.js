import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Text }      from 'react-native'

export default class AirQualityIndex extends Component {
  render() {
    var index = this.getAirConditionIndex(this.props.index);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Jakość powietrza:</Text>
        <View style={styles.titleContainer}>
          <Text backgroundColor={colors[index]} style={styles.circle}></Text>
          <Text style={styles.text}>{names[index]}</Text>
          <Text backgroundColor={colors[index]} style={styles.circle}></Text>
        </View>
      </View>
    )
  }

  getAirConditionIndex(aqi) {
    if (aqi < 50) { return 0 }
    if (aqi < 100) { return 1 }
    if (aqi < 150) { return 2 }
    if (aqi < 200) { return 3 }
    if (aqi < 300) { return 4 }
    return 5
  }

  static propTypes = {
    index: PropTypes.number.isRequired
  };
}

const names = [
  'Dobra',
  'Średnia',
  'Kiepska',
  'Zła',
  'Bardzo zła',
  'Zagrożenie życia'
];

const colors = [
  '#2DB338',
  '#86B32D',
  '#B3AA2D',
  '#B5753E',
  '#B34F2D',
  '#7D6363'
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 15,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  text: {
    color: '#111',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  circle: {
    borderRadius: 30,
    backgroundColor: 'red',
    height: 10,
    width: 10,
  }
});
