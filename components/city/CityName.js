import React, { Component, PropTypes } from 'react'
import { Text, View }                  from 'react-native'

import header                          from '../stylesheets/Header'

export default class CityName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={header.title}>
          {this.props.text}
        </Text>
      </View>
    )
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}
