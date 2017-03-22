import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Dimensions }      from 'react-native';
import header from '../stylesheets/Header'
import ElevatedView from 'react-native-elevated-view'
const window = Dimensions.get('window');

import Icon from '../MyIcons';

export default class PollutionValues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };

    this.onLayout = this.onLayout.bind(this);
  }

  singleComponent(type) {
    return (
      <View style={header.withShadow}>
        <ElevatedView elevation={4} style={header.elevatedView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <Text>{names[type]}</Text>
            <Text style={{fontSize: 18}}>{this.getDatasetItem(type).v} {suffices[type]}</Text>
          </View>
        </ElevatedView>
      </View>
    )
  }

  bigComponent(type) {
    return (
      <View style={{ width: (this.state.width - 60)/ 2, marginHorizontal:5 }}>
        <ElevatedView elevation={4} style={[header.elevatedView, styles.elevatedView]}>
          <View style={[styles.bigComponent]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Text>{names[type]}</Text>
                  <Text>{this.getDatasetItem(type).v} {suffices[type] }</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text><Icon name={icons[type]} size={25} color="#900" /></Text>
                </View>
              </View>
          </View>
        </ElevatedView>
      </View>
    )
  }

  render() {
    return (
      <View style={{alignItems: 'stretch',}} onLayout={this.onLayout}>
        { this.getDatasetItem('pm10') && this.singleComponent('pm10') }
        { this.getDatasetItem('no2') && this.singleComponent('no2') }
        { this.getDatasetItem('so2') && this.singleComponent('so2') }

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginHorizontal: 15 }}>
          { this.getDatasetItem('h') && this.bigComponent('h') }
          { this.getDatasetItem('w') && this.bigComponent('w') }
          { this.getDatasetItem('t') && this.bigComponent('t') }
          { this.getDatasetItem('p') && this.bigComponent('p') }
        </View>

      </View>
    )
  }

  getDatasetItem(type) {
    return this.props.dataset[type]
  }

  onLayout() {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
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
const icons = {
  't': "thermometer",
  'p': "pressure",
  'h': "rain",
  'w': "wind",

};
const suffices = {
  't': '°C',
  'p': 'hPa',
  'h': '%',
  'w': ' m/s'
};

const styles = StyleSheet.create({
  test: {
    alignItems: 'flex-start',
  },
  bigComponent: {
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  elevatedView: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    margin: 0,
    marginBottom: 20
  }
});
