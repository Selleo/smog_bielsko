import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Text, Dimensions }      from 'react-native'
import header from '../stylesheets/Header'
import ElevatedView from 'react-native-elevated-view'
const window = Dimensions.get('window');

export default class AirQualityIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };

    this.onLayout = this.onLayout.bind(this);
  }

  render() {
    var index = this.getAirConditionIndex(this.props.index);
    return (
      <View style={[styles.container, header.withShadow]}>
        <ElevatedView elevation={2} style={[header.elevatedView, header.alignCenter]}>
          <Text style={styles.text}>Jakość powietrza:</Text>
          <View style={styles.titleContainer}>
            <View backgroundColor={colors[index]} style={styles.circleContainer}>
              <View style={styles.circle}></View>
            </View>
            <Text style={styles.title}>{names[index]}</Text>
            <View backgroundColor={colors[index]} style={styles.circleContainer}>
              <View style={styles.circle}></View>
            </View>
          </View>
        </ElevatedView>
      </View>
    )
  }

  onLayout() {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
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
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20
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
    fontSize: 14,
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  title: {
    color: '#111',
    fontSize: 24,
    paddingBottom: 6,
    paddingHorizontal: 10,
  },
  circleContainer: {
    alignItems: 'center',
    borderRadius: 30,
    height: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 15,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
