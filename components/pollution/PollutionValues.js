import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class PollutionValues extends Component {
  render() {
    let rows = [];
    for (var i = 0; i < this.getDatasetKeys().length; i++) {
      let key = this.getDatasetKeys()[i];
      let item = this.getDatasetItem(i);
      rows.push(<Text style={styles.dataRow} key={i}>{names[key]}: {item.v}{suffices[key]}</Text>)
    }

    return (
      <View style={styles.container}>
        {rows}
      </View>
    )
  }

  getDatasetKeys() {
    return Object.keys(this.props.dataset);
  }

  getDatasetItem(index) {
    return this.props.dataset[this.getDatasetKeys()[index]]
  }

  static propTypes = {
    dataset: PropTypes.object.isRequired
  };
}

const names = {
  'pm10': 'Pył zawieszony',
  'o3': 'Ozon',
  'no2': 'Dwutlenek Azotu',
  'so2': 'Dwutlenek Siarki',
  'co': 'Tlenek Węgla',
  't': 'Temperatura',
  'p': 'Ciśnienie',
  'h': 'Wilgotność',
  'w': 'Wiatr'
};

const suffices = {
  't': '°C',
  'p': 'hPa',
  'h': '%',
  'w': ' m/s'
};

const styles = StyleSheet.create({
  container: {},
  dataRow: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#ccc',
    color: '#363636'
  }
});
