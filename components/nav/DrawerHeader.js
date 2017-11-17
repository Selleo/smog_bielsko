import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text }            from 'react-native';

export default class DrawerHeader extends Component {
  render() {
    return (
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    )
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#222',
    paddingHorizontal: 20,
    paddingBottom: 20
  }
});
