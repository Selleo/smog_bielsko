import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CityName from './CityName'
import CityDescription from './CityDescription'

export default class CityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <CityName text={this.getCityInfo(0)} />
        <CityDescription text={this.getCityInfo(1)} />
      </View>
    )
  }

  getCityInfo(part) {
    return this.props.city.name.split(', ')[part]
  }

  static propTypes = {
    city: PropTypes.object.isRequired,
  };
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 15
  }
});
