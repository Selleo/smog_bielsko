import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class DrawerHeader extends Component {
  static get defaultProps() {
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#222',
    paddingHorizontal: 20,
    paddingBottom: 20
  }
})
