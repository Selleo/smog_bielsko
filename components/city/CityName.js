import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CityName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#363636'
  }
})
