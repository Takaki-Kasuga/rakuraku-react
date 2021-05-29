import { SET_ORDERS } from '../actions/index'

export default (state = [], action) => {
  console.log('SET_ORDERSリデューサー発火')
  switch (action.type) {
    case SET_ORDERS:
      return state;
    default:
      return state
  }
}