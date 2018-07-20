export const touchBoard = (newBoard, activePlayer) => {
  return {
    type: 'TOUCH_BOARD',
    payload: { newBoard, activePlayer }
  }
}
export const winner = (player) => {
  return {
    type: 'WINNER',
    payload: player
    
}}

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }