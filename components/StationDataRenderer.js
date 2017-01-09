import React, { Component } from 'react';
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
    titles = this.state.titles
    if (this.state.pending) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}> Loading </Text>
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

  getDataAttribute(attr) {
    return this.state.data && this.state.data[attr];
  }

  getData() {
    return fetch('http://api.waqi.info/feed/@' + this.props.stationId + '/?token=' + Env.API_KEY)
      .then((response) => response.json())
      .then((responseJson) => {
        return this.setState({data: responseJson.data, pending: false})
      })
      .catch((error) => {
        console.error(error);
      });
  }
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
})
