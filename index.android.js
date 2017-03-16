import React, { Component }                          from 'react'
import { AppRegistry, Image, Navigator, View, Text } from 'react-native'
import SideMenu                                      from 'react-native-side-menu'

import Button                                        from './components/nav/Button'
import DrawerMenu                                    from './components/nav/DrawerMenu'
import Index                                         from './components/scenes/Index'
import loading                                       from './components/stylesheets/Loading'
import menu                                          from './components/stylesheets/Menu'
import { getData, stationId }                        from './components/sharing/Extends'

export default class smog_bielsko extends Component {
  constructor() {
    super();
    this.routes = [{ id: 'index' }];
    this.state = {
      isOpen: false,
      pending: true
    }
  }

  componentWillMount() {
    getData().then((responseJson) => {
      return this.setState({ dataStations: responseJson.data, pending: false })
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = () => {
    this.setState({
      isOpen: false,
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const menuNav = <DrawerMenu
      closeDrawer={(stationId) =>
      this.nav.replace({
        id: 'index',
        stationId: stationId
      }) && this.onMenuItemSelected()
      }
      getCurrentStationId={() => this.currentStationId}
    />;
    if (this.state.pending) {
      return (
        <View style={loading.loadingContainer}>
          <Text style={loading.loadingText}>Loading</Text>
        </View>
      )
    } else {
      return (
        <SideMenu
          menu={menuNav}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <Navigator
            initialRoute={this.routes[0]}
            initialRouteStack={this.routes}
            renderScene={this.navigatorRenderScene.bind(this)}
          />
          <Button style={menu.button} onPress={() => this.toggle()} title={'test'}>
            <Image
              source={require('./components/images/menu.png')} style={{ width: 32, height: 32 }}/>
          </Button>
        </SideMenu>
      )
    }
  }

  navigatorRenderScene(route, nav) {
    this.nav = nav;
    this.currentStationId = route.stationId;
    switch (route.id) {
      case 'index':
        return (<Index nav={nav} stationId={route.stationId} dataStations={this.state.dataStations}/>)
    }
  }
}

AppRegistry.registerComponent('smog_bielsko', () => smog_bielsko);
