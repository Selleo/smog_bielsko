import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';

import DrawerCityLink from './DrawerCityLink'
import DrawerHeader from './DrawerHeader'

export default class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerHeader text='Wybierz miejscowość:' />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 6535, name: 'Bielsko-Biała'}} closeDrawer={this.props.closeDrawer} />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 8281, name: 'Żywiec'}} closeDrawer={this.props.closeDrawer} />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 6548, name: 'Ustroń'}} closeDrawer={this.props.closeDrawer} />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 6547, name: 'Tychy'}} closeDrawer={this.props.closeDrawer} />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 6540, name: 'Katowice'}} closeDrawer={this.props.closeDrawer} />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 6544, name: 'Wodzisław Śląski'}} closeDrawer={this.props.closeDrawer} />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 6542, name: 'Rybnik'}} closeDrawer={this.props.closeDrawer} />
        <DrawerCityLink getCurrentStationId={this.props.getCurrentStationId} station={{id: 2793, name: 'Biały Krzyż (Czechy)'}} closeDrawer={this.props.closeDrawer} />
      </View>
    )
  }
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired,
    getCurrentStationId: PropTypes.func.isRequired,
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});
