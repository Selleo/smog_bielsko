import React, { Component }                          from 'react';
import { Dimensions, ScrollView, View, Image, Text } from 'react-native';

import menu                                          from './../stylesheets/Menu'

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const window = Dimensions.get('window');

module.exports = class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={menu.menu}>
        <View style={menu.avatarContainer}>
          <Image
            style={menu.avatar}
            source={{ uri, }}/>
          <Text style={menu.name}>Your name</Text>
        </View>

        <Text
          onPress={() => this.props.onItemSelected('About')}
          style={menu.item}>
          About
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Contacts')}
          style={menu.item}>
          Contacts
        </Text>
      </ScrollView>
    );
  }
};
