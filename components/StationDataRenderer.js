import React, { Component, PropTypes } from 'react'
import { View, Text }                        from 'react-native'

import AirQualityIndex                 from './pollution/AirQualityIndex'
import CityInfo                        from './city/CityInfo'
import PollutionValues                 from './pollution/PollutionValues'

import loading from './stylesheets/Loading'
export default class StationDataRenderer extends Component {
  render() {
    if (this.props.pendingView) {
      return (
        <View style={loading.loadingContainer}>
          <Text style={loading.loadingText}>Loading</Text>
        </View>
      )
    } else {
      return (
        <View>
          <CityInfo city={this.props.dataStations.city}/>
          <AirQualityIndex index={this.props.dataStations.aqi}/>
          <PollutionValues dataset={this.props.dataStations.iaqi}/>
        </View>
      );
    }
  }

  static propTypes = {
    dataStations: PropTypes.object.isRequired,
    pendingView: PropTypes.bool
  };
}
