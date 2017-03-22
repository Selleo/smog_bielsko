import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Dimensions }      from 'react-native';
import header from '../stylesheets/Header'
import ElevatedView from 'react-native-elevated-view'
const window = Dimensions.get('window');

import Icon from '../MyIcons';
let color, itemValueVar;

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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 18}}>{this.getDatasetItem(type).v} {suffices[type]}</Text>
              <View backgroundColor={this.conditions(type)} style={[header.circleContainer, styles.singleCTitle]}>
                <View style={header.circle}></View>
              </View>
            </View>
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
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Text>{names[type]}</Text>
                  <Text style={{fontSize: 18, marginTop: 1}}>{this.formatValue(type)} {suffices[type] }</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text><Icon name={icons[type]} size={28} color="#95cfda" /></Text>
                </View>
              </View>
          </View>
        </ElevatedView>
      </View>
    )
  }

  formatValue(value){
    return Math.round(this.getDatasetItem(value).v * 100) / 100
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

  conditions(value) {
    if (value == 'pm10') {
      return this.pm10Condition(value)
    }
    else if (value == 'no2'){
      return this.no2Condition(value)
    }
    else if (value == 'so2'){
      return this.so2Condition(value)
    }
  }
  
  itemValue(value) {
    return this.getDatasetItem(value).v
  }
  
  pm10Condition(value) {
    itemValueVar = this.itemValue(value);
    color = undefined;

    if (itemValueVar < 50) { color = colors['1'] }
    else if (itemValueVar < 100) { color = colors['2'] }
    else if (itemValueVar < 150) { color = colors['3'] }
    else if (itemValueVar < 200) { color = colors['4'] }
    else if (itemValueVar < 300) { color = colors['5'] }
    return color
  }

  so2Condition(value) {
    itemValueVar = this.itemValue(value);
    color = undefined;

    if (itemValueVar < 50) { color = colors['1'] }
    else if (itemValueVar < 125) { color = colors['2'] }
    else if (itemValueVar < 250) { color = colors['3'] }
    else if (itemValueVar < 380) { color = colors['4'] }
    else if (itemValueVar >= 500) { color = colors['5'] }
    return color
  }

  no2Condition(value) {
    itemValueVar = this.itemValue(value);
    color = undefined;

    if (itemValueVar < 40) { color = colors['1'] }
    else if (itemValueVar < 150) { color = colors['2'] }
    else if (itemValueVar < 250) { color = colors['3'] }
    else if (itemValueVar < 400) { color = colors['4'] }
    else if (itemValueVar >= 400) { color = colors['5'] }
    return color
  }

  static propTypes = {
    dataset: PropTypes.object.isRequired
  };
}
const colors = {
  1: '#57b108',
  2: '#b0dd10',
  3: '#ffd911',
  4: '#e58100',
  5: '#d82329'
};

const names = {
  'co': 'Tlenek Węgla',
  'h': 'Wilgotność',
  'no2': 'Dwutlenek Azotu',
  'o3': 'Ozon',
  'p': 'Ciśnienie',
  'pm10': 'Pył zawieszony (PM10)',
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
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  elevatedView: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    margin: 0,
    marginBottom: 20
  },
  singleCTitle: {
    marginLeft: 5
  }
});
