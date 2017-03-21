import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet }                        from 'react-native'

import AirQualityIndex                 from './pollution/AirQualityIndex'
import CityInfo                        from './city/CityInfo'
import PollutionValues                 from './pollution/PollutionValues'

export default class StationDataRenderer extends Component {
  render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
          <ScrollView>
            <CityInfo city={this.props.dataStations.city} stationName={this.props.stationName} />

            <AirQualityIndex index={this.props.dataStations.aqi} style={styles.withShadow}/>
            <PollutionValues dataset={this.props.dataStations.iaqi} style={{ marginHorizontal:30 }}/>
          </ScrollView>
        </View>
      );
  }

  static propTypes = {
    dataStations: PropTypes.object.isRequired,
    pendingView: PropTypes.bool
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  }
});
