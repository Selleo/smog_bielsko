import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class DrawerCityLink extends Component {
  static get defaultProps() {
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.closeDrawer(this.props.station.id) }
        style={this.isActive() ? styles.active : null}
        underlayColor='#aca'
      >
        <Text style={styles.text}>
          {this.props.station.name}
        </Text>
      </TouchableHighlight>
    )
  }

  isActive() {
    return this.props.station.id == this.props.getCurrentStationId();
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#444',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  active: {
    backgroundColor: '#aca'
  }
})
