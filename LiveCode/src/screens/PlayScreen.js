import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Button from 'react-native-button';

import styles from '../assets/style/play.style'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Play</Text>
        <View>
          <View style={styles.rowBoard}>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>O</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowBoard}>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>O</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowBoard}>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>O</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


