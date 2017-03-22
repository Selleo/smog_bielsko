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
      pendingApp: true
    }
  }

  componentWillMount() {
    this.fetchData(stationId)
  }

  fetchData(stationId) {
    getData(stationId).then((responseJson) => {
      this.hideMenu();
      return this.setState({ dataStations: responseJson.data, pendingApp: false, pendingView: false })
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  hideMenu() {
    this.setState({
      isOpen: false,
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const menuNav = <DrawerMenu
      closeDrawer={(stationId, stationName) => {
        this.nav.replace({
          id: 'index',
          stationId: stationId,
          stationName: stationName
        });
        this.fetchData(stationId);
      }}
      getCurrentStationId={() => {
        return this.currentStationId
      }}
    />;

    if (this.state.pendingApp) {
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
            renderScene={this.navigatorRenderScene.bind(this)}
          />
          <Button style={menu.button} onPress={() => this.toggle()} title={'test'}>
            <Image
              source={require('./components/images/menu.png')} style={{ width: 68, height: 68 }}/>
          </Button>
        </SideMenu>
      )
    }
  }

  navigatorRenderScene(route, nav) {
    this.nav = nav;
    this.currentStationId = route.stationId;
    this.stationName = route.stationName;
    switch (route.id) {
      case 'index':
        return (<Index nav={nav} stationId={route.stationId} dataStations={this.state.dataStations} stationName={this.stationName} />)
    }
  }
}

AppRegistry.registerComponent('smog_bielsko', () => smog_bielsko);
