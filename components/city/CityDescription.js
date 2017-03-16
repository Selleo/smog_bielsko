import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'

import header from '../stylesheets/Header'

export default class CityDescription extends Component {
  render() {
    return (
      <View>
        <Text style={header.description}>
          {this.props.text}
        </Text>
      </View>
    )
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}
