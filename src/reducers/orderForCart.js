import { SET_ORDER_FOR_CART } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDER_FOR_CART:
      console.log('SET_ORDER_FOR_CARTが発火しました。')
      console.log(state)
      console.log(action)
      state = []
      const orderForCartItemArray = action.orderForCartInfomationList
      console.log(orderForCartItemArray)
      return orderForCartItemArray;
    default:
      return state
  }
}