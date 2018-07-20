import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Button from 'react-native-button';
import { bindActionCreators } from 'redux'

import styles from '../assets/style/play.style'
import { touchBoard , winner} from '../store/actions/gameAction'
import { connect } from 'react-redux'

class PlayScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'board',
      winner: null
    }
  }

  touchBoard(row, column) {

  }

  render() {
    let board = this.props.redux.board
    return (
      <View style={styles.container}>
        <View>
          {}
          <View style={styles.rowBoard}>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(0,0)}}>
              <Text>{board[0][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(0,1)}}>
              <Text>{board[0][1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(0,2)}}>
              <Text>{board[0][2]}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowBoard}>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(1,0)}}>
              <Text>{board[1][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(1,1)}}>
              <Text>{board[1][1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(1,2)}}>
              <Text>{board[1][2]}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowBoard}>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(2,0)}}>
              <Text>{board[2][0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(2,0)}}>
              <Text>{board[2][1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(2,0)}}>
              <Text>{board[2][2]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ touchBoard, winner }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PlayScreen);

