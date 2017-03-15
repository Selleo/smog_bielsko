import React, { Component, PropTypes } from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
let {height, width} = Dimensions.get('window');

import CityName from './CityName'
import CityDescription from './CityDescription'
import { fetchBgr } from './../sharing/extends'
import header from '../stylesheets/header'

export default class CityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      layout: {
        width: width,
        height: height
      }
    }
  }

  componentDidMount() {
    fetchBgr('Zywiec city')
      .then((response) => {
        this.setState({ bgr: response.link });
        this.setState({ fetched: true });
      })
      .catch((response) => {
        console.log(response);
      })
  }

  render() {
    let {bgr, layout} = this.state;
    return (
      <View style={header.container}>
          <Image source={require('./../images/header.jpg')} style={header.bgr}>
            <Image source={{ uri: bgr }} style={[header.bgr, header.bgr2]} />
            <View>
              <CityName text={this.getCityInfo(0)}/>
              <CityDescription text={this.getCityInfo(1)}/>
            </View>
          </Image>
      </View>
    )
  }

  getCityInfo(part) {
    return this.props.city.name.split(', ')[part]
  }

  static propTypes = {
    city: PropTypes.object.isRequired,
  };
}
