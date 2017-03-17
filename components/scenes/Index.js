import React, { Component } from 'react';

import StationDataRenderer  from './../StationDataRenderer'

export default class Index extends Component {
  render() {
    return (
      <StationDataRenderer stationId={this.props.stationId} dataStations={this.props.dataStations}
                           pendingView={this.props.pendingView} stationName={this.props.stationName} />
    )
  }
}
