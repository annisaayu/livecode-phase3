import data from '../data.json'


export const storeVideosSuccess = (data) => {
  return {
    type: 'STORE_VIDEOS_SUCCESS',
    payload: data
  }
}

export const storeVideosLoad = () => {
  return {
    type: 'LOAD_STORE_VIDEOS'
  }
}

export const storeVideosFailed = (err) => {
  return {
    type: 'STORE_VIDEOS_FAILED',
    error: err
  }
}

export const fetchVideos = () => {
  return dispatch => {
    dispatch(storeVideosLoad())
    dispatch(storeVideosSuccess(data.items.reverse()))
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}