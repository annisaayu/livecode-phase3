import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Button from 'react-native-button';

import styles from './src/assets/style/main.style'
import HomeScreen from './src/screens/HomeScreen'
import PlayScreen from './src/screens/PlayScreen'
import FinalScreen from './src/screens/FinalScreen'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Play: PlayScreen,
    Final: FinalScreen
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}


