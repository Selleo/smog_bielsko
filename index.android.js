import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';

import Index from './scenes/Index'

export default class smog_bielsko extends Component {
  constructor() {
    super();
    this.routes = [
      { id: 'index' }
    ]
  }

  render() {
    return (
      <Navigator
        initialRoute={this.routes[0]}
        initialRouteStack={this.routes}
        renderScene={this.navigatorRenderScene.bind(this)}
      />
    )
  }

  navigatorRenderScene(route, nav) {
    switch (route.id) {
      case 'index':
        return (<Index nav={nav} />)
    }
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('smog_bielsko', () => smog_bielsko);
