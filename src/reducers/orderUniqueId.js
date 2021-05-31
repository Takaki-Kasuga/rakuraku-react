import { ORDER_UNIQUE_ID } from '../actions/index'

export default (state = null, action) => {
  switch (action.type) {
    case ORDER_UNIQUE_ID:
      console.log('ORDER_UNIQUE_IDが発火')
      console.log(state)
      console.log(action)
      const UniqueId = action.orderUniqueIdForCart
      console.log(UniqueId)
      return UniqueId
    default:
      return state
  }
}