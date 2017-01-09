import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class AirQualityIndex extends Component {
  static get defaultProps() {
    return {

    };
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var index = this.getAirConditionIndex(this.props.index);
    return (
      <View style={styles.container} backgroundColor={colors[index]}>
        <Text style={styles.text}> Jakość powietrza: {names[index]} </Text>
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
}

const names = [
  'Dobra',
  'Średnia',
  'Kiepska',
  'Zła',
  'Bardzo zła',
  'Zagrożenie życia'
]

const colors = [
  '#2DB338',
  '#86B32D',
  '#B3AA2D',
  '#B5753E',
  '#B34F2D',
  '#7D6363'
]

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: '#111'
  }
})
