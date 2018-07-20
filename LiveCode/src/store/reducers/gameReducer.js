const initialState = {
	activePlayer: 0,
	winner: false,
	board: [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
}

export const TicTacToeReducers = (state=initialState, action) => {
	switch (action.type) {
		case 'TOUCH_BOARD':
		state= {
			...state,
			board: action.payload.newBoard,
			activePlayer: action.payload.activePlayer
		}
			return state

		case 'WINNER':
			state = {
				...state,
				winner: action.payload
			}
			return state

		default : return state

	}
}