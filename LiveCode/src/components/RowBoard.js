import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Button from 'react-native-button';
import { connect } from 'react-redux'

import styles from '../assets/style/play.style'

export default class App extends Component {
  render() {
    return (
      <View style={styles.rowBoard}>
        <TouchableOpacity style={styles.xo}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.xo}>
          <Text>O</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.xo}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    )
  }
}