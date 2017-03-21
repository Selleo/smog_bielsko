import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text }      from 'react-native';
import header from '../stylesheets/Header'
import ElevatedView from 'react-native-elevated-view'

export default class PollutionValues extends Component {
  singleComponent(number) {
    return (
      <View style={header.withShadow}>
        <ElevatedView elevation={2} style={header.elevatedView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <Text>{names[this.getDatasetKeys()[number]]}</Text>
            <Text style={{fontSize: 18}}>{this.getDatasetItem(number).v} {suffices[this.getDatasetKeys()[number]] }</Text>
          </View>
        </ElevatedView>
      </View>
    )
  }

  bigComponent(number) {
    return (
      <View style={[styles.bigComponent, header.withShadow]}>
        <ElevatedView elevation={2} style={header.elevatedView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text>{names[this.getDatasetKeys()[number]]}</Text>
              <Text>{this.getDatasetItem(number).v} {suffices[this.getDatasetKeys()[number]] }</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text>Icon</Text>
            </View>
          </View>
        </ElevatedView>
      </View>
    )
  }

  render() {
    return (
      <View>
        { this.getDatasetKeys()[5] && this.singleComponent(5) }
        { this.getDatasetKeys()[2] && this.singleComponent(2) }
        { this.getDatasetKeys()[6] && this.singleComponent(6) }

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          { this.getDatasetKeys()[1] && this.bigComponent(1) }
          { this.getDatasetKeys()[8] && this.bigComponent(8) }
          { this.getDatasetKeys()[7] && this.bigComponent(7) }
          { this.getDatasetKeys()[4] && this.bigComponent(4) }
        </View>
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
  'co': 'Tlenek Węgla',
  'h': 'Wilgotność',
  'no2': 'Dwutlenek Azotu',
  'o3': 'Ozon',
  'p': 'Ciśnienie',
  'pm10': 'Pył zawieszony',
  'so2': 'Dwutlenek Siarki',
  't': 'Temperatura',
  'w': 'Wiatr'
};

const suffices = {
  't': '°C',
  'p': 'hPa',
  'h': '%',
  'w': ' m/s'
};

const styles = StyleSheet.create({
  oneComponent: {
    flex: 1,
  },
  twoComponents: {
    flex: 0.5,
  },
  bigComponent: {
    backgroundColor: 'white',
    height: 50,
  }
});
