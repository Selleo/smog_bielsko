import React, { Component, PropTypes }       from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

import CityDescription                       from './CityDescription'
import CityName                              from './CityName'
import header                                from '../stylesheets/Header'
import { fetchBgr }                          from './../sharing/Extends'

export default class CityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      fadeAnim: new Animated.Value(0),
    }
  }

  componentDidMount() {
    let queryName;

    if (this.props.stationName == undefined) queryName = this.getCityInfo(0) + ' town';
    else queryName = this.props.stationName + ' town';

    fetchBgr(queryName)
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
    let { bgr } = this.state;
    return (
      <View style={header.container}>
        <Image source={require('./../images/header.jpg')} style={header.bgr}>
          <Animated.Image source={{ uri: bgr }} style={this.secondUmageStyles()}/>
          <View style={{ alignItems: 'flex-start'}}>
            <Image source={require('./../images/header_overlay.png')} style={[header.bgr, header.bgr2]}/>
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
