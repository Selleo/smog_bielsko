import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Env from '../env.js'
import CityInfo from './city/CityInfo'
import PollutionValues from './pollution/PollutionValues'
import AirQualityIndex from './pollution/AirQualityIndex'

export default class StationDataRenderer extends Component {
  static get defaultProps() {
    return {
      stationId: 6535
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      pending: true
    };
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    if (this.state.pending) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      )
    } else {
      return (
        <View>
          <CityInfo city={this.state.data.city} />
          <AirQualityIndex index={this.state.data.aqi} />
          <PollutionValues dataset={this.state.data.iaqi} />
        </View>
      )
    }
  }

  getData() {
    return fetch('http://api.waqi.info/feed/@' + this.props.stationId + '/?token=' + Env.API_KEY)
      .then((response) => response.json())
      .then((responseJson) => {
        return this.setState({data: responseJson.data, pending: false})
      })
  }

  static propTypes = {
    stationId: PropTypes.number.isRequired,
  };
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center'
  }
});
