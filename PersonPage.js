'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Navigator,
  TouchableOpacity,
} from 'react-native';

class PersonPage extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={this.gotoNext.bind(this)}>
          <Text>Go to a page with no navigator.</Text>
        </TouchableOpacity>
      </View>
    );
  }

  gotoNext(){
    this.props.navigator.push({
      id: 'NoNavigatorPage',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
        onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
        <Text style={{color: 'white', margin: 10,}}>
          unknown page
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Person Page
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = PersonPage;
