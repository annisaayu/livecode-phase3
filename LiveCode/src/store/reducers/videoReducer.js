const initialState = {
	videos: [],
	detailVideo: {},
  loading: false,
  error: {
    status: false,
    message: ''
  }
}

export const FetchVideosReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'LOAD_STORE_VIDEOS':
			state = {
				...state,
				loading: true
			}			
			return state

		case 'STORE_VIDEOS_SUCCESS':
			state = {
				...state,
				videos:action.payload,
				loading: false
			}
			return state

		case 'STORE_VIDEOS_FAILED':
			state = {
				...state,
        loading: false,
        error: {
          status: true,
          message: action.error
        }
			}
			return state

		default : return state

	}
}