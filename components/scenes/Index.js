import React, { Component, PropTypes } from 'react';

import StationDataRenderer  from './../StationDataRenderer'

export default class Index extends Component {
  render() {
    return (
      <StationDataRenderer dataStations={this.props.dataStations} stationName={this.props.stationName}/>
    )
  }

  static propTypes = {
    dataStations: PropTypes.object.isRequired,
    nav: PropTypes.object,
    stationName: PropTypes.string
  };
}
