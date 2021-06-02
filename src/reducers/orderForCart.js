import { SET_ORDER_FOR_CART } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDER_FOR_CART:
      console.log('SET_ORDER_FOR_CARTが発火しました。')
      state = []
      const orderForCartItemArray = action.orderForCartInfomationList
      return orderForCartItemArray;
    default:
      return state
  }
}