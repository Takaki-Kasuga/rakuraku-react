import { ORDER_UNIQUE_ID } from '../actions/index'

export default (state = null, action) => {
  switch (action.type) {
    case ORDER_UNIQUE_ID:
      console.log('ORDER_UNIQUE_IDが発火')
      const UniqueId = action.orderUniqueIdForCart
      return UniqueId
    default:
      return state
  }
}