import React, { Component, PropTypes } from 'react'
import { View }                        from 'react-native'

import AirQualityIndex                 from './pollution/AirQualityIndex'
import CityInfo                        from './city/CityInfo'
import PollutionValues                 from './pollution/PollutionValues'

export default class StationDataRenderer extends Component {
  render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
          <CityInfo city={this.props.dataStations.city} stationName={this.props.stationName} />
          <AirQualityIndex index={this.props.dataStations.aqi}/>
          <PollutionValues dataset={this.props.dataStations.iaqi}/>
        </View>
      );
  }

  static propTypes = {
    dataStations: PropTypes.object.isRequired,
    pendingView: PropTypes.bool
  };
}
