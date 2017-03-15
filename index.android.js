import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Navigator, DrawerLayoutAndroid } from 'react-native';

import Index from './scenes/Index'
import DrawerMenu from './components/nav/DrawerMenu'

export default class smog_bielsko extends Component {
  constructor() {
    super();
    this.routes = [
      { id: 'index' }
    ]
  }

  render() {
    var navigationView = (
      <DrawerMenu
        closeDrawer={(stationId) => this.drawer.closeDrawer() || this.nav.replace({
          id: 'index',
          stationId: stationId
        })}
        getCurrentStationId={() => this.currentStationId}
      />
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerLockMode='unlocked'
        ref={(drawer) => {
          return this.drawer = drawer
        }}
        renderNavigationView={() => navigationView}>
        <Navigator
          initialRoute={this.routes[0]}
          initialRouteStack={this.routes}
          renderScene={this.navigatorRenderScene.bind(this)}
        />
      </DrawerLayoutAndroid>
    )
  }

  navigatorRenderScene(route, nav) {
    this.nav = nav;
    this.currentStationId = route.stationId;
    switch (route.id) {
      case 'index':
        return (<Index nav={nav} stationId={route.stationId}/>)
    }
  }
}

AppRegistry.registerComponent('smog_bielsko', () => smog_bielsko);
