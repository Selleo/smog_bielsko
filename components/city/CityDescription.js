import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CityDescription extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </View>
    )
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14
  }
});
