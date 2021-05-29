import { SET_ORDERS } from '../actions/index'

export default (state = [], action) => {
  console.log('SET_ORDERSリデューサー発火')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SET_ORDERS:
      const orderArray = [...state, action.orderInfomationList]
      console.log(orderArray)
      return orderArray;
    default:
      return state
  }
}