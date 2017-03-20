import React, { Component, PropTypes } from 'react'
import { View, ScrollView }                        from 'react-native'

import AirQualityIndex                 from './pollution/AirQualityIndex'
import CityInfo                        from './city/CityInfo'
import PollutionValues                 from './pollution/PollutionValues'

export default class StationDataRenderer extends Component {
  render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
          <CityInfo city={this.props.dataStations.city} stationName={this.props.stationName} />
          <ScrollView>
            <AirQualityIndex index={this.props.dataStations.aqi}/>
            <PollutionValues dataset={this.props.dataStations.iaqi}/>
          </ScrollView>
        </View>
      );
  }

  static propTypes = {
    dataStations: PropTypes.object.isRequired,
    pendingView: PropTypes.bool
  };
}
