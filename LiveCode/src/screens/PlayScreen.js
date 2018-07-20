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

  computerTurn = ()  => {
    const boardData = this.props.redux.board
    let getBoard = false
    let nullBoard = []
    for (var i = 0; i <  boardData.length; i++) {
      for (var j = 0; j < boardData[i].length; j++)  {
        if (boardData[i][j] == 0) {
           boardData[i][j] = 2
           getBoard = true
          break
        }
      }
      if (getBoard) {
        break; 
      }
    }
  
    this.props.touchBoard(boardData, 0)
  }

  touchBoard(row, column) {
    let boardData = this.props.redux.board
    let player = this.props.redux.activePlayer

    if (boardData[x][y] == 0) {
      if (activePlayer == 0) {
          boardData[x][y] = 1
          activePlayer = 1
        } else {
          boardData[x][y] = 2
          activePlayer = 0
        }
        const newBoard = boardData
        this.props.touchBoard(newBoard, 1)
        this.computerTurn()
    }
  }

  render() {
    let board = this.props.redux.board
    return (
      <View style={styles.container}>
        <View>
          {}
          <View style={styles.rowBoard}>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(0,0)}}>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
                <Text>{board[0][0]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(0,1)}}>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
              <Text>{board[0][1]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(0,2)}}>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
              <Text>{board[0][2]}</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowBoard}>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(1,0)}}>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
              <Text>{board[1][0]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(1,1)}}>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
              <Text>{board[1][1]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(1,2)}}>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}><Text>{board[1][2]}</Text></View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowBoard}>
            <TouchableOpacity  style={styles.xo} onPress={() => {this.touchBoard(2,0)}}>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}><Text>{board[2][0]}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(2,1)}}>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}><Text>{board[2][1]}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.xo} onPress={() => {this.touchBoard(2,2)}}>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue',}}>
              <Text>{board[2][2]}</Text></View>
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

