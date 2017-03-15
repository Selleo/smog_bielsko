import React, { Component, PropTypes } from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions, StyleSheet, Animated } from 'react-native';
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
      fadeAnim: new Animated.Value(0),
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
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 1,
            duration: 700
          }
        ).start();
      })
      .catch((response) => {
        console.log(response);
      })
  }

  secondUmageStyles() {
    return {
      alignSelf: 'center',
      backgroundColor: 'transparent',
      borderWidth: 0,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 0,
      opacity: this.state.fadeAnim,
      padding: 0,
      resizeMode: 'cover',
      ...StyleSheet.absoluteFillObject
    }
  }

  render() {
    let {bgr, layout} = this.state;
    return (
      <View style={header.container}>
          <Image source={require('./../images/header.jpg')} style={header.bgr}>
            <Animated.Image source={{ uri: bgr }} style={this.secondUmageStyles()} />
            <View>
              <Image source={require('./../images/header_overlay.png')} style={[header.bgr, header.bgr2]} />
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
