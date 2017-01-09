import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import StationDataRenderer from '../components/StationDataRenderer'

export default class Index extends Component {
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
    titles = this.state.titles
    return (
      <StationDataRenderer stationId='6535' />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  }
})
