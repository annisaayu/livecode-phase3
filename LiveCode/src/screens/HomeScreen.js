import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Button from 'react-native-button';

import styles from '../assets/style/main.style'


export default class App extends Component {
  
  onPressStart () {
    this.props.navigation.navigate('Play')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>OXO</Text>
        <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => { this.onPressStart()}}>
        START!
      </Button>
      </View>
    );
  }
}


