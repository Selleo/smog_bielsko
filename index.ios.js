import React, { Component }                                       from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, Navigator } from 'react-native'

import Index                                                      from './components/scenes/Index'
import DrawerMenu                                                 from './components/nav/DrawerMenu'

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
      <Navigator
        initialRoute={this.routes[0]}
        initialRouteStack={this.routes}
        renderScene={this.navigatorRenderScene.bind(this)}
      />
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
