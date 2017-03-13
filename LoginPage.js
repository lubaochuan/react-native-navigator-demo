'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigator,
} from 'react-native';

class LoginPage extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is the Login Page.</Text>
      </View>
    );
  }
  gotoNext() {}
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <Text style={{color: 'white', margin: 10, fontSize: 16}}>
        Login
      </Text>
    );
  }
};

module.exports = LoginPage;
