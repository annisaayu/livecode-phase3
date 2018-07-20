import { createStore,} from 'redux';
import thunk from 'redux-thunk'

import {TicTacToeReducers} from './reducers/gameReducer';


const store = createStore(TicTacToeReducers)

export default store
